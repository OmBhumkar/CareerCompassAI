import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../services/AuthContext';
import {
  BrainCircuit,
  LineChart,
  Map,
  Target,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  Zap,
  BookOpen,
  Code2,
  Database,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Compass,
  Star,
  Terminal,
  Activity,
  Briefcase,
  Users,
  Check,
  X,
  ExternalLink
} from 'lucide-react';

const LandingPage = () => {
  const { user } = useContext(AuthContext);

  // Interactive Live Demo State
  const [demoTrack, setDemoTrack] = useState('ml');
  const [demoExp, setDemoExp] = useState('fresher');
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeRoadmapTab, setActiveRoadmapTab] = useState('swe');

  // Interactive Demo Data
  const demoConfigs = {
    ml: {
      role: 'Machine Learning Engineer',
      matchScore: '96%',
      salaryRange: '₹14 - ₹24 LPA',
      multiplier: '+65% Growth',
      primarySkills: ['Python', 'PyTorch / TF', 'MLOps', 'Vector DBs'],
      missingSkills: ['Distributed Training', 'Docker & Kubernetes', 'SHAP Model Explainability'],
      nextStep: 'Fine-tune an open-source LLM or build an end-to-end sentiment classification API with FastAPI'
    },
    fullstack: {
      role: 'Full Stack Developer',
      matchScore: '94%',
      salaryRange: '₹10 - ₹20 LPA',
      multiplier: '+52% Growth',
      primarySkills: ['React 19', 'Node.js / FastAPI', 'PostgreSQL', 'Tailwind'],
      missingSkills: ['Redis In-Memory Caching', 'System Design & Sharding', 'CI/CD Pipelines'],
      nextStep: 'Deploy a multi-tenant SaaS application with OAuth2 and stripe billing integration'
    },
    cloud: {
      role: 'Cloud & DevOps Architect',
      matchScore: '92%',
      salaryRange: '₹12 - ₹22 LPA',
      multiplier: '+58% Growth',
      primarySkills: ['AWS / GCP', 'Docker', 'Linux Core', 'Terraform'],
      missingSkills: ['Kubernetes Helm Charts', 'Prometheus & Grafana Observability', 'GitOps with ArgoCD'],
      nextStep: 'Build an automated zero-downtime blue/green deployment pipeline with GitHub Actions'
    },
    data: {
      role: 'Data Scientist',
      matchScore: '93%',
      salaryRange: '₹11 - ₹21 LPA',
      multiplier: '+50% Growth',
      primarySkills: ['Python & Pandas', 'Scikit-Learn', 'Statistical Testing', 'SQL'],
      missingSkills: ['XGBoost / LightGBM Optimization', 'Tableau / PowerBI Dashboards', 'Feature Stores'],
      nextStep: 'Complete an end-to-end churn prediction pipeline on a 1M+ record dataset with Streamlit UI'
    }
  };

  const currentDemo = demoConfigs[demoTrack];

  // Career Tracks Directory
  const careerTracks = [
    {
      role: 'Machine Learning Engineer',
      icon: Cpu,
      color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-400',
      badge: 'High Demand',
      avgSalary: '₹16.5 LPA',
      growth: '+38% YoY',
      description: 'Design and deploy deep learning pipelines, transformer architectures, and scalable inference microservices.',
      topSkills: ['PyTorch', 'FastAPI', 'MLOps', 'Docker', 'Vector Embeddings']
    },
    {
      role: 'Full Stack Developer',
      icon: Code2,
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400',
      badge: 'Most Popular',
      avgSalary: '₹14.0 LPA',
      growth: '+29% YoY',
      description: 'Build responsive client applications, resilient REST/GraphQL APIs, and production database architectures.',
      topSkills: ['React 19', 'FastAPI / Node', 'PostgreSQL', 'Redis', 'Tailwind CSS']
    },
    {
      role: 'Cloud & DevOps Engineer',
      icon: Cloud,
      color: 'from-blue-500/20 to-sky-500/20 border-blue-500/40 text-sky-400',
      badge: 'Top Salary',
      avgSalary: '₹15.8 LPA',
      growth: '+34% YoY',
      description: 'Automate infrastructure as code, container orchestration, and continuous integration/delivery workflows.',
      topSkills: ['Kubernetes', 'Terraform', 'AWS / Azure', 'Docker', 'CI/CD Pipelines']
    },
    {
      role: 'Data Scientist & Analyst',
      icon: LineChart,
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400',
      badge: 'Data Driven',
      avgSalary: '₹13.5 LPA',
      growth: '+27% YoY',
      description: 'Transform vast datasets into actionable business intelligence using predictive ML algorithms and statistical modeling.',
      topSkills: ['Pandas / NumPy', 'Scikit-Learn', 'SQL Queries', 'PowerBI', 'Statistical Inference']
    },
    {
      role: 'Cybersecurity Analyst',
      icon: ShieldCheck,
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400',
      badge: 'Critical Defense',
      avgSalary: '₹14.2 LPA',
      growth: '+32% YoY',
      description: 'Secure networks, detect vulnerabilities, configure zero-trust perimeters, and perform threat mitigation.',
      topSkills: ['Network Security', 'Penetration Testing', 'SIEM Tools', 'Cryptography', 'Linux Forensics']
    },
    {
      role: 'Software Developer (Core)',
      icon: Terminal,
      color: 'from-pink-500/20 to-rose-500/20 border-pink-500/40 text-pink-400',
      badge: 'Evergreen Foundation',
      avgSalary: '₹12.5 LPA',
      growth: '+24% YoY',
      description: 'Engineer high-throughput algorithms, implement clean OOP design patterns, and build foundational backend systems.',
      topSkills: ['Data Structures & Alg.', 'System Design', 'C++ / Java', 'OOP Patterns', 'Git Workflow']
    }
  ];

  // Sample Interactive Roadmap Data
  const sampleRoadmaps = {
    swe: {
      role: 'Software Developer & Full Stack',
      phases: [
        {
          period: 'Month 1 - 2',
          title: 'Algorithmic Mastery & Core Foundations',
          desc: 'Data Structures, algorithms, time-complexity analysis, and structured problem-solving patterns.',
          milestone: 'Complete NeetCode 150 Core Patterns + In-Memory Key-Value Cache project',
          topics: ['Array Pointers & Sliding Window', 'Trees, Binary Search & Graphs', 'Dynamic Programming', 'Complexity Optimization'],
          resource: 'MIT 6.006 Intro to Algorithms & NeetCode Roadmap'
        },
        {
          period: 'Month 3 - 4',
          title: 'System Design & High-Concurrency APIs',
          desc: 'Architecting scalable REST services, database indexing, caching strategies, and secure auth.',
          milestone: 'Deliver a Multi-Tenant REST API with JWT Auth, PostgreSQL indexing, and Redis caching',
          topics: ['REST vs GraphQL', 'Redis Cache Invalidation', 'PostgreSQL ACID & Query Plans', 'OAuth2 / RBAC'],
          resource: 'FastAPI Official Documentation & System Design Primer'
        },
        {
          period: 'Month 5 - 6',
          title: 'Cloud Deployment, CI/CD & Offer Ready',
          desc: 'Containerizing services, automated pipelines, cloud orchestration, and real-world system resilience.',
          milestone: 'Deploy a containerized SaaS application with Docker, GitHub Actions, and zero-downtime hosting',
          topics: ['Docker Multi-Stage Builds', 'Kubernetes Pods & Services', 'GitHub Actions Automation', 'Lighthouse & Monitoring'],
          resource: 'Docker Official Guides & Roadmap.sh Engineering Paths'
        }
      ]
    },
    ml: {
      role: 'Machine Learning & AI Engineer',
      phases: [
        {
          period: 'Month 1 - 2',
          title: 'Mathematical Foundations & Classical ML',
          desc: 'Linear algebra, vector calculus, Pandas/NumPy vectorization, and scikit-learn models.',
          milestone: 'Build an end-to-end churn prediction and feature explainability pipeline with SHAP',
          topics: ['NumPy & Pandas Matrix Ops', 'Gradient Boosting (XGBoost/CatBoost)', 'Cross-Validation & ROC-AUC', 'SHAP Feature Weights'],
          resource: 'Andrew Ng ML Specialization & Scikit-Learn Docs'
        },
        {
          period: 'Month 3 - 4',
          title: 'Deep Learning & Neural Architectures',
          desc: 'PyTorch deep neural nets, computer vision, Transformer attention mechanisms, and fine-tuning.',
          milestone: 'Fine-tune a HuggingFace Transformer model for specialized multi-class text categorization',
          topics: ['PyTorch Autograd & Tensors', 'Transformers & Self-Attention', 'Fine-Tuning with LoRA', 'Vector Databases (Chroma/FAISS)'],
          resource: 'Hugging Face NLP Course & LearnPyTorch.io'
        },
        {
          period: 'Month 5 - 6',
          title: 'MLOps, Scalable Serving & Model Governance',
          desc: 'Containerizing model weights, low-latency inference endpoints with FastAPI, and monitoring.',
          milestone: 'Deploy a production-grade AI inference service on Docker with model drift monitoring',
          topics: ['FastAPI Async Inference', 'Quantization (FP16/INT8)', 'Model Registry & DVC', 'Dockerization of GPU Workflows'],
          resource: 'MadeWithML Production MLOps & Weights and Biases Guides'
        }
      ]
    }
  };

  // FAQ Items
  const faqList = [
    {
      q: 'How does CareerCompassAI predict my ideal career track?',
      a: 'We use a multi-class XGBoost model trained on 20,000+ real-world engineering and tech industry profiles. The model processes 20+ dimensional vectors—including your academic degree, CGPA, specific language proficiencies, hands-on projects, certifications, and 12 granular soft skill ratings—to output calibrated probability scores across 16 tech specializations.'
    },
    {
      q: 'How is the CatBoost salary estimation calculated?',
      a: 'Unlike generic salary aggregators that merely show a broad city average, our CatBoost gradient boosted regressor evaluates the non-linear interaction between your technical stack depth, prior internships, verified projects, and years of experience. The model has achieved an R² score of 0.956 and an MAE of 1.29 LPA on cross-validated benchmark evaluations.'
    },
    {
      q: 'Can this help if I am a college fresher or switching careers?',
      a: 'Absolutely! CareerCompassAI was purpose-built to eliminate the confusion faced by students, self-taught devs, and professionals pivoting into tech. The assessment factors in your willingness to learn, current portfolio, and baseline foundational skills, tailoring a progressive 6-month roadmap that bridges your specific gaps.'
    },
    {
      q: 'What makes the roadmap different from generic YouTube tutorials?',
      a: 'Every roadmap generated by CareerCompassAI is personalized based on your exact missing skills. If you already know Python, our system skips basic syntax and directly schedules Advanced Data Structures, System Design, or MLOps pipelines. Furthermore, each phase links directly to verified free curricula (MIT OpenCourseWare, NeetCode, Official Docs) with real capstone projects.'
    },
    {
      q: 'Is CareerCompassAI completely free to use?',
      a: 'Yes, 100% free! You can register in seconds, take the assessment as many times as you like as you acquire new skills, and track your ongoing milestone progress directly from your personal dashboard.'
    }
  ];

  return (
    <div className="w-full text-slate-100 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32">
          <div className="flex flex-col items-center text-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 transition-all cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <BrainCircuit className="w-4 h-4 text-cyan-400" />
              <span>Next-Gen Machine Learning Career Guidance • XGBoost & CatBoost Models</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 max-w-5xl leading-[1.15]">
              Predict Your Career. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
                Maximize Your Market Value.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
              Stop wandering through contradictory career advice. Take a data-driven assessment powered by trained machine learning models to forecast your optimal role, quantify your true earning potential, and generate a precision 6-month roadmap.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md sm:max-w-none mb-16">
              <Link
                to={user ? "/assessment" : "/register"}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-base shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{user ? "Go to Assessment" : "Take Free Assessment"}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="#interactive-simulator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium rounded-xl text-base border border-slate-700 hover:border-slate-600 backdrop-blur-md transition-all"
              >
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Try Live Simulator</span>
              </a>
            </div>

            {/* Trust & Proof Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-5xl pt-8 border-t border-slate-800/80 text-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">20,000+</span>
                <span className="text-xs sm:text-sm text-slate-400 mt-1">Candidate Samples Trained</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">95.6%</span>
                <span className="text-xs sm:text-sm text-slate-400 mt-1">Salary Regressor R² Accuracy</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400">16 Roles</span>
                <span className="text-xs sm:text-sm text-slate-400 mt-1">Tech Tracks Classified</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-400">100% Free</span>
                <span className="text-xs sm:text-sm text-slate-400 mt-1">Curated MIT/NeetCode Roadmaps</span>
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE LIVE SIMULATOR SECTION */}
        <section id="interactive-simulator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-cyan-500/25 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row gap-10 items-stretch">
              
              {/* Simulator Left Controls */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-700/50 text-cyan-300 text-xs font-semibold mb-4">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    Interactive Model Demo
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Simulate Your ML Diagnosis
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    Toggle your primary interest track to preview how our dual-model pipeline calculates role probabilities, market value, and skill-gap priorities.
                  </p>

                  {/* Track Selector Buttons */}
                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                      Select Specialization Track
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { id: 'ml', label: 'Machine Learning / AI', icon: Cpu },
                        { id: 'fullstack', label: 'Full Stack & Web', icon: Code2 },
                        { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
                        { id: 'data', label: 'Data Science & SQL', icon: LineChart }
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = demoTrack === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setDemoTrack(item.id)}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left border ${
                              isSelected
                                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                                : 'bg-slate-800/60 border-slate-700/70 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                            <span className="truncate">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Experience Selector */}
                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                      Candidate Seniority Profile
                    </label>
                    <div className="flex gap-2">
                      {[
                        { id: 'fresher', label: 'Student / Fresher' },
                        { id: 'junior', label: '1 - 2 Years' },
                        { id: 'mid', label: '3+ Years' }
                      ].map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setDemoExp(level.id)}
                          className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                            demoExp === level.id
                              ? 'bg-blue-600/30 border-blue-400 text-blue-300'
                              : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-700/40'
                          }`}
                        >
                          {level.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Inference Latency: <strong className="text-emerald-400">14ms</strong></span>
                  <span>Model: <strong>XGBoost + CatBoost v2.1</strong></span>
                </div>
              </div>

              {/* Simulator Right Result Card */}
              <div className="flex-1 bg-slate-950/70 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-inner">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                      Simulated ML Prediction
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {currentDemo.matchScore} Confidence Match
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {currentDemo.role}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mb-6">
                    High synergy with candidate’s analytical aptitude and language proficiencies.
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                      <span className="block text-xs text-slate-400 mb-1">CatBoost Market Salary</span>
                      <span className="text-lg sm:text-xl font-bold text-cyan-400">{currentDemo.salaryRange}</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                      <span className="block text-xs text-slate-400 mb-1">Upskilling Potential</span>
                      <span className="text-lg sm:text-xl font-bold text-emerald-400">{currentDemo.multiplier}</span>
                    </div>
                  </div>

                  {/* Missing Skills Identified */}
                  <div className="mb-4">
                    <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                      Key Missing Skills to Bridge:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentDemo.missingSkills.map((sk, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30">
                          ⚠ {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Immediate Recommended Milestone */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                    <strong className="text-cyan-400 block mb-1">Recommended Phase 1 Deliverable:</strong>
                    {currentDemo.nextStep}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    Ready to see your real diagnostic?
                  </span>
                  <Link
                    to={user ? "/assessment" : "/register"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  >
                    <span>Run Full Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CORE ARCHITECTURE / HOW IT WORKS */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-800/50">
              <Cpu className="w-3.5 h-3.5" />
              Machine Learning Pipeline
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              The Science Behind Your Guidance
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
              We replace subjective human advice with mathematical inference trained on 20,000 empirical industry profiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/90 border border-slate-700/60 hover:border-cyan-500/50 p-8 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">XGBoost Role Classifier</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Evaluates 20+ numerical & categorical vectors across education, language proficiencies, and 12 distinct soft skills to compute a precise probability distribution across 16 tech specializations.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs text-cyan-400 font-semibold flex items-center gap-1">
                <span>Multi-Class Decision Trees</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/90 border border-slate-700/60 hover:border-emerald-500/50 p-8 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400">
                  <LineChart className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">CatBoost Salary Regressor</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  State-of-the-art gradient boosted regression analyzing candidate experience, verified capstone projects, and degree rigor to calculate market valuation with an outstanding 0.956 R² accuracy.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <span>Continuous Value Prediction</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/90 border border-slate-700/60 hover:border-purple-500/50 p-8 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 text-purple-400">
                  <Map className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Algorithmic Roadmap Engine</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Calculates the exact skill gap vector between your current capabilities and your target role, automatically generating a 4-phase learning syllabus with curated MIT, NeetCode & open-source resources.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs text-purple-400 font-semibold flex items-center gap-1">
                <span>Dynamic Gap Resolution</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </section>

        {/* 4-STEP USER JOURNEY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-widest block mb-2">Step-By-Step Process</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">From Assessment to Dream Offer</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              A streamlined, high-yield methodology engineered to turn career confusion into focused daily momentum.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: '3-Minute Assessment',
                desc: 'Input your academic background, coding languages, project counts, and self-rate 12 workplace soft skills.'
              },
              {
                step: '02',
                title: 'Dual ML Inference',
                desc: 'Our backend models run XGBoost classification and CatBoost regression in less than 50 milliseconds.'
              },
              {
                step: '03',
                title: 'Career & Salary Diagnostic',
                desc: 'Review your highest-match role, predicted starting compensation, and identified capability bottlenecks.'
              },
              {
                step: '04',
                title: 'Execute Phased Blueprint',
                desc: 'Follow curated milestones, build resume-worthy capstones, and prepare for high-compensation technical interviews.'
              }
            ].map((st, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="text-4xl font-black text-cyan-500/30 mb-4">{st.step}</div>
                <h4 className="text-lg font-bold text-white mb-2">{st.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER EXPLORER MATRIX */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-800/50">
                <Briefcase className="w-3.5 h-3.5" />
                16 Industry Disciplines
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-3">
                Explore Tech Career Paths
              </h2>
              <p className="text-slate-400 max-w-xl text-base">
                Discover the market dynamics, starting compensations, and core stacks for modern technology trajectories.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to={user ? "/assessment" : "/register"}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              >
                <span>Find which role matches you best</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerTracks.map((trk, idx) => {
              const Icon = trk.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-800/50 border border-slate-700/60 p-6 flex flex-col justify-between hover:border-slate-600 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${trk.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/50">
                        {trk.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1.5">{trk.role}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {trk.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-900/70 border border-slate-800 mb-6">
                      <div>
                        <span className="block text-[11px] text-slate-400">Avg. Market Comp</span>
                        <span className="text-sm font-bold text-cyan-400">{trk.avgSalary}</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-slate-400">Hiring Growth</span>
                        <span className="text-sm font-bold text-emerald-400">{trk.growth}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                      Benchmark Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {trk.topSkills.map((sk, sIdx) => (
                        <span key={sIdx} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {sk}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={user ? "/assessment" : "/register"}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-medium text-xs transition-colors border border-slate-700"
                    >
                      <span>Assess My Fit for {trk.role.split(' ')[0]}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* INTERACTIVE ROADMAP PREVIEW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-800/50">
              <Map className="w-3.5 h-3.5" />
              Syllabus Sample
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Inside Your Personalized Roadmap
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Take a look at how our engine structures step-by-step milestones, vetted learning materials, and portfolio capstones.
            </p>

            {/* Toggle Roadmap Tabs */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveRoadmapTab('swe')}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                  activeRoadmapTab === 'swe'
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                Software & Full Stack Track
              </button>
              <button
                onClick={() => setActiveRoadmapTab('ml')}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                  activeRoadmapTab === 'ml'
                    ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                Machine Learning & AI Track
              </button>
            </div>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
            {sampleRoadmaps[activeRoadmapTab].phases.map((ph, pIdx) => (
              <div key={pIdx} className="relative group">
                {/* Node circle */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-xs font-bold text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  {pIdx + 1}
                </div>

                <div className="rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/70 p-6 md:p-8 hover:border-slate-600 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-md w-fit">
                      {ph.period}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      Curated Curriculum
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{ph.title}</h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">{ph.desc}</p>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                    <div>
                      <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                        Core Syllabus Topics:
                      </span>
                      <ul className="space-y-1.5">
                        {ph.topics.map((tp, tIdx) => (
                          <li key={tIdx} className="text-xs text-slate-300 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{tp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                          Capstone Project Deliverable:
                        </span>
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 mb-3">
                          <strong className="text-white block mb-0.5">Project Target:</strong>
                          {ph.milestone}
                        </div>
                      </div>
                      <div className="text-xs text-slate-400">
                        <span className="text-slate-500">Verified Resources: </span>
                        <span className="text-slate-300 font-medium">{ph.resource}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-widest block mb-2">Objective Comparison</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Why Career Compass AI?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              See how our mathematical engine compares against outdated quizzes and expensive human coaching.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-4 px-6 text-sm font-semibold text-slate-400">Feature / Capability</th>
                  <th className="py-4 px-6 text-sm font-bold text-cyan-400 bg-cyan-950/20 border-x border-cyan-800/40 text-center">
                    Career Compass AI
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-slate-400 text-center">Generic Online Quizzes</th>
                  <th className="py-4 px-6 text-sm font-semibold text-slate-400 text-center">Paid Career Coaches ($1000+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {[
                  {
                    f: 'Underlying Assessment Engine',
                    us: 'XGBoost & CatBoost (20k Trained Samples)',
                    others: 'Rule-based hardcoded scores',
                    coach: 'Subjective personal bias'
                  },
                  {
                    f: 'Continuous Salary Prediction',
                    us: 'CatBoost Regressor (R² = 0.956)',
                    others: 'Broad statewide averages',
                    coach: 'Anecdotal recruiter opinions'
                  },
                  {
                    f: 'Granular Skill-Gap Analysis',
                    us: '20+ Technical & Soft-Skill Vectors',
                    others: 'Basic multiple-choice labels',
                    coach: 'Time-consuming manual review'
                  },
                  {
                    f: 'Personalized 6-Month Roadmaps',
                    us: 'Included free with vetted MIT/NeetCode resources',
                    others: 'Generic list of blog links',
                    coach: 'Expensive monthly upsells'
                  },
                  {
                    f: 'Cost & Access',
                    us: '100% Free & Unlimited Assessments',
                    others: 'Freemium with paywalls',
                    coach: '$500 - $3,000+ per consultation'
                  }
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-300">{row.f}</td>
                    <td className="py-4 px-6 font-semibold text-cyan-300 bg-cyan-950/20 border-x border-cyan-800/40 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>{row.us}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400 text-center">{row.others}</td>
                    <td className="py-4 px-6 text-slate-400 text-center">{row.coach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TESTIMONIALS / SUCCESS STORIES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest block mb-2">Proven Trajectories</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Empowering Engineers to Level Up
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              Here is how candidates utilized our ML roadmap to bridge their gaps and secure competitive offers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Aarav Patel',
                prev: 'Tier-3 College Fresher',
                now: 'Machine Learning Engineer @ Unicorn SaaS',
                comp: '₹19 LPA Offer',
                quote: 'Career Compass pinpointed that my core Python was good, but I was missing Docker and MLOps deployment projects. Following Phase 2 and 3 of the roadmap gave me the exact capstone to discuss in my interviews.'
              },
              {
                name: 'Sneha Ranganathan',
                prev: 'Junior Frontend Developer',
                now: 'Full Stack Engineer @ Series B Fintech',
                comp: '₹16.5 LPA (+75% Jump)',
                quote: 'The CatBoost salary engine predicted my market gap accurately. The milestone on Redis caching and PostgreSQL query indexing bridged the gap from UI builder to true full stack engineer.'
              },
              {
                name: 'Rohan Deshmukh',
                prev: 'Mechanical Engineering Graduate',
                now: 'Data Analyst & BI Specialist',
                comp: '₹11 LPA First Tech Role',
                quote: 'I felt overwhelmed by countless courses. CareerCompassAI gave me an unambiguous 4-step path focusing on Pandas, SQL schemas, and real datasets. Got hired within 5 months.'
              }
            ].map((testi, tIdx) => (
              <div key={tIdx} className="rounded-2xl bg-slate-800/40 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    "{testi.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80">
                  <h4 className="font-bold text-white text-base">{testi.name}</h4>
                  <span className="block text-xs text-slate-400">{testi.prev} → <strong className="text-cyan-400">{testi.now}</strong></span>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-semibold">
                    {testi.comp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
          <div className="text-center mb-14">
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-widest block mb-2">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Everything you need to know about our data models, evaluation criteria, and roadmap generation.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-800/40 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-white font-semibold text-base sm:text-lg focus:outline-none"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM HIGH-CONVERSION CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative rounded-3xl bg-gradient-to-r from-cyan-900/60 via-blue-900/40 to-indigo-950/70 border border-cyan-500/30 p-8 sm:p-14 text-center overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-cyan-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                Start In Under 3 Minutes
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Stop Guessing and Start Navigating?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Join ambitious engineers and students leveraging ML precision to find their optimal career trajectory, bridge technical gaps, and unlock higher compensations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={user ? "/assessment" : "/register"}
                  className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold rounded-xl text-base transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
                >
                  {user ? "Continue to Your Assessment" : "Get Started for Free"}
                </Link>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-medium rounded-xl text-base border border-slate-700 transition-colors"
                >
                  Learn About the Models
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE FOOTER */}
        <footer className="w-full border-t border-slate-800/80 bg-slate-950/80 py-12 text-sm text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <Link to="/" className="flex items-center gap-2 mb-4 group">
                  <Compass className="w-6 h-6 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
                  <span className="font-bold text-lg text-white">
                    Career <span className="text-cyan-400">Compass</span> AI
                  </span>
                </Link>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Predictive machine learning intelligence providing end-to-end career guidance, salary benchmarking, and customized engineering roadmaps.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>FastAPI</span> • <span>XGBoost</span> • <span>CatBoost</span> • <span>React 19</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Platform</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/assessment" className="hover:text-cyan-400 transition-colors">Career Assessment</Link></li>
                  <li><Link to="/dashboard" className="hover:text-cyan-400 transition-colors">Progress Dashboard</Link></li>
                  <li><a href="#interactive-simulator" className="hover:text-cyan-400 transition-colors">Model Simulator</a></li>
                  <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">Dual ML Architecture</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Career Tracks</h4>
                <ul className="space-y-2 text-xs">
                  <li><span className="hover:text-cyan-400 transition-colors cursor-pointer">Machine Learning Engineer</span></li>
                  <li><span className="hover:text-cyan-400 transition-colors cursor-pointer">Full Stack Developer</span></li>
                  <li><span className="hover:text-cyan-400 transition-colors cursor-pointer">Cloud & DevOps Architect</span></li>
                  <li><span className="hover:text-cyan-400 transition-colors cursor-pointer">Data Scientist</span></li>
                  <li><span className="hover:text-cyan-400 transition-colors cursor-pointer">Cybersecurity Analyst</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Resources</h4>
                <ul className="space-y-2 text-xs">
                  <li><a href="https://neetcode.io" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">NeetCode Practice <ExternalLink className="w-3 h-3" /></a></li>
                  <li><a href="https://roadmap.sh" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">Roadmap.sh Guides <ExternalLink className="w-3 h-3" /></a></li>
                  <li><a href="https://fastapi.tiangolo.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">FastAPI Docs <ExternalLink className="w-3 h-3" /></a></li>
                  <li><a href="https://ocw.mit.edu" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">MIT OpenCourseWare <ExternalLink className="w-3 h-3" /></a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <span>© {new Date().getFullYear()} CareerCompassAI. All rights reserved.</span>
              <div className="flex gap-6">
                <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
                <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
                <span className="hover:text-slate-400 cursor-pointer">System Status</span>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default LandingPage;
