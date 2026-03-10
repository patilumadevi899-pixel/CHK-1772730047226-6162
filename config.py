import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    # Database configuration
    DB_CONFIG = {
        'host': os.getenv('DB_HOST', 'localhost'),
        'user': os.getenv('DB_USER', 'root'),
        'password': os.getenv('DB_PASSWORD', ''),
        'database': os.getenv('DB_NAME', 'career_mapper')
    }
    
    # Application configuration
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')
    UPLOAD_FOLDER = os.getenv('UPLOAD_FOLDER', 'uploads')
    MAX_FILE_SIZE = int(os.getenv('MAX_FILE_SIZE', 50)) * 1024 * 1024
    ALLOWED_EXTENSIONS = {'webm', 'mp4', 'mov', 'avi'}
    
    # Frontend URL for CORS
    FRONTEND_URL = os.getenv('FRONTEND_URL', 'http://localhost:5000')
    