import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../services/AuthContext';
import { Loader2, ArrowRight, ArrowLeft, CheckCircle2, BrainCircuit } from 'lucide-react';

const steps = [
  { id: 'education', title: 'Education' },
  { id: 'experience', title: 'Experience & Projects' },
  { id: 'skills', title: 'Technical Skills' },
  { id: 'goals', title: 'Goals' }
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
    target_salary: 10,
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
      ) * 5; // Rough heuristic for model input

      const payload = {
        ...formData,
        technical_score
      };

      const res = await axios.post('http://localhost:8000/api/ml/predict', { user_data: payload });
      
      // Save to history
      if (user) {
        await axios.post('http://localhost:8000/api/assessment/history', {
          user_id: user.id,
          user_data: payload,
          prediction_result: res.data
        });
      }

      // Navigate to dashboard with results
      navigate('/dashboard', { state: { result: res.data } });
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
        const formatSkill = (s) => s.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
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
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Your Career Goals</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Target Salary (LPA)</label>
                <input type="range" name="target_salary" min="3" max="50" step="1" value={formData.target_salary} onChange={handleChange} className="w-full accent-cyan-500" />
                <div className="text-right text-cyan-400 font-bold mt-1">₹{formData.target_salary} LPA</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Timeline to reach goal</label>
                <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none">
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="3+ years">3+ years</option>
                </select>
              </div>
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
