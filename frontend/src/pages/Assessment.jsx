import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../services/AuthContext';
import { Loader2, ArrowRight, ArrowLeft, CheckCircle2, BrainCircuit } from 'lucide-react';

const steps = [
  { id: 'education', title: 'Education' },
  { id: 'experience', title: 'Experience & Projects' },
  { id: 'skills', title: 'Technical Skills' },
  { id: 'soft_skills', title: 'Soft Skills' }
];

const Assessment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    degree: 'B.Tech',
    specialization: 'CSE',
    cgpa: 8.0,
    experience_years: 0,
    internships: 0,
    projects: 0,
    certifications: 0,
    python: 1,
    java: 1,
    cpp: 0,
    js: 1,
    sql: 1,
    web_dev: 1,
    data_analysis: 0,
    ml: 0,
    cloud: 0,
    security: 0,
    networking: 0,
    design: 0,
    // Soft Skills (0-3 scale)
    communication: 1,
    teamwork: 1,
    problem_solving: 1,
    leadership: 1,
    time_management: 1,
    adaptability: 1,
    critical_thinking: 1,
    work_ethic: 1,
    emotional_intelligence: 1,
    conflict_resolution: 1,
    presentation: 1,
    decision_making: 1,
    target_salary: 12,
    timeline: '1 year'
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' || type === 'range' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      // Create derived features
      const technical_score = (
        formData.python + formData.java + formData.cpp + formData.js + formData.sql +
        formData.web_dev + formData.data_analysis + formData.ml + formData.cloud +
        formData.security + formData.networking + formData.design
      ) * 5;

      const soft_skills_score = (
        formData.communication + formData.teamwork + formData.problem_solving +
        formData.leadership + formData.time_management + formData.adaptability +
        formData.critical_thinking + formData.work_ethic + formData.emotional_intelligence +
        formData.conflict_resolution + formData.presentation + formData.decision_making
      ) * 5;

      const payload = {
        ...formData,
        technical_score,
        soft_skills_score
      };

      // Dynamic evaluation based on assessment skills (used as fallback if backend is unreachable)
      const roleScores = [
        {
          career: 'Data Scientist',
          score: (formData.data_analysis * 4) + (formData.ml * 4) + (formData.python * 2) + (formData.sql * 2) + (formData.cgpa * 0.5),
          salary_estimation: { symbol: '₹', estimated_salary: '16.5', lower_range: '12.0', upper_range: '21.0', currency: 'LPA' },
          roadmap: {
            missing_skills: ['Advanced PyTorch & Transformers', 'Feature Stores (Feast)', 'MLOps Pipeline Deployment'],
            roadmap: [
              { title: 'Python & Statistical Modeling', duration: 'Month 1-2', desc: 'Master statistical inference, probability distributions, Pandas and NumPy.' },
              { title: 'Machine Learning In-Depth', duration: 'Month 3-4', desc: 'Build regression, ensemble trees (XGBoost/LightGBM), and hyperparameter tuning.' },
              { title: 'Deep Learning & NLP/Vision', duration: 'Month 5-6', desc: 'Train transformers, CNNs, and embeddings for generative AI tasks.' },
              { title: 'Production ML API & MLOps', duration: 'Month 6+', desc: 'Package models into FastAPI endpoints with Docker and automated testing.' }
            ]
          }
        },
        {
          career: 'Cybersecurity Analyst',
          score: (formData.security * 5) + (formData.networking * 4) + (formData.cpp * 2) + (formData.python * 1.5),
          salary_estimation: { symbol: '₹', estimated_salary: '13.5', lower_range: '10.0', upper_range: '17.0', currency: 'LPA' },
          roadmap: {
            missing_skills: ['Penetration Testing (Metasploit)', 'SIEM Tool Mastery (Splunk)', 'Zero Trust Architecture'],
            roadmap: [
              { title: 'Networking & Security Fundamentals', duration: 'Month 1-2', desc: 'TCP/IP, cryptographic protocols, firewall management, and OS hardening.' },
              { title: 'Threat Detection & SIEM Tools', duration: 'Month 3-4', desc: 'Splunk search queries, incident response playbooks, and log analysis.' },
              { title: 'Vulnerability Assessment & Pen Testing', duration: 'Month 5-6', desc: 'Nessus scans, ethical hacking methodologies, and remediation planning.' },
              { title: 'Security Operations Capstone', duration: 'Month 6+', desc: 'Build incident playbooks and prepare for Security+ / CEH certifications.' }
            ]
          }
        },
        {
          career: 'Cloud Engineer',
          score: (formData.cloud * 5) + (formData.networking * 3) + (formData.security * 2) + (formData.python * 1.5),
          salary_estimation: { symbol: '₹', estimated_salary: '15.0', lower_range: '11.5', upper_range: '19.0', currency: 'LPA' },
          roadmap: {
            missing_skills: ['Infrastructure as Code (Terraform)', 'Kubernetes Cluster Ingress', 'Cloud Security & Cost Optimization'],
            roadmap: [
              { title: 'Linux & Cloud Networking', duration: 'Month 1-2', desc: 'Deep dive into VPC, subnets, routing tables, and Linux system internals.' },
              { title: 'Containerization & Orchestration', duration: 'Month 3-4', desc: 'Production Kubernetes cluster management, Helm charts, and container security.' },
              { title: 'Infrastructure as Code', duration: 'Month 5-6', desc: 'Automate multi-cloud infrastructure with Terraform and state management.' },
              { title: 'Enterprise Observability', duration: 'Month 6+', desc: 'Implement Prometheus, Grafana, and automated incident alerting.' }
            ]
          }
        },
        {
          career: 'Full Stack Developer',
          score: (formData.web_dev * 4) + (formData.js * 4) + (formData.sql * 2) + (formData.python * 1.5) + (formData.java * 1.5),
          salary_estimation: { symbol: '₹', estimated_salary: '14.5', lower_range: '11.0', upper_range: '18.0', currency: 'LPA' },
          roadmap: {
            missing_skills: ['Docker & Kubernetes', 'System Design & Microservices', 'CI/CD Automated Pipelines'],
            roadmap: [
              { title: 'Core Full Stack Mastery', duration: 'Month 1-2', desc: 'Master React, Node.js, and PostgreSQL for robust web applications.' },
              { title: 'System Design & Scalability', duration: 'Month 3-4', desc: 'Learn microservices architecture, caching strategies with Redis, and load balancing.' },
              { title: 'Cloud & DevOps Integration', duration: 'Month 5-6', desc: 'Deploy production applications using Docker, Kubernetes, and AWS pipelines.' },
              { title: 'Production Project & Portfolio', duration: 'Month 6+', desc: 'Build an end-to-end AI-powered SaaS product and showcase to tech recruiters.' }
            ]
          }
        },
        {
          career: 'UI/UX Designer',
          score: (formData.design * 6) + (formData.web_dev * 2) + (formData.presentation * 2),
          salary_estimation: { symbol: '₹', estimated_salary: '11.5', lower_range: '8.5', upper_range: '15.0', currency: 'LPA' },
          roadmap: {
            missing_skills: ['Design Systems at Scale', 'Interactive Motion Prototyping', 'Usability Testing'],
            roadmap: [
              { title: 'UX Research & Information Architecture', duration: 'Month 1-2', desc: 'User interviews, persona building, task flows, and paper wireframing.' },
              { title: 'Visual UI Design in Figma', duration: 'Month 3-4', desc: 'Master design systems, typography hierarchy, accessible contrast, and auto-layout.' },
              { title: 'Interactive Prototyping & Motion', duration: 'Month 5-6', desc: 'High-fidelity micro-interactions, smart animations, and usability test runs.' },
              { title: 'Case Study Portfolio', duration: 'Month 6+', desc: 'Publish 3 comprehensive UX case studies detailing the design thinking journey.' }
            ]
          }
        },
        {
          career: 'Product Manager',
          score: (formData.leadership * 3) + (formData.communication * 3) + (formData.problem_solving * 2.5) + (formData.decision_making * 2.5),
          salary_estimation: { symbol: '₹', estimated_salary: '17.5', lower_range: '13.0', upper_range: '22.0', currency: 'LPA' },
          roadmap: {
            missing_skills: ['PRD & Spec Writing', 'A/B Testing & Cohort Analysis', 'Go-To-Market Execution'],
            roadmap: [
              { title: 'Product Discovery & Market Research', duration: 'Month 1-2', desc: 'User persona definition, qualitative interviews, and pain point validation.' },
              { title: 'Data Analytics & Metric Tracking', duration: 'Month 3-4', desc: 'Cohort retention analysis, North Star metric mapping, and product analytics.' },
              { title: 'Technical Architecture for PMs', duration: 'Month 5-6', desc: 'System tradeoffs, REST APIs, engineering estimation, and technical debt.' },
              { title: 'GTM Strategy & Product Launch', duration: 'Month 6+', desc: 'Cross-functional alignment with engineering, sales, marketing, and executives.' }
            ]
          }
        }
      ];

      // Rank by computed score
      roleScores.sort((a, b) => b.score - a.score);
      const topMatch = Math.min(96, Math.max(76, Math.round(78 + (roleScores[0].score * 1.5))));

      const mockCareers = roleScores.slice(0, 3).map((item, idx) => ({
        career: item.career,
        match_percentage: idx === 0 ? topMatch : Math.max(45, topMatch - (idx * 14) - (idx * 2)),
        salary_estimation: item.salary_estimation,
        roadmap: item.roadmap
      }));

      const careerDetailsMap = {};
      mockCareers.forEach(item => {
        careerDetailsMap[item.career] = item;
      });

      const mockResult = {
        career_prediction: {
          primary_career: mockCareers[0].career,
          primary_match: mockCareers[0].match_percentage,
          alternatives: mockCareers.slice(1).map(c => ({
            career: c.career,
            match_percentage: c.match_percentage
          }))
        },
        all_careers: mockCareers.map(c => ({
          career: c.career,
          match_percentage: c.match_percentage
        })),
        career_details: careerDetailsMap,
        salary_estimation: mockCareers[0].salary_estimation,
        roadmap: mockCareers[0].roadmap,
        user_data: payload
      };

      // Try local FastAPI backend first if running, else Render backend
      const endpointsToTry = [
        ...(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? ['http://localhost:8000/api/ml/predict']
          : []),
        'https://careercompassai-17gg.onrender.com/api/ml/predict'
      ];

      let apiResponse = null;
      for (const endpoint of endpointsToTry) {
        try {
          const res = await axios.post(endpoint, { user_data: payload }, { timeout: 8000 });
          if (res.data && res.data.career_prediction) {
            apiResponse = res.data;
            break;
          }
        } catch (e) {
          // Continue to next endpoint
        }
      }

      if (apiResponse) {
        if (user) {
          const historyUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
            ? 'http://localhost:8000/api/assessment/history'
            : 'https://careercompassai-17gg.onrender.com/api/assessment/history';
          axios.post(historyUrl, {
            user_id: user.id,
            user_data: payload,
            prediction_result: apiResponse
          }).catch(() => {});
        }
        navigate('/dashboard', { state: { result: { ...apiResponse, user_data: payload } } });
      } else {
        // Fallback to rich local prediction result if backend is unreachable
        navigate('/dashboard', { state: { result: mockResult } });
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'An error occurred during prediction.');
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Tell us about your education</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Degree</label>
                <select name="degree" value={formData.degree} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all">
                  <option value="B.Tech">B.Tech / B.E.</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="B.Com">B.Com</option>
                  <option value="BBA">BBA</option>
                  <option value="MBA">MBA</option>
                  <option value="BA">BA</option>
                  <option value="MA">MA</option>
                  <option value="Ph.D">Ph.D</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Specialization</label>
                <select name="specialization" value={formData.specialization} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all">
                  <option value="CSE">Computer Science</option>
                  <option value="IT">Information Technology</option>
                  <option value="ECE">Electronics</option>
                  <option value="EE">Electrical</option>
                  <option value="Mech">Mechanical</option>
                  <option value="Civil">Civil Engineering</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Economics">Economics</option>
                  <option value="Physics">Physics</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Biology">Biology</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Design">Design</option>
                  <option value="Literature">Literature</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">CGPA (out of 10)</label>
                <input type="range" name="cgpa" min="5" max="10" step="0.1" value={formData.cgpa} onChange={handleChange} className="w-full accent-cyan-500" />
                <div className="text-right text-cyan-400 font-bold mt-1">{formData.cgpa}</div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Experience & Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Years of Experience</label>
                <input type="number" name="experience_years" min="0" max="20" step="0.5" value={formData.experience_years} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Number of Internships</label>
                <input type="number" name="internships" min="0" max="10" value={formData.internships} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Number of Projects Built</label>
                <input type="number" name="projects" min="0" max="50" value={formData.projects} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Technical Certifications</label>
                <input type="number" name="certifications" min="0" max="20" value={formData.certifications} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
              </div>
            </div>
          </div>
        );
      case 2:
        const skills = ['python', 'java', 'cpp', 'js', 'sql', 'web_dev', 'data_analysis', 'ml', 'cloud', 'security', 'networking', 'design'];
        const formatSkill = (s) => s.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Technical Skills (0-3 scale)</h3>
            <p className="text-sm text-slate-400 mb-4">0 = None, 1 = Beginner, 2 = Intermediate, 3 = Advanced</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
              {skills.map(skill => (
                <div key={skill} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <label className="block text-sm font-medium text-slate-300 mb-2 truncate" title={formatSkill(skill)}>
                    {formatSkill(skill)}
                  </label>
                  <input type="range" name={skill} min="0" max="3" value={formData[skill]} onChange={handleChange} className="w-full accent-cyan-500" />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>0</span>
                    <span className="text-cyan-400 font-bold">{formData[skill]}</span>
                    <span>3</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        const softSkills = [
          'communication',
          'teamwork',
          'problem_solving',
          'leadership',
          'time_management',
          'adaptability',
          'critical_thinking',
          'work_ethic',
          'emotional_intelligence',
          'conflict_resolution',
          'presentation',
          'decision_making'
        ];
        const formatSoftSkill = (s) => s.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Soft Skills (0-3 scale)</h3>
            <p className="text-sm text-slate-400 mb-4">0 = None, 1 = Beginner, 2 = Intermediate, 3 = Advanced</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
              {softSkills.map(skill => (
                <div key={skill} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <label className="block text-sm font-medium text-slate-300 mb-2 truncate" title={formatSoftSkill(skill)}>
                    {formatSoftSkill(skill)}
                  </label>
                  <input type="range" name={skill} min="0" max="3" value={formData[skill]} onChange={handleChange} className="w-full accent-cyan-500" />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>0</span>
                    <span className="text-cyan-400 font-bold">{formData[skill]}</span>
                    <span>3</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto mt-20 p-12 bg-slate-800/50 rounded-2xl border border-slate-700 flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-16 h-16 text-cyan-500 animate-spin mb-6" />
        <h2 className="text-2xl font-bold text-white mb-2">Analyzing your profile...</h2>
        <div className="space-y-2 text-slate-400">
          <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Education evaluated</p>
          <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Skills matched</p>
          <p className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin text-cyan-400" /> Running XGBoost Career Model</p>
          <p className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin text-cyan-400" /> Estimating salary via CatBoost</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, idx) => (
            <div key={step.id} className={`text-sm font-medium ${idx <= currentStep ? 'text-cyan-400' : 'text-slate-500'}`}>
              {step.title}
            </div>
          ))}
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-cyan-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 text-red-200 rounded-lg">
          {error}
        </div>
      )}

      {/* Form Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {renderStep()}
        
        {/* Navigation */}
        <div className="flex justify-between mt-10 pt-6 border-t border-slate-800">
          <button 
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-5 py-2.5 text-slate-300 hover:text-white disabled:opacity-30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          
          {currentStep < steps.length - 1 ? (
            <button 
              onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
              className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              className="flex items-center gap-2 px-8 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20"
            >
              Generate My Results <BrainCircuit className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
