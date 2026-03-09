// Career paths data with skills, courses, projects, and salary ranges
const CAREER_PATHS = {
    "Data Scientist": {
        required_skills: ["Python", "SQL", "Machine Learning", "Statistics", "Data Visualization", "Pandas", "NumPy", "Deep Learning", "R", "Big Data"],
        skills_level: {
            beginner: ["Python", "SQL", "Statistics"],
            intermediate: ["Machine Learning", "Data Visualization", "Pandas", "NumPy"],
            advanced: ["Deep Learning", "Big Data", "MLOps"]
        },
        courses: [
            { name: "IBM Data Science Professional Certificate", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/ibm-data-science" },
            { name: "Data Science Specialization", platform: "Coursera", url: "https://www.coursera.org/specializations/jhu-data-science" },
            { name: "Machine Learning by Andrew Ng", platform: "Coursera", url: "https://www.coursera.org/learn/machine-learning" },
            { name: "Python for Data Science", platform: "edX", url: "https://www.edx.org/professional-certificate/python-data-science" },
            { name: "Data Scientist Career Path", platform: "DataCamp", url: "https://www.datacamp.com/career-tracks/data-scientist-with-python" }
        ],
        projects: [
            { name: "Customer Churn Prediction", description: "Build ML model to predict customer churn", difficulty: "Intermediate" },
            { name: "Sentiment Analysis on Social Media", description: "Analyze sentiment of tweets about a product", difficulty: "Beginner" },
            { name: "Recommendation System", description: "Build movie/product recommendation engine", difficulty: "Advanced" },
            { name: "Sales Forecasting", description: "Time series analysis for sales prediction", difficulty: "Intermediate" },
            { name: "Image Classification with CNN", description: "Build CNN model to classify images", difficulty: "Advanced" }
        ],
        certifications: [
            { name: "AWS Certified Machine Learning", provider: "Amazon", url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/" },
            { name: "Google Professional Data Engineer", provider: "Google", url: "https://cloud.google.com/certification/data-engineer" },
            { name: "Microsoft Certified: Azure Data Scientist", provider: "Microsoft", url: "https://learn.microsoft.com/en-us/certifications/azure-data-scientist/" },
            { name: "Cloudera Data Platform Generalist", provider: "Cloudera", url: "https://www.cloudera.com/about/training/certification.html" },
            { name: "SAS Certified Data Scientist", provider: "SAS", url: "https://www.sas.com/en_us/certification.html" }
        ],
        job_roles: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "AI Engineer", "Business Intelligence Analyst"],
        salary_range: { entry: "$80,000 - $100,000", mid: "$100,000 - $130,000", senior: "$130,000 - $180,000" }
    },
    
    "Web Developer": {
        required_skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "SQL", "Git", "REST APIs", "MongoDB"],
        skills_level: {
            beginner: ["HTML", "CSS", "JavaScript", "Git"],
            intermediate: ["React", "Node.js", "SQL", "REST APIs"],
            advanced: ["MongoDB", "GraphQL", "TypeScript", "Docker", "AWS"]
        },
        courses: [
            { name: "The Complete Web Developer Course", platform: "Udemy", url: "https://www.udemy.com/course/the-complete-web-developer-course-2/" },
            { name: "Full Stack Web Development Specialization", platform: "Coursera", url: "https://www.coursera.org/specializations/full-stack-react" },
            { name: "CS50's Web Programming", platform: "edX", url: "https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript" },
            { name: "Meta Front-End Developer", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/meta-front-end-developer" },
            { name: "The Odin Project", platform: "Free", url: "https://www.theodinproject.com/" }
        ],
        projects: [
            { name: "E-commerce Website", description: "Build full-stack e-commerce site with cart functionality", difficulty: "Advanced" },
            { name: "Portfolio Website", description: "Create personal portfolio with responsive design", difficulty: "Beginner" },
            { name: "Task Management App", description: "Build Trello-like task management application", difficulty: "Intermediate" },
            { name: "Weather App with API", description: "Create weather app using external API", difficulty: "Intermediate" },
            { name: "Social Media Dashboard", description: "Build dashboard with charts and analytics", difficulty: "Advanced" }
        ],
        certifications: [
            { name: "Meta Front-End Developer Certificate", provider: "Meta", url: "https://www.coursera.org/professional-certificates/meta-front-end-developer" },
            { name: "AWS Certified Developer", provider: "Amazon", url: "https://aws.amazon.com/certification/certified-developer-associate/" },
            { name: "Google Professional Cloud Developer", provider: "Google", url: "https://cloud.google.com/certification/cloud-developer" },
            { name: "Microsoft Certified: Azure Developer", provider: "Microsoft", url: "https://learn.microsoft.com/en-us/certifications/azure-developer/" },
            { name: "MongoDB Certified Developer", provider: "MongoDB", url: "https://learn.mongodb.com/certifications" }
        ],
        job_roles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "React Developer", "Node.js Developer"],
        salary_range: { entry: "$60,000 - $80,000", mid: "$80,000 - $110,000", senior: "$110,000 - $150,000" }
    },
    
    "Cybersecurity Analyst": {
        required_skills: ["Network Security", "Cryptography", "Penetration Testing", "Risk Assessment", "Python", "Linux", "Firewalls", "Incident Response", "Security Auditing", "SIEM Tools"],
        skills_level: {
            beginner: ["Network Security", "Linux", "Python", "Firewalls"],
            intermediate: ["Cryptography", "Risk Assessment", "Security Auditing", "Incident Response"],
            advanced: ["Penetration Testing", "SIEM Tools", "Threat Hunting", "Malware Analysis"]
        },
        courses: [
            { name: "Google Cybersecurity Professional Certificate", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/google-cybersecurity" },
            { name: "CompTIA Security+ Certification", platform: "CompTIA", url: "https://www.comptia.org/certifications/security" },
            { name: "Certified Ethical Hacker (CEH)", platform: "EC-Council", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" },
            { name: "Cybersecurity Fundamentals", platform: "edX", url: "https://www.edx.org/course/cybersecurity-fundamentals" },
            { name: "IBM Cybersecurity Analyst", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst" }
        ],
        projects: [
            { name: "Network Security Scanner", description: "Build network vulnerability scanner", difficulty: "Advanced" },
            { name: "Password Manager", description: "Create secure password manager application", difficulty: "Intermediate" },
            { name: "Phishing Detection Tool", description: "Build ML model to detect phishing emails", difficulty: "Advanced" },
            { name: "SIEM Implementation", description: "Set up and configure SIEM for log analysis", difficulty: "Intermediate" },
            { name: "Encryption Tool", description: "Create file encryption/decryption tool", difficulty: "Beginner" }
        ],
        certifications: [
            { name: "CompTIA Security+", provider: "CompTIA", url: "https://www.comptia.org/certifications/security" },
            { name: "Certified Information Systems Security Professional (CISSP)", provider: "ISC²", url: "https://www.isc2.org/Certifications/CISSP" },
            { name: "Certified Ethical Hacker (CEH)", provider: "EC-Council", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" },
            { name: "GIAC Security Essentials (GSEC)", provider: "GIAC", url: "https://www.giac.org/certifications/security-essentials-gsec/" },
            { name: "Cisco Certified CyberOps Associate", provider: "Cisco", url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/cyberops-associate.html" }
        ],
        job_roles: ["Cybersecurity Analyst", "Security Engineer", "Penetration Tester", "SOC Analyst", "Security Consultant"],
        salary_range: { entry: "$70,000 - $90,000", mid: "$90,000 - $120,000", senior: "$120,000 - $160,000" }
    },
    
    "AI Engineer": {
        required_skills: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Reinforcement Learning", "MLOps", "Cloud AI"],
        skills_level: {
            beginner: ["Python", "Machine Learning", "NLP", "Computer Vision"],
            intermediate: ["Deep Learning", "TensorFlow", "PyTorch", "Cloud AI"],
            advanced: ["Reinforcement Learning", "MLOps", "Generative AI", "LLM Fine-tuning", "AI Architecture"]
        },
        courses: [
            { name: "Deep Learning Specialization", platform: "Coursera", url: "https://www.coursera.org/specializations/deep-learning" },
            { name: "AI Engineering Professional Certificate", platform: "IBM", url: "https://www.coursera.org/professional-certificates/ai-engineer" },
            { name: "Natural Language Processing Specialization", platform: "Coursera", url: "https://www.coursera.org/specializations/natural-language-processing" },
            { name: "TensorFlow Developer Certificate", platform: "TensorFlow", url: "https://www.tensorflow.org/certificate" },
            { name: "AI for Everyone", platform: "DeepLearning.AI", url: "https://www.deeplearning.ai/courses/ai-for-everyone/" }
        ],
        projects: [
            { name: "Chatbot with LLM", description: "Build chatbot using LLM and RAG architecture", difficulty: "Advanced" },
            { name: "Image Recognition System", description: "CNN-based image classifier", difficulty: "Intermediate" },
            { name: "Text Summarization Tool", description: "NLP-based article summarizer", difficulty: "Intermediate" },
            { name: "Object Detection App", description: "Real-time object detection using YOLO", difficulty: "Advanced" },
            { name: "Sentiment Analysis API", description: "Build sentiment analysis REST API", difficulty: "Beginner" }
        ],
        certifications: [
            { name: "TensorFlow Developer Certificate", provider: "Google", url: "https://www.tensorflow.org/certificate" },
            { name: "AWS Certified Machine Learning - Specialty", provider: "Amazon", url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/" },
            { name: "Azure AI Engineer Associate", provider: "Microsoft", url: "https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/" },
            { name: "NVIDIA Deep Learning Institute", provider: "NVIDIA", url: "https://www.nvidia.com/en-us/training/" },
            { name: "IBM AI Engineering Professional Certificate", provider: "IBM", url: "https://www.coursera.org/professional-certificates/ai-engineer" }
        ],
        job_roles: ["AI Engineer", "Machine Learning Engineer", "NLP Engineer", "Computer Vision Engineer", "AI Research Scientist"],
        salary_range: { entry: "$90,000 - $120,000", mid: "$120,000 - $160,000", senior: "$160,000 - $220,000" }
    },
    
    "DevOps Engineer": {
        required_skills: ["Linux", "Docker", "Kubernetes", "Jenkins", "Git", "AWS/Azure/GCP", "CI/CD", "Terraform", "Ansible", "Monitoring Tools"],
        skills_level: {
            beginner: ["Linux", "Git", "Docker", "CI/CD Basics"],
            intermediate: ["Kubernetes", "Jenkins", "AWS/Azure/GCP", "Ansible"],
            advanced: ["Terraform", "Service Mesh", "Prometheus", "Grafana", "Cloud Architecture"]
        },
        courses: [
            { name: "AWS DevOps Engineer Professional", platform: "AWS", url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/" },
            { name: "Docker Mastery", platform: "Udemy", url: "https://www.udemy.com/course/docker-mastery/" },
            { name: "Kubernetes for Developers", platform: "Coursera", url: "https://www.coursera.org/learn/kubernetes" },
            { name: "DevOps Bootcamp", platform: "edX", url: "https://www.edx.org/professional-certificate/devops" },
            { name: "Google Cloud DevOps", platform: "Google", url: "https://cloud.google.com/training/devops" }
        ],
        projects: [
            { name: "CI/CD Pipeline Setup", description: "Complete CI/CD pipeline with Jenkins and Docker", difficulty: "Intermediate" },
            { name: "Kubernetes Cluster Deployment", description: "Deploy microservices on Kubernetes", difficulty: "Advanced" },
            { name: "Infrastructure as Code", description: "AWS infrastructure using Terraform", difficulty: "Advanced" },
            { name: "Monitoring Stack", description: "Set up Prometheus and Grafana monitoring", difficulty: "Intermediate" },
            { name: "Dockerized Web Application", description: "Containerize web app with Docker Compose", difficulty: "Beginner" }
        ],
        certifications: [
            { name: "AWS Certified DevOps Engineer", provider: "Amazon", url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/" },
            { name: "Certified Kubernetes Administrator (CKA)", provider: "CNCF", url: "https://www.cncf.io/certification/cka/" },
            { name: "Docker Certified Associate", provider: "Docker", url: "https://training.mirantis.com/certification/" },
            { name: "Microsoft Certified: DevOps Engineer Expert", provider: "Microsoft", url: "https://learn.microsoft.com/en-us/certifications/devops-engineer/" },
            { name: "HashiCorp Certified: Terraform Associate", provider: "HashiCorp", url: "https://www.hashicorp.com/certification/terraform-associate" }
        ],
        job_roles: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Engineer", "Platform Engineer", "Infrastructure Engineer"],
        salary_range: { entry: "$80,000 - $100,000", mid: "$100,000 - $130,000", senior: "$130,000 - $170,000" }
    }
};
