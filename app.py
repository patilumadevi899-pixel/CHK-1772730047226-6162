from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
import os
import uuid
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, static_folder='frontend', static_url_path='')
app.secret_key = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')

# Configure CORS
CORS(app, origins=["http://localhost:5000", "http://127.0.0.1:5000", "http://localhost:5500"], supports_credentials=True)

# Configuration
app.config['UPLOAD_FOLDER'] = os.getenv('UPLOAD_FOLDER', 'uploads')
app.config['MAX_CONTENT_LENGTH'] = int(os.getenv('MAX_FILE_SIZE', 50)) * 1024 * 1024  # 50MB default
app.config['ALLOWED_EXTENSIONS'] = {'webm', 'mp4', 'mov', 'avi', 'pdf', 'docx', 'png', 'jpg', 'jpeg'}

# Create upload folders with proper error handling
def create_folders():
    """Create necessary folders with error handling"""
    folders_to_create = [
        app.config['UPLOAD_FOLDER'],
        os.path.join(app.config['UPLOAD_FOLDER'], 'resumes'),
        os.path.join(app.config['UPLOAD_FOLDER'], 'recordings'),
        os.path.join(app.config['UPLOAD_FOLDER'], 'photos'),
        os.path.join(app.config['UPLOAD_FOLDER'], 'misc')
    ]
    
    for folder in folders_to_create:
        try:
            if not os.path.exists(folder):
                os.makedirs(folder, exist_ok=True)
                print(f"✅ Created folder: {folder}")
            else:
                print(f"📁 Folder exists: {folder}")
        except Exception as e:
            print(f"⚠️  Warning: Could not create folder {folder}: {e}")

# Create folders on startup
create_folders()

# ============ BASIC API ROUTES ============

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'Server is running',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/test', methods=['GET'])
def test_route():
    """Test endpoint"""
    return jsonify({'message': 'API is working!'})

# ============ FILE UPLOAD HELPERS ============

def allowed_file(filename):
    """Check if file extension is allowed"""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/api/upload/<file_type>', methods=['POST'])
def upload_file(file_type):
    """Generic file upload endpoint"""
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and allowed_file(file.filename):
        # Generate unique filename
        ext = file.filename.rsplit('.', 1)[1].lower()
        filename = f"{uuid.uuid4()}.{ext}"
        
        # Determine subfolder
        subfolder = file_type if file_type in ['resumes', 'recordings', 'photos'] else 'misc'
        folder_path = os.path.join(app.config['UPLOAD_FOLDER'], subfolder)
        
        # Ensure subfolder exists
        try:
            os.makedirs(folder_path, exist_ok=True)
        except Exception as e:
            return jsonify({'error': f'Cannot create upload directory: {str(e)}'}), 500
        
        save_path = os.path.join(folder_path, filename)
        
        try:
            # Save file
            file.save(save_path)
            
            return jsonify({
                'message': 'File uploaded successfully',
                'filename': filename,
                'path': f'/uploads/{subfolder}/{filename}'
            }), 200
        except Exception as e:
            return jsonify({'error': f'Error saving file: {str(e)}'}), 500
    
    return jsonify({'error': 'File type not allowed'}), 400

# ============ SERVE UPLOADED FILES ============

@app.route('/uploads/<subfolder>/<filename>')
def serve_upload(subfolder, filename):
    """Serve uploaded files"""
    try:
        return send_from_directory(
            os.path.join(app.config['UPLOAD_FOLDER'], subfolder),
            filename
        )
    except Exception:
        return jsonify({'error': 'File not found'}), 404

# ============ FRONTEND ROUTING ============

@app.route('/')
def serve_frontend():
    """Serve the main frontend HTML file"""
    try:
        return send_from_directory(app.static_folder, 'index.html')
    except Exception as e:
        return jsonify({'error': f'Frontend file not found: {str(e)}'}), 404

@app.route('/<path:path>')
def serve_static(path):
    """Serve static files (CSS, JS, images)"""
    try:
        return send_from_directory(app.static_folder, path)
    except Exception:
        # If file not found, return index.html for SPA routing
        try:
            return send_from_directory(app.static_folder, 'index.html')
        except:
            return jsonify({'error': 'File not found'}), 404

# ============ ERROR HANDLERS ============

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Resource not found', 'path': request.path}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error', 'details': str(error)}), 500

@app.errorhandler(413)
def too_large(error):
    return jsonify({'error': 'File too large. Maximum size is 50MB'}), 413

# ============ MAIN ENTRY POINT ============

if __name__ == '__main__':
    host = os.getenv('HOST', '0.0.0.0')
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('DEBUG', 'True').lower() == 'true'
    
    print("\n" + "="*60)
    print("🚀 Privacy-First Career Mapper Server Starting...")
    print("="*60)
    print(f"📁 Static folder: {app.static_folder}")
    print(f"📁 Upload folder: {app.config['UPLOAD_FOLDER']}")
    print(f"🌐 URL: http://{host if host != '0.0.0.0' else 'localhost'}:{port}")
    print(f"🔧 Debug mode: {debug}")
    print(f"📦 Max file size: {app.config['MAX_CONTENT_LENGTH'] / (1024*1024)}MB")
    print("="*60 + "\n")
    
    app.run(
        host=host,
        port=port,
        debug=debug
    )