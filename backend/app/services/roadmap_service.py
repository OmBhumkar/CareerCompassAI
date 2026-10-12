import json

SKILL_RESOURCES = {
    "Python Programming": [
        {"name": "Official Python 3 Documentation & Tutorial", "type": "Official Docs", "url": "https://docs.python.org/3/tutorial/"},
        {"name": "Python for Everybody (Coursera / FreeCodeCamp)", "type": "Course", "url": "https://www.py4e.com/"},
        {"name": "Real Python In-Depth Learning Paths", "type": "Tutorials", "url": "https://realpython.com/"}
    ],
    "SQL Databases & Optimization": [
        {"name": "Use The Index, Luke! (SQL Performance Guide)", "type": "Interactive Guide", "url": "https://use-the-index-luke.com/"},
        {"name": "PostgreSQL Official Tutorial & Exercises", "type": "Documentation", "url": "https://www.postgresqltutorial.com/"},
        {"name": "Mode Analytics SQL School", "type": "Hands-on Practice", "url": "https://mode.com/sql-tutorial/"}
    ],
    "Cloud Infrastructure (AWS/GCP)": [
        {"name": "AWS Skill Builder: Cloud Practitioner Learning Path", "type": "Free Official Course", "url": "https://explore.skillbuilder.aws/"},
        {"name": "Google Cloud Skills Boost", "type": "Interactive Labs", "url": "https://www.cloudskillsboost.google/"},
        {"name": "Adrian Cantrill AWS Associate Study Guides", "type": "Certification Guide", "url": "https://learn.cantrill.io/"}
    ],
    "Modern Frontend Architecture": [
        {"name": "React 19 Official Documentation & Guides", "type": "Official Docs", "url": "https://react.dev/"},
        {"name": "Full Stack Open (University of Helsinki)", "type": "Complete Course", "url": "https://fullstackopen.com/"},
        {"name": "Web.dev by Google: Core Web Vitals & CSS", "type": "Guides", "url": "https://web.dev/learn/"}
    ],
    "Network Security & Threat Modeling": [
        {"name": "OWASP Top 10 Web Application Security Risks", "type": "Industry Standard", "url": "https://owasp.org/www-project-top-ten/"},
        {"name": "Professor Messer CompTIA Security+ Course", "type": "Free Video Series", "url": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/"},
        {"name": "PortSwigger Web Security Academy", "type": "Interactive Labs", "url": "https://portswigger.net/web-security"}
    ],
    "Figma & Design Systems": [
        {"name": "Figma Official Help Center & Video Tutorials", "type": "Official Guides", "url": "https://help.figma.com/hc/en-us"},
        {"name": "Refactoring UI by Adam Wathan & Steve Schoger", "type": "Book & Guide", "url": "https://www.refactoringui.com/"},
        {"name": "Google UX Design Professional Certificate", "type": "Coursera Series", "url": "https://www.coursera.org/professional-certificates/google-ux-design"}
    ],
    "Professional & Technical Communication": [
        {"name": "Google Technical Writing Courses for Engineers", "type": "Free Course", "url": "https://developers.google.com/tech-writing"},
        {"name": "Harvard DCE: Strategic Communication in Business", "type": "Guide", "url": "https://professional.dce.harvard.edu/blog/10-tips-for-improving-your-workplace-communication/"},
        {"name": "Toastmasters International Public Speaking Path", "type": "Speaking Practice", "url": "https://www.toastmasters.org/"}
    ],
    "Team Leadership & Agile Mentoring": [
        {"name": "Atlassian Agile Coach: Scrum, Kanban & Roadmaps", "type": "Industry Guide", "url": "https://www.atlassian.com/agile"},
        {"name": "Scrum.org Professional Scrum Developer & Master", "type": "Certification Guide", "url": "https://www.scrum.org/resources"},
        {"name": "The Manager's Path by Camille Fournier", "type": "Leadership Book", "url": "https://www.oreilly.com/library/view/the-managers-path/9781491973882/"}
    ],
    "Complex Problem Solving & Algorithms": [
        {"name": "NeetCode 150 Algorithmic Coding Roadmap", "type": "Curated Practice", "url": "https://neetcode.io/practice"},
        {"name": "MIT OpenCourseWare 6.006: Introduction to Algorithms", "type": "University Course", "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"},
        {"name": "LeetCode Algorithmic Problem Patterns", "type": "Practice Platform", "url": "https://leetcode.com/"}
    ],
    "Docker & Kubernetes": [
        {"name": "Docker Official Getting Started Guide", "type": "Official Tutorial", "url": "https://docs.docker.com/get-started/"},
        {"name": "Kubernetes Official Tutorials & Interactive Labs", "type": "Official Docs", "url": "https://kubernetes.io/docs/tutorials/"},
        {"name": "Kubernetes The Hard Way by Kelsey Hightower", "type": "Hands-on Guide", "url": "https://github.com/kelseyhightower/kubernetes-the-hard-way"}
    ],
    "System Design & Microservices": [
        {"name": "System Design Primer by Donne Martin", "type": "GitHub Repository", "url": "https://github.com/donnemartin/system-design-primer"},
        {"name": "ByteByteGo System Design by Alex Xu", "type": "Architectural Newsletter", "url": "https://blog.bytebytego.com/"},
        {"name": "Designing Data-Intensive Applications (DDIA)", "type": "Classic Book", "url": "https://dataintensive.net/"}
    ],
    "CI/CD Automated Pipelines": [
        {"name": "GitHub Actions Official Documentation & Workflows", "type": "Documentation", "url": "https://docs.github.com/en/actions"},
        {"name": "GitLab CI/CD Fundamentals & Templates", "type": "Documentation", "url": "https://docs.gitlab.com/ee/ci/"},
        {"name": "Continuous Integration by Martin Fowler", "type": "Article", "url": "https://martinfowler.com/articles/continuousIntegration.html"}
    ]
}

class RoadmapService:
    def generate_roadmap(self, predicted_career, user_data):
        roadmaps = {
            "Data Scientist": [
                {
                    "title": "Mathematical Foundations & Exploratory Data Analysis",
                    "duration": "Month 1-2 (Weeks 1-8)",
                    "desc": "Master vectorized computing, probability distributions, hypothesis testing, and statistical exploration of messy real-world datasets.",
                    "topics": ["Pandas & NumPy Vectorization", "Probability Distributions & Hypothesis Testing (p-values, ANOVA)", "Multivariate Calculus & Linear Algebra (Eigenvalues, SVD)", "Interactive Data Storytelling (Seaborn & Plotly)"],
                    "project": "Build an Exploratory Data Analysis & Statistical Insight Report on a 1M+ Row Financial or Healthcare Dataset",
                    "resources": [
                        {"name": "Khan Academy: Statistics & Probability", "type": "Free Course", "url": "https://www.khanacademy.org/math/statistics-probability"},
                        {"name": "Pandas Official User Guide", "type": "Documentation", "url": "https://pandas.pydata.org/docs/user_guide/index.html"},
                        {"name": "StatQuest with Josh Starmer", "type": "Video Channel", "url": "https://statquest.org/"}
                    ]
                },
                {
                    "title": "Machine Learning Modeling & Feature Engineering",
                    "duration": "Month 3-4 (Weeks 9-16)",
                    "desc": "Implement regularized regression, gradient boosted decision trees, clustering, and robust cross-validation pipelines.",
                    "topics": ["Ridge & Lasso Regularized Regression", "Tree Ensembles: Random Forest, XGBoost & LightGBM", "Unsupervised Clustering (K-Means, PCA, DBSCAN)", "Feature Selection, Imputation & Cross-Validation"],
                    "project": "Develop a Credit Default Prediction & Risk Scoring Pipeline with Explainable SHAP Values",
                    "resources": [
                        {"name": "Scikit-Learn Official User Guide", "type": "Documentation", "url": "https://scikit-learn.org/stable/user_guide.html"},
                        {"name": "Coursera: Machine Learning Specialization (Andrew Ng)", "type": "Online Course", "url": "https://www.coursera.org/specializations/machine-learning-introduction"},
                        {"name": "Kaggle Competitions & Benchmark Datasets", "type": "Practice Platform", "url": "https://www.kaggle.com/"}
                    ]
                },
                {
                    "title": "Deep Learning, Neural Networks & NLP",
                    "duration": "Month 5-6 (Weeks 17-24)",
                    "desc": "Master neural network architectures in PyTorch, computer vision convolutions, transformer self-attention, and text embeddings.",
                    "topics": ["PyTorch Tensor Computing & Autograd", "CNNs & ResNets for Image Analysis", "Transformer Self-Attention & BERT/GPT Fine-Tuning", "Vector Embeddings & Semantic Similarity Search"],
                    "project": "Fine-Tune a Transformer Model for Multi-Class Text Classification and Sentiment Extraction",
                    "resources": [
                        {"name": "PyTorch Deep Learning Zero to Mastery", "type": "Open Textbook", "url": "https://www.learnpytorch.io/"},
                        {"name": "Hugging Face Deep Learning NLP Course", "type": "Interactive Course", "url": "https://huggingface.co/learn"},
                        {"name": "Fast.ai: Practical Deep Learning for Coders", "type": "Video Course", "url": "https://course.fast.ai/"}
                    ]
                },
                {
                    "title": "Model Serving, MLOps & Capstone Portfolio",
                    "duration": "Month 6+ (Weeks 25+)",
                    "desc": "Package machine learning models into production FastAPI endpoints, containerize with Docker, and track model drift.",
                    "topics": ["Model Export with ONNX & TorchScript", "FastAPI Low-Latency Async Serving", "Dockerizing Machine Learning Workflows", "Evidently AI Model Monitoring & Data Drift"],
                    "project": "Deploy an End-to-End Live Predictive SaaS Web App with Streamlit UI, FastAPI Engine, and Docker on Cloud",
                    "resources": [
                        {"name": "Made With ML: Production MLOps Course", "type": "Open Curriculum", "url": "https://madewithml.com/"},
                        {"name": "FastAPI Official Tutorial", "type": "Documentation", "url": "https://fastapi.tiangolo.com/tutorial/"},
                        {"name": "Roadmap.sh AI & Data Science Pathway", "type": "Interactive Roadmap", "url": "https://roadmap.sh/ai-data-scientist"}
                    ]
                }
            ],
            "Machine Learning Engineer": [
                {
                    "title": "Production Python & Software Engineering for ML",
                    "duration": "Month 1-2 (Weeks 1-8)",
                    "desc": "Write maintainable, modular Python code with type annotations, strict unit testing, profiling, and version-controlled data pipelines.",
                    "topics": ["Advanced OOP, Python Generics & Protocols", "Pydantic v2 Data Validation & Serialization", "Pytest Suite & Continuous Integration Testing", "Data Version Control (DVC) & Git LFS"],
                    "project": "Build and Publish a Tested, Type-Safe Python ML Preprocessing Package with Automated CI Workflows",
                    "resources": [
                        {"name": "Real Python Advanced Python Tutorials", "type": "Tutorials", "url": "https://realpython.com/"},
                        {"name": "Data Version Control (DVC) Documentation", "type": "Documentation", "url": "https://dvc.org/doc"},
                        {"name": "Clean Code in Python by Mariano Anaya", "type": "Reference Book", "url": "https://github.com/zedr/clean-code-python"}
                    ]
                },
                {
                    "title": "Distributed Model Training & Deep Architectures",
                    "duration": "Month 3-4 (Weeks 9-16)",
                    "desc": "Scale training across multiple GPUs using PyTorch Distributed Data Parallel (DDP), DeepSpeed, and mixed precision.",
                    "topics": ["Distributed Data Parallel (DDP) in PyTorch", "DeepSpeed & FSDP for Large Model Training", "Custom Loss Functions & CUDA Acceleration Basics", "Quantization Techniques (FP16, INT8, AWQ, GGUF)"],
                    "project": "Train and Quantize a Multi-Modal Vision-Language Model on a Distributed Multi-GPU Cluster",
                    "resources": [
                        {"name": "PyTorch Distributed Training Tutorial", "type": "Official Tutorial", "url": "https://pytorch.org/tutorials/beginner/dist_overview.html"},
                        {"name": "Hugging Face PEFT & LoRA Documentation", "type": "Documentation", "url": "https://huggingface.co/docs/peft"},
                        {"name": "Weights & Biases ML Experiment Tracking Docs", "type": "Platform Docs", "url": "https://docs.wandb.ai/"}
                    ]
                },
                {
                    "title": "MLOps Pipelines, Feature Stores & Continuous Training",
                    "duration": "Month 5-6 (Weeks 17-24)",
                    "desc": "Architect production pipelines that automate feature extraction, model retraining, validation gates, and artifact registries.",
                    "topics": ["Feature Stores (Feast) for Real-Time & Offline Feature Retrieval", "MLflow Model Registry & Experiment Tracking", "Kubeflow / Airflow Pipeline Orchestration", "Data Drift, Concept Drift & Automated Retraining Triggers"],
                    "project": "Build an Automated Feature-Store-Backed Retraining Pipeline Triggered by Data Drift Anomalies",
                    "resources": [
                        {"name": "MLOps Zoomcamp by DataTalksClub", "type": "Free GitHub Course", "url": "https://github.com/DataTalksClub/mlops-zoomcamp"},
                        {"name": "Feast Feature Store Quickstart Guide", "type": "Documentation", "url": "https://docs.feast.dev/"},
                        {"name": "Evidently AI Model Monitoring Guide", "type": "Documentation", "url": "https://docs.evidentlyai.com/"}
                    ]
                },
                {
                    "title": "Ultra-Low Latency Inference & Production Serving",
                    "duration": "Month 6+ (Weeks 25+)",
                    "desc": "Deploy high-throughput inference engines capable of serving predictions with sub-20ms latencies under heavy concurrent load.",
                    "topics": ["Triton Inference Server & TensorRT Optimization", "Async gRPC & Streaming API Endpoints", "GPU Autoscaling on Kubernetes (EKS / GKE)", "Canary Deployments, Shadow Traffic & A/B Rollouts"],
                    "project": "Deploy a Sub-20ms Real-Time Recommendation Engine with Triton Inference Server on Kubernetes",
                    "resources": [
                        {"name": "NVIDIA Triton Inference Server Documentation", "type": "Official Docs", "url": "https://developer.nvidia.com/triton-inference-server"},
                        {"name": "vLLM High-Throughput Serving Engine", "type": "Documentation", "url": "https://docs.vllm.ai/"},
                        {"name": "Full Stack Deep Learning Course", "type": "Free Course", "url": "https://fullstackdeeplearning.com/"}
                    ]
                }
            ],
            "Full Stack Developer": [
                {
                    "title": "Modern Frontend Architecture & State Management",
                    "duration": "Month 1-2 (Weeks 1-8)",
                    "desc": "Master component lifecycles, strict TypeScript typing, responsive modern CSS, and scalable client state architecture.",
                    "topics": ["React 19 Hooks, Custom Hooks & Context API", "TypeScript 5 Strict Mode & Generics", "Tailwind CSS v4 & Accessible UI Components", "Client State Management (Zustand & TanStack Query)"],
                    "project": "Build a Real-Time Collaborative Task Board with Drag-and-Drop, Optimistic Updates, and Local Caching",
                    "resources": [
                        {"name": "Official React Documentation", "type": "Official Docs", "url": "https://react.dev/"},
                        {"name": "Full Stack Open (Univ. of Helsinki)", "type": "Complete Course", "url": "https://fullstackopen.com/"},
                        {"name": "TypeScript Deep Dive by Basarat", "type": "Guide & Book", "url": "https://basarat.gitbook.io/typescript"}
                    ]
                },
                {
                    "title": "Backend Engineering, APIs & Database Systems",
                    "duration": "Month 3-4 (Weeks 9-16)",
                    "desc": "Design resilient REST and GraphQL APIs, implement secure JWT/OAuth2 flows, and model relational schemas in PostgreSQL.",
                    "topics": ["RESTful Standards & OpenAPI / Swagger Specification", "FastAPI / Node.js Asynchronous Event Loops", "PostgreSQL Schema Modeling, Indexes & Transactions", "Prisma / SQLAlchemy ORM & Connection Pooling"],
                    "project": "Build a Multi-Tenant Subscription SaaS Backend with Stripe Billing, OAuth2, and Role-Based Access",
                    "resources": [
                        {"name": "FastAPI Official Documentation", "type": "Documentation", "url": "https://fastapi.tiangolo.com/"},
                        {"name": "PostgreSQL Tutorial & Performance Tuning", "type": "Guide", "url": "https://www.postgresqltutorial.com/"},
                        {"name": "The Odin Project: NodeJS Curriculum", "type": "Interactive Course", "url": "https://www.theodinproject.com/paths/full-stack-javascript"}
                    ]
                },
                {
                    "title": "Distributed Architecture, Caching & Message Queues",
                    "duration": "Month 5-6 (Weeks 17-24)",
                    "desc": "Scale services horizontally, introduce Redis caching layers, decouple workflows with message queues, and handle concurrency.",
                    "topics": ["Redis In-Memory Caching, Pub/Sub & Rate Limiting", "Message Brokers (Kafka / RabbitMQ) for Async Jobs", "Database Read Replicas & Connection Balancing", "Microservice Communication Patterns (gRPC vs REST)"],
                    "project": "Architect an Event-Driven High-Concurrency URL Shortener & Analytics Engine handling 10k+ req/sec",
                    "resources": [
                        {"name": "System Design Primer by Donne Martin", "type": "GitHub Repository", "url": "https://github.com/donnemartin/system-design-primer"},
                        {"name": "ByteByteGo System Design Newsletter", "type": "Architectural Guides", "url": "https://blog.bytebytego.com/"},
                        {"name": "Redis Developer Documentation", "type": "Documentation", "url": "https://redis.io/docs/"}
                    ]
                },
                {
                    "title": "Containerization, Cloud CI/CD & Production Launch",
                    "duration": "Month 6+ (Weeks 25+)",
                    "desc": "Package full-stack applications into multi-stage Docker containers, automate deployments with GitHub Actions, and deploy to AWS.",
                    "topics": ["Docker Multi-Stage Optimization", "Kubernetes Deployment Pods, Services & Ingress", "GitHub Actions CI/CD with Automated Tests", "Sentry Error Tracking & Prometheus Metrics"],
                    "project": "Deploy a Full Stack AI Application with Automated CI/CD, Zero-Downtime Rollouts, and Global Cloud CDN",
                    "resources": [
                        {"name": "Docker Official Getting Started Guide", "type": "Documentation", "url": "https://docs.docker.com/get-started/"},
                        {"name": "GitHub Actions Documentation", "type": "Documentation", "url": "https://docs.github.com/en/actions"},
                        {"name": "Roadmap.sh Full Stack Developer Path", "type": "Interactive Roadmap", "url": "https://roadmap.sh/full-stack"}
                    ]
                }
            ],
            "Software Developer": [
                {
                    "title": "Data Structures, Algorithms & Algorithmic Complexity",
                    "duration": "Month 1-2 (Weeks 1-8)",
                    "desc": "Master time and space complexity, pointer manipulation, graph traversals, and dynamic programming patterns.",
                    "topics": ["Arrays, Two-Pointers & Sliding Window Patterns", "Linked Lists, Stacks, Queues & Hash Maps", "Binary Trees, BSTs, Heaps & Trie Structures", "Graphs (BFS/DFS, Dijkstra, Topological Sort)", "Dynamic Programming: Memoization & Tabulation"],
                    "project": "Implement an In-Memory Key-Value Storage Engine with LRU Cache Eviction and Persistent Log Compaction",
                    "resources": [
                        {"name": "NeetCode 150 Algorithmic Coding Roadmap", "type": "Interactive Practice", "url": "https://neetcode.io/practice"},
                        {"name": "MIT OpenCourseWare 6.006: Introduction to Algorithms", "type": "Free University Course", "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"},
                        {"name": "LeetCode Algorithmic Problem Set", "type": "Practice Platform", "url": "https://leetcode.com/"}
                    ]
                },
                {
                    "title": "Object-Oriented Design & Clean Code Principles",
                    "duration": "Month 3-4 (Weeks 9-16)",
                    "desc": "Write robust, production-grade software applying SOLID principles, GoF design patterns, and thorough unit testing suites.",
                    "topics": ["SOLID Architectural Principles", "GoF Design Patterns (Factory, Strategy, Observer, Decorator)", "Unit Testing, Mocking & Test-Driven Development (TDD)", "Concurrency, Threads & Thread-Safety"],
                    "project": "Design and Code an Extensible Plugin-Based Simulation Game Engine with Concurrency Control",
                    "resources": [
                        {"name": "Refactoring Guru: Design Patterns & Refactoring", "type": "Visual Guide", "url": "https://refactoring.guru/design-patterns"},
                        {"name": "Clean Code by Robert C. Martin", "type": "Classic Book", "url": "https://www.oreilly.com/library/view/clean-code-a/9780136083238/"},
                        {"name": "Martin Fowler: Architecture & Refactoring", "type": "Articles", "url": "https://martinfowler.com/"}
                    ]
                },
                {
                    "title": "System Scalability, Databases & Networking",
                    "duration": "Month 5-6 (Weeks 17-24)",
                    "desc": "Understand how software communicates across networks, handles database concurrency, and prevents performance bottlenecks.",
                    "topics": ["TCP/IP, Sockets, HTTP/2 & HTTP/3 Protocols", "Database Indexing (B-Trees), Locks & Deadlocks", "Memory Management, Garbage Collection & Profiling", "Distributed Consensus & CAP Theorem"],
                    "project": "Build an Asynchronous Multi-Threaded HTTP Web Server from Raw Network Sockets",
                    "resources": [
                        {"name": "Computer Networking: A Top-Down Approach", "type": "Textbook", "url": "https://gaia.cs.umass.edu/kurose_ross/online_lectures.htm"},
                        {"name": "Designing Data-Intensive Applications (DDIA)", "type": "Reference Book", "url": "https://dataintensive.net/"},
                        {"name": "Brendan Gregg Systems Performance Analysis", "type": "Performance Guides", "url": "https://www.brendangregg.com/"}
                    ]
                },
                {
                    "title": "Enterprise Development, CI/CD & Technical Interviews",
                    "duration": "Month 6+ (Weeks 25+)",
                    "desc": "Gain hands-on mastery with enterprise frameworks, Git branching strategies, automated builds, and technical interview simulations.",
                    "topics": ["Spring Boot / Django / Express Enterprise Frameworks", "Git Trunk-Based Development & Code Reviews", "Docker Containerization & CI/CD Pipeline Setup", "Mock Technical & Behavioral Interview Drills"],
                    "project": "Ship an Enterprise-Grade Microservices Inventory Management System with Automated CI/CD",
                    "resources": [
                        {"name": "Spring Academy / Django Girls Guide", "type": "Framework Tutorials", "url": "https://spring.academy/"},
                        {"name": "Cracking the Coding Interview by Gayle Laakmann McDowell", "type": "Interview Book", "url": "https://www.crackingthecodinginterview.com/"},
                        {"name": "Pramp / Interviewing.io Mock Technical Interviews", "type": "Peer Mock Practice", "url": "https://www.pramp.com/"}
                    ]
                }
            ],
            "Cloud Engineer": [

                {
                    "title": "Linux Kernel, Operating Systems & Networking Core",
                    "duration": "Month 1-2 (Weeks 1-8)",
                    "desc": "Master Linux system administration, process lifecycle, TCP/IP networking, subnets, and automated bash/python scripting.",
                    "topics": ["Linux systemd, cgroups, processes & file permissions", "CIDR Subnetting, Routing Tables, NAT Gateways & DNS", "Bash Shell Scripting & Python Automation Utilities", "SSH Keys, TLS/SSL Certificates & PKI Infrastructure"],
                    "project": "Build an Automated Linux Server Provisioning & Hardening Script with Custom Firewall Rules",
                    "resources": [
                        {"name": "Linux Journey: Free Interactive Operating System Guide", "type": "Interactive Guide", "url": "https://linuxjourney.com/"},
                        {"name": "Professor Messer Network+ Training Course", "type": "Free Video Series", "url": "https://www.professormesser.com/"},
                        {"name": "OverTheWire: Bandit Linux Terminal Wargames", "type": "Hands-on Practice", "url": "https://overthewire.org/wargames/bandit/"}
                    ]
                },
                {
                    "title": "AWS / Azure Cloud Architecture & Infrastructure as Code",
                    "duration": "Month 3-4 (Weeks 9-16)",
                    "desc": "Architect high-availability cloud solutions and automate 100% of resource provisioning using Terraform HCL modules.",
                    "topics": ["AWS Core: VPC, EC2, S3, IAM Policies, RDS, ALB & CloudFront", "Terraform Syntax, State Management, Modules & Remote Backends", "Secret Management with HashiCorp Vault / AWS Secrets Manager", "Cloud FinOps: Cost Monitoring, Budgeting & Resource Tagging"],
                    "project": "Provision a Resilient, Multi-Region Highly-Available Cloud Infrastructure via Modular Terraform",
                    "resources": [
                        {"name": "HashiCorp Terraform Associate Tutorials", "type": "Official Tutorials", "url": "https://developer.hashicorp.com/terraform/tutorials"},
                        {"name": "AWS Skill Builder Official Cloud Pathways", "type": "Official Training", "url": "https://explore.skillbuilder.aws/"},
                        {"name": "Adrian Cantrill AWS Solutions Architect Guide", "type": "Certification Guide", "url": "https://learn.cantrill.io/"}
                    ]
                },
                {
                    "title": "Containers & Kubernetes Cluster Administration",
                    "duration": "Month 5-6 (Weeks 17-24)",
                    "desc": "Containerize microservices with Docker and orchestrate mission-critical container workloads using production Kubernetes.",
                    "topics": ["Docker Daemon, Multi-Stage Builds & Registry Management", "Kubernetes Pods, ReplicaSets, Deployments & StatefulSets", "Kubernetes Networking: Services, Ingress Controllers & DNS", "Helm Charts for Application Packaging & Environment Overrides"],
                    "project": "Deploy a Fault-Tolerant Microservices Cluster on Kubernetes with Automated Rolling Upgrades",
                    "resources": [
                        {"name": "Kubernetes The Hard Way by Kelsey Hightower", "type": "GitHub Deep-Dive", "url": "https://github.com/kelseyhightower/kubernetes-the-hard-way"},
                        {"name": "Kubernetes Official Interactive Tutorials", "type": "Documentation", "url": "https://kubernetes.io/docs/tutorials/"},
                        {"name": "KodeKloud: Certified Kubernetes Administrator (CKA)", "type": "Interactive Labs", "url": "https://kodekloud.com/"}
                    ]
                },
                {
                    "title": "Cloud Security, Observability & Site Reliability",
                    "duration": "Month 6+ (Weeks 25+)",
                    "desc": "Implement zero-trust security postures, automated threat detection, real-time metrics scraping, and alert escalation policies.",
                    "topics": ["Zero Trust Architecture & IAM Least Privilege", "Prometheus Metrics Gathering & Alertmanager Routing", "Grafana Executive & Operational Monitoring Dashboards", "Disaster Recovery (RTO/RPO), Automated Backups & Chaos Drills"],
                    "project": "Implement an End-to-End Enterprise Cloud Observability Stack with Custom Alert Routing",
                    "resources": [
                        {"name": "Google Site Reliability Engineering (SRE) Books", "type": "Free Reference Books", "url": "https://sre.google/books/"},
                        {"name": "Prometheus Monitoring Documentation", "type": "Official Docs", "url": "https://prometheus.io/docs/introduction/overview/"},
                        {"name": "Roadmap.sh DevOps & Cloud Roadmap", "type": "Interactive Roadmap", "url": "https://roadmap.sh/devops"}
                    ]
                }
            ],
            "DevOps Engineer": [
                {
                    "title": "Linux Systems, Automation Scripting & Git Hygiene",
                    "duration": "Month 1-2 (Weeks 1-8)",
                    "desc": "Master systems administration, bash pipelines, Python automation tools, and professional Git branching methodologies.",
                    "topics": ["Linux Operating System Internals & Bash Scripting", "Python for System Administration & API Integrations", "Git Trunk-Based Development, Rebase, Cherry-Pick & Hooks", "SSH Key Management & Security Best Practices"],
                    "project": "Develop a CLI Automation Utility in Python to Automate Environment Validation and Backup Verifications",
                    "resources": [
                        {"name": "Linux Journey: Interactive Guide", "type": "Interactive Guide", "url": "https://linuxjourney.com/"},
                        {"name": "Automate the Boring Stuff with Python by Al Sweigart", "type": "Free Book", "url": "https://automatetheboringstuff.com/"},
                        {"name": "Pro Git Book by Scott Chacon and Ben Straub", "type": "Official Git Book", "url": "https://git-scm.com/book/en/v2"}
                    ]
                },
                {
                    "title": "CI/CD Pipeline Engineering & Containerization",
                    "duration": "Month 3-4 (Weeks 9-16)",
                    "desc": "Automate build, test, and release cycles using Docker containers and declarative GitHub Actions / GitLab CI pipelines.",
                    "topics": ["Docker Multi-Stage Image Builds & Security Scans (Trivy)", "GitHub Actions / GitLab CI Automated Pipeline Matrix", "Automated Linting, Unit Testing & Static Code Analysis (SonarQube)", "Artifact Registries (Docker Hub, AWS ECR, Artifactory)"],
                    "project": "Build an Automated Multi-Environment CI/CD Pipeline with Automated Security Scanning and Image Signing",
                    "resources": [
                        {"name": "GitHub Actions Official Documentation", "type": "Documentation", "url": "https://docs.github.com/en/actions"},
                        {"name": "Docker Official Documentation", "type": "Official Docs", "url": "https://docs.docker.com/"},
                        {"name": "Aqua Security Trivy Vulnerability Scanner Docs", "type": "Tool Documentation", "url": "https://aquasecurity.github.io/trivy/"}
                    ]
                },
                {
                    "title": "Kubernetes Administration & GitOps Delivery",
                    "duration": "Month 5-6 (Weeks 17-24)",
                    "desc": "Deploy resilient containerized workloads to Kubernetes clusters and automate declarative deployments using ArgoCD.",
                    "topics": ["Kubernetes Architecture: Control Plane, Nodes & Kubelet", "Helm Charts for Parameterized Application Deployments", "GitOps Workflows with ArgoCD / Flux", "Canary Deployments with Istio / Linkerd Service Meshes"],
                    "project": "Implement a Declarative GitOps Multi-Cluster Kubernetes Deployment with ArgoCD and Helm",
                    "resources": [
                        {"name": "ArgoCD Official GitOps Documentation", "type": "Documentation", "url": "https://argo-cd.readthedocs.io/"},
                        {"name": "Helm Official Documentation", "type": "Documentation", "url": "https://helm.sh/docs/"},
                        {"name": "Kubernetes Documentation", "type": "Official Docs", "url": "https://kubernetes.io/docs/home/"}
                    ]
                },
                {
                    "title": "Infrastructure as Code & Site Reliability Engineering",
                    "duration": "Month 6+ (Weeks 25+)",
                    "desc": "Provision resilient infrastructure with Terraform, monitor system health, and implement incident management runbooks.",
                    "topics": ["Terraform Multi-Cloud Automation & Module Design", "Prometheus & Grafana Enterprise Observability", "Distributed Tracing with OpenTelemetry", "Incident Response, Post-Mortems & SLOs/SLIs"],
                    "project": "Deliver an Enterprise Infrastructure as Code Pipeline with Prometheus Alerting and Incident Runbooks",
                    "resources": [
                        {"name": "HashiCorp Terraform Documentation", "type": "Documentation", "url": "https://developer.hashicorp.com/terraform/docs"},
                        {"name": "Google SRE Workbook", "type": "Free Book", "url": "https://sre.google/workbook/table-of-contents/"},
                        {"name": "OpenTelemetry Official Documentation", "type": "Documentation", "url": "https://opentelemetry.io/docs/"}
                    ]
                }
            ],
            "Product Manager": [
                {
                    "title": "Product Discovery, Customer Empathy & Market Research",
                    "duration": "Month 1-2 (Weeks 1-8)",
                    "desc": "Master customer interview techniques, problem validation, competitor analysis, and opportunity tree mapping.",
                    "topics": ["User Interview Methodologies & The Mom Test Principles", "Jobs-to-be-Done (JTBD) Framework", "Competitor Matrix & Market Opportunity Sizing (TAM/SAM/SOM)", "Product Vision & Strategy Formulation"],
                    "project": "Draft an In-Depth Customer Discovery Report & Value Proposition Canvas for an Emerging AI Market Need",
                    "resources": [
                        {"name": "The Mom Test by Rob Fitzpatrick", "type": "Customer Discovery Book", "url": "https://www.momtestbook.com/"},
                        {"name": "Continuous Discovery Habits by Teresa Torres", "type": "Product Discovery Guide", "url": "https://www.producttalk.org/"},
                        {"name": "Lenny's Newsletter & Product Community", "type": "Industry Essays", "url": "https://www.lennysnewsletter.com/"}
                    ]
                },
                {
                    "title": "Product Specs, Roadmapping & Agile Execution",
                    "duration": "Month 3-4 (Weeks 9-16)",
                    "desc": "Write comprehensive Product Requirement Documents (PRDs), run effective sprint ceremonies, and align engineering teams.",
                    "topics": ["PRD Writing: Problem Statements, User Stories & Non-Goals", "Prioritization Frameworks (RICE, Kano, Value vs Effort)", "Agile Scrum: Backlog Grooming, Sprint Planning & Retros", "Managing Technical Debt & Engineering Tradeoffs"],
                    "project": "Author a Production-Ready PRD with User Flows, Metric Definitions, and Go/No-Go Acceptance Criteria",
                    "resources": [
                        {"name": "Atlassian Agile Coach & PRD Templates", "type": "Templates & Guides", "url": "https://www.atlassian.com/agile/product-management/requirements"},
                        {"name": "Inspired: How to Create Tech Products Customers Love by Marty Cagan", "type": "Classic Book", "url": "https://svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/"},
                        {"name": "Reforge Product Management Guides", "type": "Industry Articles", "url": "https://www.reforge.com/blog"}
                    ]
                },
                {
                    "title": "Data-Driven Analytics, Funnels & A/B Experimentation",
                    "duration": "Month 5-6 (Weeks 17-24)",
                    "desc": "Define North Star metrics, build event tracking instrumentation, and run statistically valid A/B tests.",
                    "topics": ["North Star Metrics & Input Metric Trees", "Event Tracking Instrumentation (Mixpanel / Amplitude)", "Cohort Retention Analysis & Churn Modeling", "A/B Testing: Statistical Power, Minimum Detectable Effect & Sample Sizing"],
                    "project": "Design, Instrument, and Analyze an A/B Testing Experiment with Cohort Retention Funnels",
                    "resources": [
                        {"name": "Mixpanel Product Analytics Guide", "type": "Interactive Guide", "url": "https://mixpanel.com/blog/"},
                        {"name": "Amplitude Product Analytics Playbook", "type": "E-Book", "url": "https://amplitude.com/playbook"},
                        {"name": "Evan Miller A/B Testing Sample Size Calculator & Guide", "type": "Tool & Statistical Guide", "url": "https://www.evanmiller.org/ab-testing/sample-size.html"}
                    ]
                },
                {
                    "title": "Go-To-Market Strategy, Stakeholder Management & Growth",
                    "duration": "Month 6+ (Weeks 25+)",
                    "desc": "Align sales, marketing, and leadership for multi-channel product launches, pricing strategy, and growth loops.",
                    "topics": ["Go-To-Market (GTM) Launch Coordination", "Product-Led Growth (PLG) & Virality Loops", "SaaS Pricing Models (Freemium, Tiered, Usage-Based)", "Executive Stakeholder Communication & Board Presentation"],
                    "project": "Deliver a Comprehensive GTM Launch Plan & Executive Deck for a New Feature Rollout",
                    "resources": [
                        {"name": "Product-Led Growth by Wes Bush", "type": "Growth Book", "url": "https://productled.com/book/"},
                        {"name": "First Round Review: Product Management Essays", "type": "Case Studies", "url": "https://review.firstround.com/"},
                        {"name": "Roadmap.sh Product Management Pathway", "type": "Interactive Roadmap", "url": "https://roadmap.sh/product-manager"}
                    ]
                }
            ],
            "Data Engineer": [
                {"title": "Python & SQL Mastery", "desc": "Advanced programming and complex querying.", "duration": "4 weeks"},
                {"title": "Data Warehousing", "desc": "Snowflake, Redshift, BigQuery.", "duration": "4 weeks"},
                {"title": "ETL/ELT Pipelines", "desc": "Apache Airflow, dbt, Spark.", "duration": "5 weeks"},
                {"title": "Big Data Technologies", "desc": "Hadoop, Kafka, Distributed Systems.", "duration": "5 weeks"},
                {"title": "Cloud Data Services", "desc": "AWS Glue, Azure Data Factory.", "duration": "4 weeks"},
                {"title": "Capstone Project", "desc": "Build a real-time data pipeline.", "duration": "4 weeks"}
            ],
            "Data Analyst": [
                {"title": "Excel & SQL Basics", "desc": "Data manipulation and querying.", "duration": "4 weeks"},
                {"title": "BI Tools (Tableau/Power BI)", "desc": "Creating dashboards and reports.", "duration": "4 weeks"},
                {"title": "Python for Data Analysis", "desc": "Pandas, Matplotlib, Seaborn.", "duration": "5 weeks"},
                {"title": "Statistics & Probability", "desc": "A/B testing, hypothesis testing.", "duration": "3 weeks"},
                {"title": "Data Storytelling", "desc": "Presenting insights effectively.", "duration": "2 weeks"},
                {"title": "Portfolio Projects", "desc": "End-to-end data analysis projects.", "duration": "4 weeks"}
            ],
            "DevOps Engineer": [
                {"title": "Linux & Scripting", "desc": "Bash, Python, OS administration.", "duration": "4 weeks"},
                {"title": "Version Control & CI/CD", "desc": "Git, Jenkins, GitHub Actions.", "duration": "4 weeks"},
                {"title": "Containerization (Docker)", "desc": "Building and managing images.", "duration": "3 weeks"},
                {"title": "Orchestration (Kubernetes)", "desc": "Deploying scalable applications.", "duration": "5 weeks"},
                {"title": "Infrastructure as Code", "desc": "Terraform, Ansible.", "duration": "4 weeks"},
                {"title": "Monitoring & Logging", "desc": "Prometheus, Grafana, ELK stack.", "duration": "3 weeks"}
            ],
            "Cybersecurity Analyst": [
                {"title": "Networking Fundamentals", "desc": "TCP/IP, Firewalls, Routing.", "duration": "4 weeks"},
                {"title": "Security Principles", "desc": "CIA triad, Cryptography basics.", "duration": "3 weeks"},
                {"title": "Ethical Hacking", "desc": "Penetration testing, vulnerability scanning.", "duration": "5 weeks"},
                {"title": "Incident Response", "desc": "Handling and mitigating breaches.", "duration": "4 weeks"},
                {"title": "Security Tools", "desc": "Wireshark, Metasploit, SIEM.", "duration": "4 weeks"},
                {"title": "Certifications Prep", "desc": "CompTIA Security+, CEH.", "duration": "4 weeks"}
            ],
            "Database Administrator": [
                {"title": "SQL Fundamentals", "desc": "Complex queries, joins, subqueries.", "duration": "4 weeks"},
                {"title": "Database Architecture", "desc": "Relational vs NoSQL databases.", "duration": "3 weeks"},
                {"title": "Performance Tuning", "desc": "Indexing, query optimization.", "duration": "4 weeks"},
                {"title": "Backup & Recovery", "desc": "Disaster recovery planning.", "duration": "3 weeks"},
                {"title": "Security & User Management", "desc": "Roles, permissions, encryption.", "duration": "3 weeks"},
                {"title": "Cloud Databases", "desc": "Amazon RDS, Azure SQL.", "duration": "3 weeks"}
            ],
            "UI/UX Designer": [
                {"title": "Design Principles", "desc": "Color theory, typography, layout.", "duration": "3 weeks"},
                {"title": "User Research", "desc": "Personas, user journeys, interviews.", "duration": "4 weeks"},
                {"title": "Wireframing", "desc": "Low-fidelity prototyping.", "duration": "3 weeks"},
                {"title": "High-Fidelity Prototyping", "desc": "Figma, Adobe XD.", "duration": "5 weeks"},
                {"title": "Interaction Design", "desc": "Micro-interactions, animations.", "duration": "3 weeks"},
                {"title": "Portfolio Creation", "desc": "Showcasing design case studies.", "duration": "4 weeks"}
            ],
            "Product Manager": [
                {"title": "Agile & Scrum", "desc": "Methodologies and frameworks.", "duration": "3 weeks"},
                {"title": "Product Strategy", "desc": "Market research, vision, roadmapping.", "duration": "4 weeks"},
                {"title": "User Centric Design", "desc": "Understanding user needs.", "duration": "3 weeks"},
                {"title": "Data-Driven Decisions", "desc": "Metrics, KPIs, A/B testing.", "duration": "4 weeks"},
                {"title": "Stakeholder Management", "desc": "Communication and negotiation.", "duration": "3 weeks"},
                {"title": "Launch & Go-to-Market", "desc": "Execution and marketing alignment.", "duration": "3 weeks"}
            ],
            "Business Analyst": [
                {"title": "Business Fundamentals", "desc": "Understanding organizational goals.", "duration": "3 weeks"},
                {"title": "Requirements Gathering", "desc": "Interviewing, documenting.", "duration": "4 weeks"},
                {"title": "Data Analysis (Excel/SQL)", "desc": "Extracting insights from data.", "duration": "4 weeks"},
                {"title": "Process Modeling", "desc": "BPMN, flowcharts.", "duration": "3 weeks"},
                {"title": "BI & Visualization", "desc": "Tableau, Power BI.", "duration": "3 weeks"},
                {"title": "Communication Skills", "desc": "Presenting to stakeholders.", "duration": "3 weeks"}
            ],
            "Graphic Designer": [
                {"title": "Design Fundamentals", "desc": "Layout, color, typography.", "duration": "3 weeks"},
                {"title": "Adobe Photoshop", "desc": "Image editing and manipulation.", "duration": "4 weeks"},
                {"title": "Adobe Illustrator", "desc": "Vector graphics and logos.", "duration": "4 weeks"},
                {"title": "Branding & Identity", "desc": "Creating cohesive brand visual assets.", "duration": "4 weeks"},
                {"title": "Digital & Print Design", "desc": "Adapting designs for mediums.", "duration": "3 weeks"},
                {"title": "Portfolio Development", "desc": "Showcasing best works.", "duration": "4 weeks"}
            ],
            "Digital Marketer": [
                {"title": "Marketing Fundamentals", "desc": "Funnels, target audience, branding.", "duration": "3 weeks"},
                {"title": "SEO & SEM", "desc": "Search engine optimization and marketing.", "duration": "4 weeks"},
                {"title": "Social Media Marketing", "desc": "Organic and paid social strategies.", "duration": "4 weeks"},
                {"title": "Content Strategy", "desc": "Copywriting, blog posts, video.", "duration": "3 weeks"},
                {"title": "Email Marketing", "desc": "Campaigns, automation, list building.", "duration": "3 weeks"},
                {"title": "Analytics (Google Analytics)", "desc": "Tracking and optimizing ROI.", "duration": "3 weeks"}
            ],
            "Financial Analyst": [
                {"title": "Accounting Basics", "desc": "Financial statements, balance sheets.", "duration": "3 weeks"},
                {"title": "Advanced Excel", "desc": "Pivot tables, VLOOKUP, macros.", "duration": "4 weeks"},
                {"title": "Financial Modeling", "desc": "DCF, forecasting, valuation.", "duration": "5 weeks"},
                {"title": "Corporate Finance", "desc": "Capital budgeting, risk management.", "duration": "4 weeks"},
                {"title": "Data Analysis", "desc": "SQL/Python for financial data.", "duration": "3 weeks"},
                {"title": "Reporting & Presentation", "desc": "Communicating financial health.", "duration": "3 weeks"}
            ],
            "HR Manager": [
                {"title": "HR Fundamentals", "desc": "Labor laws, compliance, ethics.", "duration": "3 weeks"},
                {"title": "Talent Acquisition", "desc": "Recruitment, interviewing, onboarding.", "duration": "4 weeks"},
                {"title": "Employee Relations", "desc": "Conflict resolution, engagement.", "duration": "4 weeks"},
                {"title": "Performance Management", "desc": "Appraisals, feedback, KPIs.", "duration": "3 weeks"},
                {"title": "Compensation & Benefits", "desc": "Payroll, perks, incentives.", "duration": "3 weeks"},
                {"title": "HR Analytics", "desc": "Using data to improve retention.", "duration": "3 weeks"}

            ]
        }
        
        required_skills_map = {
            "Business Analyst": ["Data Analysis", "SQL", "Tableau/Power BI", "Business Acumen", "Communication"],
            "Cloud Engineer": ["AWS/Azure/GCP", "Linux", "Networking", "Docker/Kubernetes", "Terraform"],
            "Cybersecurity Analyst": ["Network Security", "Ethical Hacking", "Cryptography", "Linux", "Incident Response"],
            "Data Scientist": ["Python", "SQL", "Machine Learning", "Statistics", "Data Visualization"],
            "Database Administrator": ["SQL", "Database Design", "Performance Tuning", "Backup & Recovery", "Linux"],
            "DevOps Engineer": ["CI/CD", "Docker/Kubernetes", "AWS/Azure/GCP", "Linux", "Python/Bash"],
            "Digital Marketer": ["SEO/SEM", "Content Strategy", "Google Analytics", "Social Media Marketing", "Copywriting"],
            "Financial Analyst": ["Excel", "Financial Modeling", "Data Analysis", "Accounting", "Corporate Finance"],
            "Full Stack Developer": ["JavaScript/TypeScript", "React/Angular", "Node.js/Python", "SQL/NoSQL", "Git"],
            "Graphic Designer": ["Adobe Photoshop", "Illustrator", "Typography", "Color Theory", "UI/UX Basics"],
            "HR Manager": ["Talent Acquisition", "Employee Relations", "HRIS", "Performance Management", "Communication"],
            "Machine Learning Engineer": ["Python", "Deep Learning", "MLOps", "Software Engineering", "Cloud Platforms"],
            "Product Manager": ["Agile/Scrum", "Product Strategy", "User Research", "Data Analysis", "Communication"],
            "Software Developer": ["Java/C++/Python", "Data Structures", "Algorithms", "System Design", "Version Control"],
            "UI/UX Designer": ["Figma", "User Research", "Prototyping", "Wireframing", "Interaction Design"],
            "Data Engineer": ["Python/Scala", "SQL", "ETL/ELT", "Spark/Hadoop", "Cloud Data Warehouses"],
            "Data Analyst": ["SQL", "Excel", "Tableau/Power BI", "Python/R", "Statistical Analysis"]
        }

        # Default roadmap if career not specifically mapped
        default_roadmap = [
            {
                "title": "Core Technical & Theoretical Fundamentals",
                "duration": "Month 1-2 (Weeks 1-8)",
                "desc": "Master the essential principles, syntax, foundational algorithms, and standard tooling for this career field.",
                "topics": ["Core Domain Syntax & Key Concepts", "Data Structures & Computational Foundations", "Version Control & Development Workflow", "Testing & Debugging Environments"],
                "project": "Build a Foundational Capstone Project Demonstrating Core Technical Competence",
                "resources": [
                    {"name": "Roadmap.sh Industry Learning Pathways", "type": "Interactive Guide", "url": "https://roadmap.sh"},
                    {"name": "FreeCodeCamp Developer Curriculum", "type": "Free Curriculum", "url": "https://www.freecodecamp.org/"},
                    {"name": "MIT OpenCourseWare Computer Science", "type": "University Lectures", "url": "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/"}
                ]
            },
            {
                "title": "Intermediate Tools, Frameworks & Application Architecture",
                "duration": "Month 3-4 (Weeks 9-16)",
                "desc": "Deepen technical execution by adopting modern industry frameworks, automated testing, and scalable database integration.",
                "topics": ["Standard Industry Frameworks & Packages", "Database Modeling & API Communication", "Error Handling & Defensive Coding", "Performance Profiling & Optimization"],
                "project": "Develop a Production-Ready Application Integrating External APIs and Persistent Data Storage",
                "resources": [
                    {"name": "Official Framework Documentation", "type": "Official Docs", "url": "https://developer.mozilla.org/"},
                    {"name": "Coursera Professional Specializations", "type": "Courses", "url": "https://www.coursera.org/"},
                    {"name": "GitHub Awesome Curated List", "type": "Resource Catalog", "url": "https://github.com/sindresorhus/awesome"}
                ]
            },
            {
                "title": "Advanced Topics, Scalability & System Optimization",
                "duration": "Month 5-6 (Weeks 17-24)",
                "desc": "Explore advanced distributed concepts, security compliance, asynchronous execution, and enterprise reliability patterns.",
                "topics": ["Advanced Concurrency & Scalability", "Security Hardening & Best Practices", "Distributed Workflows & Caching", "Cloud Infrastructure Deployment Basics"],
                "project": "Implement an End-to-End System Optimized for High Concurrency, Fault Tolerance, and Low Latency",
                "resources": [
                    {"name": "System Design Primer", "type": "GitHub Repository", "url": "https://github.com/donnemartin/system-design-primer"},
                    {"name": "High Scalability Real-World Architecture Case Studies", "type": "Case Studies", "url": "http://highscalability.com/"},
                    {"name": "O'Reilly Learning Platform & Books", "type": "Technical Books", "url": "https://www.oreilly.com/"}
                ]
            },
            {
                "title": "Production Deployment, Portfolio Showcase & Interview Preparation",
                "duration": "Month 6+ (Weeks 25+)",
                "desc": "Package and ship your work to live cloud infrastructure, publish comprehensive documentation, and prepare for interviews.",
                "topics": ["Automated CI/CD Deployment Pipelines", "Technical Portfolio Documentation & Case Studies", "Technical Coding & System Architecture Interviews", "Behavioral & Leadership Scenario Mastery"],
                "project": "Ship a Live Public Application with Automated CI/CD, Monitoring, and a Detailed Technical Blog Post",
                "resources": [
                    {"name": "LeetCode / HackerRank Practice Sets", "type": "Practice Platform", "url": "https://leetcode.com/"},
                    {"name": "Pramp Peer Mock Interviews", "type": "Interview Practice", "url": "https://www.pramp.com/"},
                    {"name": "GitHub Portfolio Showcase Examples", "type": "Portfolio Guide", "url": "https://github.com/"}
                ]
            }
        ]
        
        roadmap = roadmaps.get(predicted_career, default_roadmap)
        
        # Analyze skill gaps based on user_data to personalize further
        missing_skills = []

        if user_data.get('python', 0) < 2 and predicted_career in ['Data Scientist', 'Machine Learning Engineer', 'Data Engineer', 'Data Analyst']:
            missing_skills.append("Python Programming")
        if user_data.get('sql', 0) < 2 and predicted_career in ['Data Scientist', 'Database Administrator', 'Full Stack Developer', 'Data Engineer', 'Data Analyst', 'Business Analyst']:
            missing_skills.append("SQL Databases & Optimization")
        if user_data.get('cloud', 0) < 2 and predicted_career in ['Cloud Engineer', 'DevOps Engineer', 'Machine Learning Engineer', 'Data Engineer']:
            missing_skills.append("Cloud Infrastructure (AWS/GCP)")
        if user_data.get('web_dev', 0) < 2 and predicted_career in ['Full Stack Developer', 'Software Developer']:
            missing_skills.append("Modern Frontend Architecture")
        if user_data.get('security', 0) < 2 and predicted_career in ['Cybersecurity Analyst', 'DevOps Engineer', 'Cloud Engineer']:
            missing_skills.append("Network Security & Threat Modeling")
        if user_data.get('design', 0) < 2 and predicted_career in ['UI/UX Designer', 'Product Manager', 'Graphic Designer']:
            missing_skills.append("Figma & Design Systems")
        if user_data.get('communication', 2) < 2:
            missing_skills.append("Professional & Technical Communication")
        if user_data.get('leadership', 2) < 2 and predicted_career in ['Product Manager', 'Cloud Engineer', 'Full Stack Developer', 'DevOps Engineer']:
            missing_skills.append("Team Leadership & Agile Mentoring")
        if user_data.get('problem_solving', 2) < 2:
            missing_skills.append("Complex Problem Solving & Algorithms")
        if user_data.get('js', 0) < 2 and predicted_career in ['Full Stack Developer']:
            missing_skills.append("JavaScript")
        if user_data.get('networking', 0) < 2 and predicted_career in ['Cybersecurity Analyst', 'Cloud Engineer', 'DevOps Engineer']:
            missing_skills.append("Networking Concepts")
        if user_data.get('ml', 0) < 2 and predicted_career in ['Data Scientist', 'Machine Learning Engineer']:
            missing_skills.append("Machine Learning Basics")
        if user_data.get('data_analysis', 0) < 2 and predicted_career in ['Data Scientist', 'Data Analyst', 'Business Analyst', 'Financial Analyst']:
            missing_skills.append("Data Analysis Skills")

        # Assemble targeted resources for each detected missing skill
        skill_resources = {}
        for skill in missing_skills:
            skill_resources[skill] = SKILL_RESOURCES.get(skill, [
                {"name": f"{skill} Learning Guide", "type": "Documentation", "url": "https://roadmap.sh"}
            ])

            
        return {
            "career": predicted_career,
            "roadmap": roadmap,
            "missing_skills": missing_skills,
            "skill_resources": skill_resources,
            "required_skills": required_skills_map.get(predicted_career, ["Programming Fundamentals", "Problem Solving", "Communication", "Version Control"])

        }

roadmap_service = RoadmapService()
