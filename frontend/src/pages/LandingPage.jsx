import { Link } from 'react-router-dom';
import { BrainCircuit, LineChart, Map, Target } from 'lucide-react';
import { useContext } from 'react';
import AuthContext from '../services/AuthContext';

const LandingPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-sm font-medium mb-8 border border-cyan-800/50">
          <BrainCircuit className="w-4 h-4" />
          <span>AI-Powered Career Intelligence</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          Discover Your Career.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Build Your Future.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Stop guessing your next career move. Answer a few questions and let our ML models predict your ideal role, estimate your salary, and generate a personalized roadmap to get there.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link to={user ? "/assessment" : "/register"} className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Start Career Assessment
          </Link>
          <a href="#features" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors border border-slate-700">
            Explore How It Works
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How Career Compass Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Our advanced models analyze your education, skills, and preferences to provide actionable career intelligence.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">XGBoost Career Prediction</h3>
            <p className="text-slate-400">Our classification model analyzes 20+ data points to predict the technology career that perfectly matches your profile.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center mb-6 text-green-400">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">CatBoost Salary Estimation</h3>
            <p className="text-slate-400">Get a realistic, data-driven salary estimate based on your current skills, experience, and the current market.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6 text-purple-400">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Roadmaps</h3>
            <p className="text-slate-400">Bridge the gap between where you are and your target salary with a step-by-step learning roadmap.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
