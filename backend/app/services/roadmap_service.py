import json

class RoadmapService:
    def generate_roadmap(self, predicted_career, user_data):
        # We define heuristic roadmaps for top careers
        # This can be expanded significantly
        roadmaps = {
            "Data Scientist": [
                {"title": "Python & SQL Fundamentals", "desc": "Master basics of Python programming and database querying.", "duration": "3 weeks"},
                {"title": "Data Analysis (Pandas, Numpy)", "desc": "Learn to manipulate and analyze data.", "duration": "4 weeks"},
                {"title": "Statistics & Probability", "desc": "Mathematical foundations for ML.", "duration": "3 weeks"},
                {"title": "Machine Learning (Scikit-Learn)", "desc": "Regression, classification, clustering.", "duration": "5 weeks"},
                {"title": "Deep Learning (TensorFlow/PyTorch)", "desc": "Neural networks, CNNs, RNNs.", "duration": "6 weeks"},
                {"title": "Portfolio Projects", "desc": "Build 2-3 end-to-end data science projects.", "duration": "4 weeks"}
            ],
            "Machine Learning Engineer": [
                {"title": "Advanced Python & Software Eng.", "desc": "OOP, testing, clean code.", "duration": "3 weeks"},
                {"title": "ML Algorithms In-Depth", "desc": "Understanding models under the hood.", "duration": "4 weeks"},
                {"title": "Deep Learning & NLP/CV", "desc": "Specialized neural network architectures.", "duration": "6 weeks"},
                {"title": "MLOps & Cloud Deployments", "desc": "Docker, Kubernetes, AWS SageMaker/Azure ML.", "duration": "5 weeks"},
                {"title": "System Design for ML", "desc": "Designing scalable ML systems.", "duration": "4 weeks"},
                {"title": "Production Grade Project", "desc": "Build an end-to-end deployed ML API.", "duration": "4 weeks"}
            ],
            "Full Stack Developer": [
                {"title": "HTML, CSS, JS", "desc": "The building blocks of the web.", "duration": "4 weeks"},
                {"title": "Frontend Framework (React)", "desc": "Building dynamic user interfaces.", "duration": "5 weeks"},
                {"title": "Backend Engineering (Node.js/Python)", "desc": "APIs, Authentication, Routing.", "duration": "5 weeks"},
                {"title": "Databases (SQL & NoSQL)", "desc": "PostgreSQL, MongoDB integration.", "duration": "3 weeks"},
                {"title": "DevOps Basics (Git, Docker)", "desc": "Version control and containerization.", "duration": "2 weeks"},
                {"title": "Full Stack Capstone Project", "desc": "Build a scalable web application.", "duration": "5 weeks"}
            ],
            "Software Developer": [
                {"title": "Data Structures & Algorithms", "desc": "Arrays, Trees, Graphs, DP.", "duration": "8 weeks"},
                {"title": "Object Oriented Programming", "desc": "Java/C++/Python OOP concepts.", "duration": "3 weeks"},
                {"title": "System Design Fundamentals", "desc": "Scalability, microservices, databases.", "duration": "4 weeks"},
                {"title": "Version Control & CI/CD", "desc": "Git, GitHub Actions, Jenkins.", "duration": "2 weeks"},
                {"title": "Backend Framework", "desc": "Spring Boot / Django / Express.", "duration": "4 weeks"},
                {"title": "Interview Prep & Projects", "desc": "LeetCode and portfolio building.", "duration": "4 weeks"}
            ],
            "Cloud Engineer": [
                {"title": "Linux & Networking Fundamentals", "desc": "OS concepts, bash scripting, TCP/IP.", "duration": "4 weeks"},
                {"title": "Cloud Basics (AWS/Azure/GCP)", "desc": "Compute, Storage, IAM, VPC.", "duration": "5 weeks"},
                {"title": "Infrastructure as Code (Terraform)", "desc": "Automating infrastructure provisioning.", "duration": "4 weeks"},
                {"title": "Containers (Docker & K8s)", "desc": "Containerizing applications and orchestration.", "duration": "5 weeks"},
                {"title": "CI/CD Pipelines", "desc": "Automated testing and deployment.", "duration": "3 weeks"},
                {"title": "Cloud Security & Monitoring", "desc": "CloudWatch, Prometheus, Security Hub.", "duration": "3 weeks"}
            ]
        }
        
        # Default roadmap if career not specifically mapped
        default_roadmap = [
            {"title": "Core Fundamentals", "desc": "Master the basics of your chosen field.", "duration": "4 weeks"},
            {"title": "Intermediate Skills", "desc": "Learn industry standard tools and frameworks.", "duration": "6 weeks"},
            {"title": "Advanced Topics", "desc": "Deep dive into specialized areas.", "duration": "5 weeks"},
            {"title": "Practical Projects", "desc": "Build a portfolio to demonstrate skills.", "duration": "4 weeks"},
            {"title": "Interview Preparation", "desc": "Resume building and technical interviews.", "duration": "3 weeks"}
        ]
        
        roadmap = roadmaps.get(predicted_career, default_roadmap)
        
        # Analyze skill gaps based on user_data to personalize further
        missing_skills = []
        if user_data.get('python', 0) < 2 and predicted_career in ['Data Scientist', 'Machine Learning Engineer']:
            missing_skills.append("Python Programming")
        if user_data.get('sql', 0) < 2 and predicted_career in ['Data Scientist', 'Database Administrator', 'Full Stack Developer']:
            missing_skills.append("SQL Databases")
        if user_data.get('cloud', 0) < 2 and predicted_career in ['Cloud Engineer', 'DevOps Engineer', 'Machine Learning Engineer']:
            missing_skills.append("Cloud Computing")
            
        return {
            "career": predicted_career,
            "roadmap": roadmap,
            "missing_skills": missing_skills
        }

roadmap_service = RoadmapService()
