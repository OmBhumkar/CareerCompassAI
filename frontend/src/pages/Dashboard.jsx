import { useState } from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  BookOpen, 
  Briefcase, 
  Zap, 
  Map, 
  Sparkles, 
  ChevronRight, 
  Layers,
  Award,
  ArrowRight,
  ExternalLink,
  Code2,
  FlaskConical,
  Library
} from 'lucide-react';

// Comprehensive catalog of curated career blueprints for all industry roles
const CAREER_BLUEPRINTS = {
  "Software Developer": {
    salaryMultiplier: 1.0,
    missingSkills: ["Data Structures & Algorithms", "System Design Fundamentals", "Clean Code & Testing", "CI/CD Pipelines"],
    roadmap: [
      { title: "Data Structures & Algorithms", duration: "Month 1-2", desc: "Arrays, Trees, Graphs, Dynamic Programming and problem solving on LeetCode.", topics: ["Arrays & Two-Pointer Patterns", "Binary Trees & BSTs", "Graph BFS/DFS", "Dynamic Programming Tabulation", "Hash Maps & Sliding Window"], project: "Implement an In-Memory Key-Value Store with LRU Cache Eviction from scratch", resources: [{"name": "NeetCode 150 Algorithmic Roadmap", "type": "Practice Platform", "url": "https://neetcode.io/practice"}, {"name": "MIT 6.006: Introduction to Algorithms", "type": "Free University Course", "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"}, {"name": "LeetCode Problem Set", "type": "Practice Platform", "url": "https://leetcode.com/"}] },
      { title: "Object Oriented Design & Clean Code", duration: "Month 2-3", desc: "Design patterns, SOLID principles, unit testing, and code modularity.", topics: ["SOLID Principles", "GoF Design Patterns (Factory, Observer, Strategy)", "Unit Testing & TDD", "Code Reviews & Refactoring"], project: "Design a Plugin-Based Simulation Engine with multiple interchangeable strategies", resources: [{"name": "Refactoring Guru: Design Patterns", "type": "Visual Guide", "url": "https://refactoring.guru/design-patterns"}, {"name": "Clean Code by Robert C. Martin", "type": "Reference Book", "url": "https://www.oreilly.com/library/view/clean-code-a/9780136083238/"}, {"name": "Martin Fowler: Refactoring", "type": "Articles", "url": "https://martinfowler.com/"}] },
      { title: "Backend Framework Mastery", duration: "Month 4-5", desc: "Build scalable microservices and RESTful APIs with database integration.", topics: ["RESTful API Design & OpenAPI", "FastAPI / Express / Spring Boot", "PostgreSQL Schema & Indexes", "JWT Authentication"], project: "Build a Multi-Tenant SaaS Backend with Role-Based Access Control and Stripe Integration", resources: [{"name": "FastAPI Official Documentation", "type": "Documentation", "url": "https://fastapi.tiangolo.com/"}, {"name": "The Odin Project: Full Stack JS", "type": "Interactive Course", "url": "https://www.theodinproject.com/paths/full-stack-javascript"}, {"name": "PostgreSQL Tutorial", "type": "Guide", "url": "https://www.postgresqltutorial.com/"}] },
      { title: "System Scalability & Capstone", duration: "Month 6+", desc: "Cache management, message queues, and high-concurrency production deployments.", topics: ["Redis Caching & Pub/Sub", "Message Queues (RabbitMQ/Kafka)", "Docker & Kubernetes Basics", "CI/CD with GitHub Actions"], project: "Deploy an Event-Driven URL Shortener handling 10k+ req/sec with full CI/CD pipeline", resources: [{"name": "System Design Primer", "type": "GitHub Repository", "url": "https://github.com/donnemartin/system-design-primer"}, {"name": "ByteByteGo System Design Newsletter", "type": "Architectural Guides", "url": "https://blog.bytebytego.com/"}, {"name": "Docker Official Docs", "type": "Documentation", "url": "https://docs.docker.com/get-started/"}] }
    ]
  },
  "Full Stack Developer": {
    salaryMultiplier: 1.08,
    missingSkills: ["Docker & Kubernetes", "System Design & Scalability", "PostgreSQL / NoSQL", "CI/CD Automated Pipelines"],
    roadmap: [
      { title: "Core Full Stack Mastery", duration: "Month 1-2", desc: "Master modern React, TypeScript, Node.js/FastAPI, and relational database modeling.", topics: ["React 19 Hooks & Context API", "TypeScript 5 Strict Mode", "Tailwind CSS & Accessible UI", "TanStack Query & Zustand State"], project: "Build a Real-Time Collaborative Task Board with Drag-and-Drop and Optimistic Updates", resources: [{"name": "Official React Documentation", "type": "Official Docs", "url": "https://react.dev/"}, {"name": "Full Stack Open (Univ. Helsinki)", "type": "Complete Course", "url": "https://fullstackopen.com/"}, {"name": "TypeScript Deep Dive by Basarat", "type": "Guide", "url": "https://basarat.gitbook.io/typescript"}] },
      { title: "System Design & Microservices", duration: "Month 3-4", desc: "Learn distributed system architecture, Redis caching, and robust authentication flows.", topics: ["REST vs GraphQL API Design", "Redis Caching & Rate Limiting", "OAuth2 / JWT Auth Flows", "PostgreSQL Indexing & Transactions"], project: "Build a Multi-Tenant Subscription SaaS API with Stripe Billing and OAuth2", resources: [{"name": "System Design Primer", "type": "GitHub Repository", "url": "https://github.com/donnemartin/system-design-primer"}, {"name": "Redis Developer Documentation", "type": "Documentation", "url": "https://redis.io/docs/"}, {"name": "FastAPI Official Documentation", "type": "Documentation", "url": "https://fastapi.tiangolo.com/"}] },
      { title: "Cloud & DevOps Integration", duration: "Month 5-6", desc: "Deploy production applications using Docker, Kubernetes, and automated CI/CD pipelines.", topics: ["Docker Multi-Stage Builds", "Kubernetes Pods & Services", "GitHub Actions CI/CD", "Sentry Error Tracking & Metrics"], project: "Deploy a Full Stack AI App with Zero-Downtime Rolling Releases and Global CDN", resources: [{"name": "Docker Official Getting Started", "type": "Documentation", "url": "https://docs.docker.com/get-started/"}, {"name": "GitHub Actions Documentation", "type": "Documentation", "url": "https://docs.github.com/en/actions"}, {"name": "Kubernetes Official Tutorials", "type": "Documentation", "url": "https://kubernetes.io/docs/tutorials/"}] },
      { title: "Production Product Launch", duration: "Month 6+", desc: "Build an end-to-end full stack web application and showcase to hiring managers.", topics: ["Performance Audits (Lighthouse)", "SEO & Core Web Vitals", "Portfolio & Case Study Writing", "Mock Technical Interviews"], project: "Ship a live SaaS product with auth, payments, a public API, and an automated test suite", resources: [{"name": "Roadmap.sh Full Stack Path", "type": "Interactive Roadmap", "url": "https://roadmap.sh/full-stack"}, {"name": "Web.dev: Core Web Vitals", "type": "Guides", "url": "https://web.dev/learn/"}, {"name": "Pramp Mock Interviews", "type": "Interview Practice", "url": "https://www.pramp.com/"}] }
    ]
  },
  "Data Scientist": {
    salaryMultiplier: 1.15,
    missingSkills: ["Statistical Inference", "Scikit-Learn & XGBoost", "Deep Learning (PyTorch)", "Data Pipeline Engineering"],
    roadmap: [
      { title: "Python & Statistical Analysis", duration: "Month 1-2", desc: "Master Pandas, NumPy, statistical hypothesis testing, and exploratory data analysis.", topics: ["Pandas & NumPy Vectorization", "Probability Distributions & Hypothesis Testing", "Multivariate Calculus & Linear Algebra", "Interactive Visualization with Seaborn & Plotly"], project: "Build an EDA & Statistical Insight Report on a 1M+ Row Financial or Healthcare Dataset", resources: [{"name": "Khan Academy: Statistics & Probability", "type": "Free Course", "url": "https://www.khanacademy.org/math/statistics-probability"}, {"name": "Pandas Official User Guide", "type": "Documentation", "url": "https://pandas.pydata.org/docs/user_guide/index.html"}, {"name": "StatQuest with Josh Starmer", "type": "Video Channel", "url": "https://statquest.org/"}] },
      { title: "Machine Learning Foundations", duration: "Month 3-4", desc: "Regression, tree-based models, clustering, and cross-validation model evaluation.", topics: ["Ridge & Lasso Regularized Regression", "XGBoost & LightGBM Ensembles", "Unsupervised Clustering: K-Means, DBSCAN, PCA", "SHAP Explainability & Feature Engineering"], project: "Develop a Credit Default Prediction Pipeline with Explainable SHAP Values", resources: [{"name": "Scikit-Learn Official User Guide", "type": "Documentation", "url": "https://scikit-learn.org/stable/user_guide.html"}, {"name": "ML Specialization by Andrew Ng (Coursera)", "type": "Online Course", "url": "https://www.coursera.org/specializations/machine-learning-introduction"}, {"name": "Kaggle Competitions & Datasets", "type": "Practice Platform", "url": "https://www.kaggle.com/"}] },
      { title: "Deep Learning & NLP", duration: "Month 5-6", desc: "Neural networks with PyTorch, transfer learning, and vector search embeddings.", topics: ["PyTorch Autograd & Tensor Computing", "CNNs & ResNets for Vision", "Transformer Self-Attention & BERT Fine-Tuning", "Vector Embeddings & Semantic Search"], project: "Fine-Tune a BERT Model for Multi-Class Sentiment Classification on Social Media Data", resources: [{"name": "PyTorch Zero to Mastery", "type": "Open Textbook", "url": "https://www.learnpytorch.io/"}, {"name": "Hugging Face NLP Course", "type": "Interactive Course", "url": "https://huggingface.co/learn"}, {"name": "Fast.ai: Practical Deep Learning", "type": "Video Course", "url": "https://course.fast.ai/"}] },
      { title: "End-to-End DS Portfolio", duration: "Month 6+", desc: "Deploy predictive data models with interactive Streamlit/FastAPI dashboards.", topics: ["FastAPI Async Model Serving", "Docker for ML Workflows", "Evidently AI Model Monitoring", "Streamlit Interactive Dashboards"], project: "Deploy a Live Predictive SaaS App with Streamlit UI + FastAPI + Docker on Cloud", resources: [{"name": "Made With ML: Production MLOps", "type": "Open Curriculum", "url": "https://madewithml.com/"}, {"name": "FastAPI Official Tutorial", "type": "Documentation", "url": "https://fastapi.tiangolo.com/tutorial/"}, {"name": "Roadmap.sh AI & Data Science Path", "type": "Interactive Roadmap", "url": "https://roadmap.sh/ai-data-scientist"}] }
    ]
  },
  "Machine Learning Engineer": {
    salaryMultiplier: 1.25,
    missingSkills: ["PyTorch / TensorFlow", "MLOps & Pipeline Automation", "Distributed Model Training", "Model Serving & FastAPI"],
    roadmap: [
      { title: "Production Python & Software Eng.", duration: "Month 1-2", desc: "Clean code, unit testing, packaging, and advanced algorithm optimizations.", topics: ["Advanced OOP, Generics & Protocols", "Pydantic v2 Data Validation", "Pytest & CI Testing", "Data Version Control (DVC) & Git LFS"], project: "Publish a Tested, Type-Safe ML Preprocessing Python Package with Automated CI", resources: [{"name": "Real Python Advanced Tutorials", "type": "Tutorials", "url": "https://realpython.com/"}, {"name": "DVC Documentation", "type": "Documentation", "url": "https://dvc.org/doc"}, {"name": "Clean Code in Python (GitHub)", "type": "Reference", "url": "https://github.com/zedr/clean-code-python"}] },
      { title: "Advanced ML & Deep Learning", duration: "Month 3-4", desc: "Transformers, attention mechanisms, fine-tuning LLMs, and computer vision.", topics: ["Distributed Data Parallel (DDP) in PyTorch", "DeepSpeed & FSDP Large Model Training", "Quantization: FP16, INT8, AWQ", "LoRA Fine-Tuning for LLMs"], project: "Train and Quantize a Multi-Modal Vision-Language Model on a Multi-GPU Cluster", resources: [{"name": "PyTorch Distributed Training Tutorial", "type": "Official Tutorial", "url": "https://pytorch.org/tutorials/beginner/dist_overview.html"}, {"name": "Hugging Face PEFT & LoRA Docs", "type": "Documentation", "url": "https://huggingface.co/docs/peft"}, {"name": "Weights & Biases Experiment Tracking", "type": "Platform Docs", "url": "https://docs.wandb.ai/"}] },
      { title: "MLOps & Cloud Pipelines", duration: "Month 5-6", desc: "Docker, Kubeflow, MLflow tracking, and AWS SageMaker/GCP Vertex deployments.", topics: ["Feast Feature Store", "MLflow Model Registry", "Kubeflow & Airflow Orchestration", "Data Drift & Automated Retraining"], project: "Build a Feature-Store-Backed Retraining Pipeline Triggered by Data Drift Anomalies", resources: [{"name": "MLOps Zoomcamp by DataTalksClub", "type": "Free GitHub Course", "url": "https://github.com/DataTalksClub/mlops-zoomcamp"}, {"name": "Feast Feature Store Docs", "type": "Documentation", "url": "https://docs.feast.dev/"}, {"name": "Evidently AI Model Monitoring", "type": "Documentation", "url": "https://docs.evidentlyai.com/"}] },
      { title: "High-Throughput Model Serving", duration: "Month 6+", desc: "ONNX Runtime, TensorRT, low-latency streaming endpoints, and model monitoring.", topics: ["Triton Inference Server & TensorRT", "Async gRPC & Streaming Endpoints", "GPU Autoscaling on Kubernetes", "Canary Deployments & Shadow Traffic"], project: "Deploy a Sub-20ms Real-Time Recommendation Engine on Kubernetes with Triton", resources: [{"name": "NVIDIA Triton Inference Server Docs", "type": "Official Docs", "url": "https://developer.nvidia.com/triton-inference-server"}, {"name": "vLLM High-Throughput Serving Engine", "type": "Documentation", "url": "https://docs.vllm.ai/"}, {"name": "Full Stack Deep Learning Course", "type": "Free Course", "url": "https://fullstackdeeplearning.com/"}] }
    ]
  },
  "Cloud Engineer": {
    salaryMultiplier: 1.12,
    missingSkills: ["AWS / Azure Solutions Architecture", "Terraform (IaC)", "Kubernetes Cluster Management", "Zero-Trust Security"],
    roadmap: [
      { title: "Linux & Cloud Networking", duration: "Month 1-2", desc: "VPC, routing tables, subnets, DNS, IAM policies, and Linux administration.", topics: ["Linux systemd, cgroups & File Permissions", "CIDR Subnetting, NAT Gateways & DNS", "Bash & Python Automation Utilities", "SSH Keys, TLS/SSL & PKI Infrastructure"], project: "Build an Automated Linux Server Provisioning & Hardening Script with Custom Firewall Rules", resources: [{"name": "Linux Journey: Interactive OS Guide", "type": "Interactive Guide", "url": "https://linuxjourney.com/"}, {"name": "Professor Messer Network+ Course", "type": "Free Video Series", "url": "https://www.professormesser.com/"}, {"name": "OverTheWire: Bandit Wargames", "type": "Hands-on Practice", "url": "https://overthewire.org/wargames/bandit/"}] },
      { title: "Infrastructure as Code (Terraform)", duration: "Month 3-4", desc: "Automate multi-region cloud infrastructure and configuration management.", topics: ["AWS Core: VPC, EC2, S3, IAM, RDS, ALB", "Terraform HCL Modules & Remote Backends", "HashiCorp Vault & AWS Secrets Manager", "Cloud FinOps: Cost Monitoring & Tagging"], project: "Provision a Resilient Multi-Region HA Cloud Infrastructure via Modular Terraform", resources: [{"name": "HashiCorp Terraform Associate Tutorials", "type": "Official Tutorials", "url": "https://developer.hashicorp.com/terraform/tutorials"}, {"name": "AWS Skill Builder Official Pathways", "type": "Official Training", "url": "https://explore.skillbuilder.aws/"}, {"name": "Adrian Cantrill AWS SA Guide", "type": "Certification Guide", "url": "https://learn.cantrill.io/"}] },
      { title: "Container Orchestration (Kubernetes)", duration: "Month 5-6", desc: "Manage pod lifecycle, Helm charts, service meshes, and ingress controllers.", topics: ["Docker Multi-Stage Builds & Registries", "Kubernetes Pods, ReplicaSets & StatefulSets", "Helm Charts & Environment Overrides", "Kubernetes Networking: Services & Ingress DNS"], project: "Deploy a Fault-Tolerant Microservices Cluster on Kubernetes with Automated Rolling Upgrades", resources: [{"name": "Kubernetes The Hard Way (Kelsey Hightower)", "type": "GitHub Deep-Dive", "url": "https://github.com/kelseyhightower/kubernetes-the-hard-way"}, {"name": "Kubernetes Official Tutorials", "type": "Documentation", "url": "https://kubernetes.io/docs/tutorials/"}, {"name": "KodeKloud CKA Interactive Labs", "type": "Interactive Labs", "url": "https://kodekloud.com/"}] },
      { title: "Cloud Security & Monitoring", duration: "Month 6+", desc: "Implement Prometheus, Grafana, CloudWatch, and cost optimization.", topics: ["Zero Trust Architecture & IAM Least Privilege", "Prometheus Metrics & Alertmanager", "Grafana Monitoring Dashboards", "Disaster Recovery (RTO/RPO) & Chaos Drills"], project: "Implement an End-to-End Enterprise Cloud Observability Stack with Custom Alert Routing", resources: [{"name": "Google SRE Books (Free Online)", "type": "Free Reference Books", "url": "https://sre.google/books/"}, {"name": "Prometheus Monitoring Documentation", "type": "Official Docs", "url": "https://prometheus.io/docs/introduction/overview/"}, {"name": "Roadmap.sh DevOps & Cloud Roadmap", "type": "Interactive Roadmap", "url": "https://roadmap.sh/devops"}] }
    ]
  },
  "DevOps Engineer": {
    salaryMultiplier: 1.14,
    missingSkills: ["Docker & Container Runtime", "Kubernetes Helm Charts", "GitHub Actions / GitLab CI", "Site Reliability Engineering"],
    roadmap: [
      { title: "Linux Scripting & Version Control", duration: "Month 1-2", desc: "Bash automation, Python scripting, advanced Git workflows, and security hygiene.", topics: ["Linux Internals & Bash Scripting", "Python for System Administration & APIs", "Git Trunk-Based Development & Hooks", "SSH Key Management & Security Best Practices"], project: "Build a CLI Automation Utility to Automate Environment Validation and Backup Verifications", resources: [{"name": "Linux Journey: Interactive Guide", "type": "Interactive Guide", "url": "https://linuxjourney.com/"}, {"name": "Automate the Boring Stuff with Python", "type": "Free Book", "url": "https://automatetheboringstuff.com/"}, {"name": "Pro Git Book", "type": "Official Git Book", "url": "https://git-scm.com/book/en/v2"}] },
      { title: "CI/CD Pipeline Engineering", duration: "Month 3-4", desc: "Automate build, test, and release cycles with GitHub Actions and Docker.", topics: ["Docker Multi-Stage Builds & Security Scans (Trivy)", "GitHub Actions & GitLab CI Pipeline Matrix", "SonarQube Static Code Analysis", "Artifact Registries: ECR, Artifactory, Docker Hub"], project: "Build an Automated Multi-Environment CI/CD Pipeline with Security Scanning and Image Signing", resources: [{"name": "GitHub Actions Official Documentation", "type": "Documentation", "url": "https://docs.github.com/en/actions"}, {"name": "Docker Official Documentation", "type": "Official Docs", "url": "https://docs.docker.com/"}, {"name": "Aqua Security Trivy Scanner Docs", "type": "Tool Documentation", "url": "https://aquasecurity.github.io/trivy/"}] },
      { title: "Kubernetes & Cloud Platforms", duration: "Month 5-6", desc: "Multi-cluster deployments, rolling updates, and immutable infrastructure.", topics: ["Kubernetes Control Plane, Nodes & Kubelet", "Helm Charts for Parameterized Deployments", "GitOps with ArgoCD & Flux", "Canary Deployments with Istio & Linkerd"], project: "Implement a Declarative GitOps Multi-Cluster Kubernetes Deployment with ArgoCD and Helm", resources: [{"name": "ArgoCD Official GitOps Documentation", "type": "Documentation", "url": "https://argo-cd.readthedocs.io/"}, {"name": "Helm Official Documentation", "type": "Documentation", "url": "https://helm.sh/docs/"}, {"name": "Kubernetes Official Documentation", "type": "Official Docs", "url": "https://kubernetes.io/docs/home/"}] },
      { title: "Site Reliability & Observability", duration: "Month 6+", desc: "Distributed tracing, SLO/SLA management, and incident response automation.", topics: ["Terraform Multi-Cloud Automation", "Prometheus & Grafana Observability", "OpenTelemetry Distributed Tracing", "Incident Response, Post-Mortems & SLOs"], project: "Deliver an Enterprise IaC Pipeline with Prometheus Alerting and Automated Incident Runbooks", resources: [{"name": "HashiCorp Terraform Documentation", "type": "Documentation", "url": "https://developer.hashicorp.com/terraform/docs"}, {"name": "Google SRE Workbook (Free)", "type": "Free Book", "url": "https://sre.google/workbook/table-of-contents/"}, {"name": "OpenTelemetry Official Docs", "type": "Documentation", "url": "https://opentelemetry.io/docs/"}] }
    ]
  },
  "Data Engineer": {
    salaryMultiplier: 1.18,
    missingSkills: ["Apache Spark / PySpark", "Airflow Pipeline Orchestration", "Snowflake / BigQuery", "Kafka Streaming"],
    roadmap: [
      { title: "Advanced SQL & Data Modeling", duration: "Month 1-2", desc: "Star schemas, query performance tuning, and column-oriented databases.", topics: ["Star & Snowflake Schema Design", "Window Functions & CTEs", "Query Optimization & Indexes", "dbt Data Transformation Models"], project: "Build an OLAP Star-Schema Data Warehouse with Automated dbt Transformation Tests", resources: [{"name": "Use The Index, Luke! SQL Guide", "type": "Interactive Guide", "url": "https://use-the-index-luke.com/"}, {"name": "Mode Analytics SQL School", "type": "Hands-on Practice", "url": "https://mode.com/sql-tutorial/"}, {"name": "dbt Official Documentation", "type": "Documentation", "url": "https://docs.getdbt.com/"}] },
      { title: "Big Data Processing with Spark", duration: "Month 3-4", desc: "Distributed batch data transformations using PySpark and Delta Lake.", topics: ["PySpark DataFrames & RDDs", "Spark SQL & Catalyst Optimizer", "Delta Lake ACID Transactions", "Apache Iceberg & Lakehouse Architecture"], project: "Build a PySpark ETL Pipeline Processing 500GB+ Daily Logs into a Delta Lake", resources: [{"name": "Apache Spark Official Documentation", "type": "Documentation", "url": "https://spark.apache.org/docs/latest/"}, {"name": "Delta Lake Official Guide", "type": "Documentation", "url": "https://docs.delta.io/latest/index.html"}, {"name": "Data Engineering Zoomcamp", "type": "Free Course", "url": "https://github.com/DataTalksClub/data-engineering-zoomcamp"}] },
      { title: "Orchestration & Streaming", duration: "Month 5-6", desc: "Schedule DAGs with Apache Airflow and build event streaming with Kafka.", topics: ["Apache Airflow DAGs & Operators", "Kafka Topics, Partitions & Consumer Groups", "Flink & Spark Structured Streaming", "Schema Registry & Avro Serialization"], project: "Build a Real-Time Fraud Detection Pipeline with Kafka Streams and Airflow Orchestration", resources: [{"name": "Apache Airflow Official Documentation", "type": "Documentation", "url": "https://airflow.apache.org/docs/"}, {"name": "Confluent Kafka Developer Guide", "type": "Documentation", "url": "https://developer.confluent.io/"}, {"name": "Roadmap.sh Data Engineer Path", "type": "Interactive Roadmap", "url": "https://roadmap.sh/data-engineer"}] },
      { title: "Lakehouse Architecture Project", duration: "Month 6+", desc: "Build an automated end-to-end data platform in the cloud.", topics: ["Snowflake & BigQuery Cloud DWH", "Data Quality (Great Expectations)", "Data Catalog & Lineage (Apache Atlas)", "Cloud Cost Optimization for Data Workloads"], project: "Architect an End-to-End Cloud Data Lakehouse with Automated Data Quality Checks and Lineage", resources: [{"name": "Snowflake Official Documentation", "type": "Documentation", "url": "https://docs.snowflake.com/"}, {"name": "Great Expectations Data Quality Docs", "type": "Documentation", "url": "https://docs.greatexpectations.io/"}, {"name": "AWS Skill Builder: Data Analytics Path", "type": "Official Training", "url": "https://explore.skillbuilder.aws/"}] }
    ]
  },
  "Data Analyst": {
    salaryMultiplier: 0.9,
    missingSkills: ["SQL Joins & Window Functions", "Power BI / Tableau Dashboards", "Business Metrics & KPIs", "Data Storytelling"],
    roadmap: [
      { title: "SQL & Relational Databases", duration: "Month 1-2", desc: "Master complex queries, aggregations, window functions, and data cleansing.", topics: ["Complex JOINs & Subqueries", "Window Functions: RANK, LAG, LEAD", "CTEs & Recursive Queries", "Data Cleansing & NULL Handling"], project: "Analyze a Real E-Commerce Dataset to Answer 20 Business KPI Questions using Pure SQL", resources: [{"name": "Mode Analytics SQL School", "type": "Hands-on Practice", "url": "https://mode.com/sql-tutorial/"}, {"name": "PostgreSQL Tutorial", "type": "Documentation", "url": "https://www.postgresqltutorial.com/"}, {"name": "StrataScratch SQL Interview Practice", "type": "Practice Platform", "url": "https://www.stratascratch.com/"}] },
      { title: "BI Tools & Interactive Dashboards", duration: "Month 3-4", desc: "Create executive dashboards with Tableau and Power BI using DAX expressions.", topics: ["Power BI Data Model & DAX Measures", "Tableau Calculated Fields & LOD Expressions", "Dashboard UX Best Practices", "Connecting to Live & Scheduled Data Sources"], project: "Build a Live Executive Sales & Inventory Dashboard in Power BI with Drill-Through Filters", resources: [{"name": "Microsoft Power BI Official Documentation", "type": "Documentation", "url": "https://learn.microsoft.com/en-us/power-bi/"}, {"name": "Tableau Public Learning Gallery", "type": "Learning Platform", "url": "https://public.tableau.com/app/learn/how-to-videos"}, {"name": "Guy in a Cube (Power BI YouTube)", "type": "Video Channel", "url": "https://www.youtube.com/@GuyinaCube"}] },
      { title: "Python for Exploratory Analysis", duration: "Month 5-6", desc: "Data manipulation with Pandas, visualization with Seaborn, and statistical tests.", topics: ["Pandas GroupBy, Pivot Tables & Reshaping", "Seaborn & Matplotlib Statistical Plots", "Scipy Hypothesis Testing (t-test, chi-squared)", "Automated Reporting with Jupyter & Papermill"], project: "Build an Automated Monthly Business Performance Report Generator in Python & Jupyter", resources: [{"name": "Pandas Official User Guide", "type": "Documentation", "url": "https://pandas.pydata.org/docs/user_guide/index.html"}, {"name": "StatQuest with Josh Starmer", "type": "Video Channel", "url": "https://statquest.org/"}, {"name": "Kaggle: Python & Data Visualization", "type": "Free Micro-Courses", "url": "https://www.kaggle.com/learn"}] },
      { title: "Business Strategy & Presentation", duration: "Month 6+", desc: "Translate raw metrics into actionable revenue and operational insights.", topics: ["AARRR Funnel Metrics & Cohort Analysis", "A/B Testing Statistical Significance", "Storytelling with Data Visualization", "Executive Presentation & Slide Design"], project: "Present a Full Data-Driven Business Case with Actionable Recommendations to a Mock Stakeholder Panel", resources: [{"name": "Storytelling with Data by Cole Nussbaumer", "type": "Book", "url": "https://www.storytellingwithdata.com/"}, {"name": "Google Data Analytics Professional Certificate", "type": "Coursera Course", "url": "https://www.coursera.org/professional-certificates/google-data-analytics"}, {"name": "Evan Miller A/B Testing Calculator", "type": "Statistical Tool", "url": "https://www.evanmiller.org/ab-testing/sample-size.html"}] }
    ]
  },
  "Cybersecurity Analyst": {
    salaryMultiplier: 1.1,
    missingSkills: ["Network Packet Analysis (Wireshark)", "SIEM & SOC Alert Triage", "OWASP Top 10 Vulnerabilities", "Security Compliance"],
    roadmap: [
      { title: "Networking & Security Fundamentals", duration: "Month 1-2", desc: "TCP/IP, cryptographic protocols, firewall management, and OS hardening.", topics: ["TCP/IP, DNS, HTTP & TLS Protocol Internals", "Symmetric & Asymmetric Cryptography", "Firewall Rules, NAT & Packet Filtering", "Linux OS Hardening & CIS Benchmarks"], project: "Set Up a Personal Cyber Lab with a Vulnerable VM, Firewall Rules, and IDS/IPS Monitoring", resources: [{"name": "Professor Messer Security+ Course", "type": "Free Video Series", "url": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/"}, {"name": "TryHackMe: Cyber Defense Path", "type": "Interactive Labs", "url": "https://tryhackme.com/"}, {"name": "OverTheWire Wargames", "type": "Hands-on Practice", "url": "https://overthewire.org/wargames/"}] },
      { title: "Threat Detection & SIEM Tools", duration: "Month 3-4", desc: "Splunk search queries, incident response workflows, and log analysis.", topics: ["Splunk Search Processing Language (SPL)", "MITRE ATT&CK Framework Mapping", "Incident Response Playbooks & NIST CSF", "Log Correlation & Alert Triage Workflows"], project: "Build a Simulated SOC Incident Response Report for a Phishing & Lateral Movement Attack Scenario", resources: [{"name": "Splunk Fundamentals 1 (Free)", "type": "Official Course", "url": "https://www.splunk.com/en_us/training/free-courses/splunk-fundamentals-1.html"}, {"name": "MITRE ATT&CK Knowledge Base", "type": "Industry Standard", "url": "https://attack.mitre.org/"}, {"name": "SANS Reading Room: Incident Handling", "type": "Case Studies", "url": "https://www.sans.org/reading-room/whitepapers/incident/"}] },
      { title: "Vulnerability Assessment & Pen Testing", duration: "Month 5-6", desc: "Nessus scans, ethical hacking methodologies, and remediation planning.", topics: ["OWASP Top 10 Vulnerability Exploitation", "Nessus & Nmap Automated Scanning", "Burp Suite Web App Penetration Testing", "CVE Scoring (CVSS) & Remediation Planning"], project: "Conduct a Full Penetration Test on a Vulnerable Web App and Write a Professional Security Report", resources: [{"name": "OWASP Top 10 Project", "type": "Industry Standard", "url": "https://owasp.org/www-project-top-ten/"}, {"name": "PortSwigger Web Security Academy", "type": "Interactive Labs", "url": "https://portswigger.net/web-security"}, {"name": "HackTheBox Penetration Testing Path", "type": "Hands-on Labs", "url": "https://www.hackthebox.com/"}] },
      { title: "Security Operations Capstone", duration: "Month 6+", desc: "Build incident playbooks and prepare for Security+ / CEH certifications.", topics: ["GDPR, SOC 2 & ISO 27001 Compliance", "Security Architecture Design Principles", "Cloud Security: AWS Security Hub & GuardDuty", "Mock Certification Exam Practice"], project: "Design and Document a Full Zero-Trust Security Architecture for a Hypothetical SaaS Company", resources: [{"name": "CompTIA Security+ Study Guide", "type": "Certification Prep", "url": "https://www.comptia.org/certifications/security"}, {"name": "AWS Security Hub Documentation", "type": "Documentation", "url": "https://docs.aws.amazon.com/securityhub/"}, {"name": "Roadmap.sh Cybersecurity Path", "type": "Interactive Roadmap", "url": "https://roadmap.sh/cyber-security"}] }
    ]
  },
  "UI/UX Designer": {
    salaryMultiplier: 0.95,
    missingSkills: ["Figma Auto-Layout & Components", "Design Systems & Tokens", "User Journey Mapping", "Usability Testing"],
    roadmap: [
      { title: "UX Research & Information Architecture", duration: "Month 1-2", desc: "User interviews, persona building, task flows, and paper wireframing.", topics: ["User Interview Methodologies & The Mom Test", "Jobs-to-be-Done (JTBD) Framework", "Empathy Mapping & Affinity Diagramming", "Site Maps, Task Flows & Paper Wireframing"], project: "Conduct 5 User Interviews and Produce a Full UX Research Report with Actionable Recommendations", resources: [{"name": "Nielsen Norman Group UX Articles", "type": "Research Articles", "url": "https://www.nngroup.com/articles/"}, {"name": "Google UX Design Certificate (Coursera)", "type": "Coursera Course", "url": "https://www.coursera.org/professional-certificates/google-ux-design"}, {"name": "The Mom Test by Rob Fitzpatrick", "type": "Book", "url": "https://www.momtestbook.com/"}] },
      { title: "Visual UI Design in Figma", duration: "Month 3-4", desc: "Master design systems, typography hierarchy, accessible contrast, and auto-layout.", topics: ["Figma Auto-Layout, Components & Variants", "Typography Hierarchy & Color Theory", "WCAG 2.1 Accessibility & Contrast Ratios", "Design Tokens & Shared Styles"], project: "Design a Complete Accessible Design System with 30+ Components for a B2B SaaS Product", resources: [{"name": "Figma Official Help Center & Tutorials", "type": "Official Guides", "url": "https://help.figma.com/hc/en-us"}, {"name": "Refactoring UI by Adam Wathan", "type": "Book & Guide", "url": "https://www.refactoringui.com/"}, {"name": "Figma Community Templates", "type": "Resource Hub", "url": "https://www.figma.com/community"}] },
      { title: "Interactive Prototyping & Motion", duration: "Month 5-6", desc: "High-fidelity micro-interactions, smart animations, and usability test runs.", topics: ["Figma Interactive Prototyping & Smart Animate", "Micro-Interaction Design Principles", "Usability Testing Scripts & Think-Aloud Protocol", "Heuristic Evaluation & A/B Testing"], project: "Run 5 Moderated Usability Tests on a Clickable Prototype and Produce an Iteration Report", resources: [{"name": "UX Design Institute: Usability Testing Guide", "type": "Guide", "url": "https://www.uxdesigninstitute.com/blog/usability-testing/"}, {"name": "Maze User Research Platform", "type": "Testing Tool", "url": "https://maze.co/"}, {"name": "Lottie by Airbnb: Animation for Designers", "type": "Tool", "url": "https://airbnb.io/lottie/"}] },
      { title: "Case Study Portfolio", duration: "Month 6+", desc: "Publish 3 comprehensive UX case studies detailing the design thinking journey.", topics: ["UX Case Study Structure: Problem to Process to Outcome", "Portfolio Website Design with Framer or Webflow", "Presenting to Hiring Panels", "Freelance Contracts & Rate Negotiation"], project: "Publish a Portfolio with 3 End-to-End Case Studies Covering Research, Design, and User Testing", resources: [{"name": "Bestfolios: UX Portfolio Inspiration", "type": "Resource Gallery", "url": "https://www.bestfolios.com/casestudy"}, {"name": "Framer Website Builder for Designers", "type": "Tool", "url": "https://www.framer.com/"}, {"name": "UX Collective: Portfolio Writing Articles", "type": "Articles", "url": "https://uxdesign.cc/"}] }
    ]
  },
  "Product Manager": {
    salaryMultiplier: 1.25,
    missingSkills: ["PRD Documentation", "Agile Sprint Management", "Cohort Analytics & A/B Testing", "Stakeholder Alignment"],
    roadmap: [
      { title: "Customer Discovery & Market Sizing", duration: "Month 1-2", desc: "Conduct user interviews, analyze competitor landscapes, and validate product bets.", topics: ["User Interview Methodologies & The Mom Test", "Jobs-to-be-Done (JTBD) Framework", "Competitor Matrix & Market Sizing (TAM/SAM/SOM)", "Product Vision & Strategy Formulation"], project: "Deliver a Customer Discovery Report & Value Proposition Canvas for an Emerging AI Market Need", resources: [{"name": "The Mom Test by Rob Fitzpatrick", "type": "Customer Discovery Book", "url": "https://www.momtestbook.com/"}, {"name": "Continuous Discovery Habits (Teresa Torres)", "type": "Product Discovery Guide", "url": "https://www.producttalk.org/"}, {"name": "Lenny's Newsletter & PM Community", "type": "Industry Essays", "url": "https://www.lennysnewsletter.com/"}] },
      { title: "Product Roadmapping & PRDs", duration: "Month 3-4", desc: "Write comprehensive specs, prioritize features using RICE, and define OKRs.", topics: ["PRD: Problem Statements, User Stories & Non-Goals", "Prioritization Frameworks: RICE, Kano, MoSCoW", "Agile Scrum: Backlog Grooming & Retros", "Managing Technical Debt & Engineering Tradeoffs"], project: "Author a Production-Ready PRD with User Flows, Metrics, and Go/No-Go Acceptance Criteria", resources: [{"name": "Atlassian Agile Coach & PRD Templates", "type": "Templates & Guides", "url": "https://www.atlassian.com/agile/product-management/requirements"}, {"name": "Inspired by Marty Cagan", "type": "Classic Book", "url": "https://svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/"}, {"name": "Reforge Product Management Guides", "type": "Industry Articles", "url": "https://www.reforge.com/blog"}] },
      { title: "Data-Driven Product Analytics", duration: "Month 5-6", desc: "Funnel drop-off analysis, feature adoption tracking, and A/B test experiments.", topics: ["North Star Metrics & Input Metric Trees", "Event Tracking with Mixpanel and Amplitude", "Cohort Retention Analysis & Churn Modeling", "A/B Testing: Statistical Power & Sample Sizing"], project: "Design, Instrument, and Analyze an A/B Test Experiment with Cohort Retention Funnels", resources: [{"name": "Mixpanel Product Analytics Guide", "type": "Interactive Guide", "url": "https://mixpanel.com/blog/"}, {"name": "Amplitude Product Analytics Playbook", "type": "E-Book", "url": "https://amplitude.com/playbook"}, {"name": "Evan Miller A/B Testing Calculator", "type": "Statistical Tool", "url": "https://www.evanmiller.org/ab-testing/sample-size.html"}] },
      { title: "Go-To-Market Execution", duration: "Month 6+", desc: "Lead beta launches, gather customer feedback, and iterate towards product-market fit.", topics: ["Go-To-Market (GTM) Launch Coordination", "Product-Led Growth (PLG) & Virality Loops", "SaaS Pricing Models: Freemium, Tiered, Usage-Based", "Executive Stakeholder Communication & Board Decks"], project: "Deliver a Comprehensive GTM Launch Plan & Executive Deck for a New Feature Rollout", resources: [{"name": "Product-Led Growth by Wes Bush", "type": "Growth Book", "url": "https://productled.com/book/"}, {"name": "First Round Review: PM Essays & Case Studies", "type": "Case Studies", "url": "https://review.firstround.com/"}, {"name": "Roadmap.sh Product Manager Pathway", "type": "Interactive Roadmap", "url": "https://roadmap.sh/product-manager"}] }
    ]
  }
};

const Dashboard = () => {
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return <Navigate to="/assessment" />;
  }

  const { career_prediction, salary_estimation, roadmap, career_details, all_careers } = result;

  // Build the list of all predicted careers (with primary first)
  const careerList = all_careers && all_careers.length > 0 
    ? all_careers 
    : [
        { 
          career: career_prediction?.primary_career || 'Software Engineer', 
          match_percentage: career_prediction?.primary_match || 90 
        },
        ...(career_prediction?.alternatives || [])
      ];

  // Default active career is the top match
  const [selectedCareer, setSelectedCareer] = useState(careerList[0]?.career || '');

  // Find active career metadata
  const activeCareerObj = careerList.find(c => c.career === selectedCareer) || careerList[0];
  const activeCareerName = activeCareerObj?.career || selectedCareer;
  const activeMatchPercentage = activeCareerObj?.match_percentage || 85;

  // Derive salary estimation for the selected career
  const getSalaryForCareer = (careerName) => {
    // 1. Check if backend returned explicit salary estimation for this career
    if (career_details?.[careerName]?.salary_estimation) {
      return career_details[careerName].salary_estimation;
    }
    // 2. If it's the primary career, check root salary_estimation
    if (careerName === career_prediction?.primary_career && salary_estimation) {
      return salary_estimation;
    }
    // 3. Realistic dynamic estimate derived from base salary and role multiplier
    const baseEstimated = parseFloat(salary_estimation?.estimated_salary || 12.0);
    const blueprint = CAREER_BLUEPRINTS[careerName] || CAREER_BLUEPRINTS[Object.keys(CAREER_BLUEPRINTS).find(k => careerName.includes(k))] || { salaryMultiplier: 1.0 };
    const adjusted = Math.round((baseEstimated * blueprint.salaryMultiplier) * 10) / 10;
    const lower = Math.max(3.0, Math.round(adjusted * 0.82 * 10) / 10);
    const upper = Math.round(adjusted * 1.18 * 10) / 10;

    return {
      symbol: salary_estimation?.symbol || '₹',
      estimated_salary: adjusted.toString(),
      lower_range: lower.toString(),
      upper_range: upper.toString(),
      currency: salary_estimation?.currency || 'LPA'
    };
  };

  // Derive roadmap & skill gaps for the selected career
  const getRoadmapForCareer = (careerName) => {
    // 1. Check if backend returned explicit roadmap for this career
    if (career_details?.[careerName]?.roadmap) {
      return career_details[careerName].roadmap;
    }
    // 2. If it's the primary career, check root roadmap
    if (careerName === career_prediction?.primary_career && roadmap) {
      return roadmap;
    }
    // 3. Fallback to blueprint catalog
    const blueprint = CAREER_BLUEPRINTS[careerName] || CAREER_BLUEPRINTS[Object.keys(CAREER_BLUEPRINTS).find(k => careerName.includes(k))] || CAREER_BLUEPRINTS["Full Stack Developer"];
    return {
      career: careerName,
      missing_skills: blueprint.missingSkills,
      roadmap: blueprint.roadmap
    };
  };

  const currentSalary = getSalaryForCareer(activeCareerName);
  const currentRoadmapData = getRoadmapForCareer(activeCareerName);
  const currentSkillGaps = currentRoadmapData?.missing_skills || [];
  const currentRoadmapSteps = currentRoadmapData?.roadmap || [];

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AI Model Evaluation Complete
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Career Intelligence Report
          </h1>
          <p className="text-slate-400 text-base mt-1">
            Machine Learning identified multiple matching career paths. <span className="text-cyan-400 font-medium">Click on any career below</span> to view its estimated salary, skill gaps, and detailed roadmap.
          </p>
        </div>
        <Link 
          to="/assessment" 
          className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors text-sm font-semibold self-start md:self-auto flex items-center gap-2 shrink-0 shadow-sm"
        >
          Retake Assessment
        </Link>
      </div>

      {/* ── Interactive Multi-Career Selection Cards ── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            Predicted Career Matches ({careerList.length})
          </h2>
          <span className="text-xs text-slate-400 hidden sm:inline">Select a career to inspect details</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {careerList.map((item, idx) => {
            const isSelected = item.career === activeCareerName;
            const isTopMatch = idx === 0;

            return (
              <div
                key={item.career}
                id={`career-card-${idx}`}
                onClick={() => setSelectedCareer(item.career)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedCareer(item.career); }}
                className={`relative p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-950/40 to-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10 ring-2 ring-cyan-500/30 -translate-y-1'
                    : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Top Badge: Rank or Selected */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  {isTopMatch ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      <Award className="w-3 h-3 text-cyan-400" /> Top Match
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/80">
                      Match #{idx + 1}
                    </span>
                  )}

                  {isSelected && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Active
                    </span>
                  )}
                </div>

                {/* Career Name */}
                <h3 className={`font-bold text-base leading-snug mb-3 transition-colors ${
                  isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {item.career}
                </h3>

                {/* Match Percentage Bar */}
                <div className="space-y-1.5 mt-auto pt-2 border-t border-slate-800/60">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Model Confidence</span>
                    <span className={`font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-300'}`}>
                      {item.match_percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 rounded-full ${
                        isSelected 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                          : 'bg-slate-600'
                      }`}
                      style={{ width: `${item.match_percentage}%` }}
                    />
                  </div>
                </div>

                {/* Click indicator */}
                <div className="mt-3 flex items-center justify-between text-xs pt-1">
                  <span className={isSelected ? 'text-cyan-400 font-medium' : 'text-slate-500'}>
                    {isSelected ? 'Viewing Report' : 'Click to inspect'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Active Selection Banner ── */}
      <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/30 border border-cyan-800/40 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
            <Target className="w-4 h-4" /> Currently Viewing Insights
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-300">
            {activeCareerName}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Predicted {activeMatchPercentage}% alignment with your academic background, technical skills, and soft skills profile.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2 bg-slate-800/80 rounded-xl border border-slate-700 text-center">
            <div className="text-xs text-slate-400">Match Score</div>
            <div className="text-xl font-black text-cyan-400">{activeMatchPercentage}%</div>
          </div>
        </div>
      </div>

      {/* ── Grid: Salary Estimation & High Priority Skill Gaps ── */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Estimated Salary Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-900/30 rounded-xl text-green-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Estimated Salary</h3>
                  <p className="text-xs text-slate-400">Based on CatBoost ML Model</p>
                </div>
              </div>
            </div>

            <div className="py-6 flex flex-col items-center justify-center text-center border-y border-slate-800/80 my-2">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                Expected Annual Compensation
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {currentSalary.symbol}{currentSalary.estimated_salary}{' '}
                <span className="text-xl text-slate-400 font-semibold">{currentSalary.currency}</span>
              </div>
              <div className="mt-3">
                <span className="text-green-400 text-xs sm:text-sm font-semibold bg-green-950/60 px-3 py-1 rounded-full border border-green-800/50 inline-flex items-center gap-1">
                  Expected Range: {currentSalary.symbol}{currentSalary.lower_range} – {currentSalary.upper_range} {currentSalary.currency}
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-2.5 mt-4">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              Compensation estimates reflect market benchmarks for <strong className="text-slate-200">{activeCareerName}</strong> roles matching your degree, project portfolio, and technical evaluations.
            </span>
          </div>
        </div>

        {/* High Priority Skill Gaps Card */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-900/30 rounded-xl text-amber-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">High Priority Skill Gaps</h3>
                  <p className="text-xs text-slate-400">Targeted areas to unlock higher compensation in this role</p>
                </div>
              </div>
              <span className="text-xs font-medium bg-amber-950/60 text-amber-300 border border-amber-800/50 px-2.5 py-1 rounded-lg">
                {currentSkillGaps.length} Recommendations
              </span>
            </div>

            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Based on your self-assessment, mastering these key technologies and competencies will bridge the gap to becoming an exceptional <strong className="text-slate-200">{activeCareerName}</strong>:
            </p>

            {currentSkillGaps.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {currentSkillGaps.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 text-amber-200 text-sm font-medium hover:bg-amber-950/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700/50 text-center">
                <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-white font-bold text-sm">Strong Profile Alignment!</h4>
                <p className="text-xs text-slate-400 mt-1">No severe technical skill gaps detected for this career path.</p>
              </div>
            )}
          </div>

          <div className="p-4 bg-cyan-950/20 border border-cyan-900/30 rounded-xl text-xs text-cyan-200/80 flex items-center justify-between gap-4 mt-2">
            <span>Follow the step-by-step milestones below to address each priority skill.</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
          </div>
        </div>
      </div>

      {/* ── Detailed Roadmap Section ── */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-900/30 rounded-xl text-purple-400">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Detailed Roadmap for {activeCareerName}
              </h2>
              <p className="text-sm text-slate-400">
                Actionable learning journey tailored specifically for this career trajectory
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 self-start sm:self-auto">
            {currentRoadmapSteps.length} Milestones
          </span>
        </div>

        {/* Milestone Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {currentRoadmapSteps.map((step, idx) => {
            const isLast = idx === currentRoadmapSteps.length - 1;

            return (
              <div key={idx} className="relative group">
                {/* Timeline circle badge */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500/80 group-hover:border-cyan-400 flex items-center justify-center text-cyan-400 text-xs font-black shadow-lg shadow-cyan-500/10 transition-colors z-10">
                  {idx + 1}
                </div>

                {/* Milestone Card */}
                <div className="bg-slate-800/50 group-hover:bg-slate-800/80 transition-all rounded-2xl border border-slate-700/80 overflow-hidden shadow-sm">

                  {/* Card Header */}
                  <div className="p-5 pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        {isLast ? (
                          <Briefcase className="w-5 h-5 text-cyan-400 shrink-0" />
                        ) : (
                          <BookOpen className="w-5 h-5 text-cyan-400 shrink-0" />
                        )}
                        {step.title}
                      </h3>
                      <span className="text-xs font-semibold bg-cyan-950/60 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/50 self-start shrink-0">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Topics to Learn */}
                  {step.topics && step.topics.length > 0 && (
                    <div className="px-5 pb-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                        <Code2 className="w-3.5 h-3.5 text-blue-400" />
                        Key Topics
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {step.topics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-800/50 text-blue-200 font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Capstone Project Idea */}
                  {step.project && (
                    <div className="px-5 pb-4">
                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-950/30 border border-purple-800/40">
                        <FlaskConical className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-0.5">Capstone Project Idea</div>
                          <p className="text-purple-100 text-sm font-medium leading-snug">{step.project}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Learning Resources */}
                  {step.resources && step.resources.length > 0 && (
                    <div className="bg-slate-900/60 border-t border-slate-700/60 px-5 py-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        <Library className="w-3.5 h-3.5 text-green-400" />
                        Learning Resources
                      </div>
                      <div className="grid sm:grid-cols-3 gap-2.5">
                        {step.resources.map((res, rIdx) => (
                          <a
                            key={rIdx}
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/60 hover:bg-green-950/40 border border-slate-700/60 hover:border-green-700/60 transition-all group/res"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5 group-hover/res:text-green-300" />
                            <div className="min-w-0">
                              <p className="text-white text-xs font-semibold leading-snug line-clamp-2 group-hover/res:text-green-200 transition-colors">{res.name}</p>
                              <span className="text-slate-500 text-[10px] mt-0.5 inline-block">{res.type}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
