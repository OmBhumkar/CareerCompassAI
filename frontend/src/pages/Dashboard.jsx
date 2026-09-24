import { useLocation, Navigate, Link } from 'react-router-dom';
import { Target, TrendingUp, AlertCircle, CheckCircle, BookOpen, Briefcase, Zap, Map } from 'lucide-react';
import { useContext } from 'react';
import AuthContext from '../services/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return <Navigate to="/assessment" />;
  }

  const { career_prediction, salary_estimation, roadmap } = result;

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Career Intelligence Report</h1>
          <p className="text-slate-400">Based on our ML analysis of your profile, here is your customized roadmap.</p>
        </div>
        <Link to="/assessment" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors text-sm font-medium self-start md:self-auto">
          Retake Assessment
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Career Prediction Card */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-cyan-900/30 rounded-xl text-cyan-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Career Prediction Match</h2>
          </div>
          
          <div className="mb-8">
            <p className="text-sm text-slate-400 mb-1">Primary Match</p>
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              {career_prediction.primary_career}
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" 
                  style={{ width: `${career_prediction.primary_match}%` }}
                />
              </div>
              <span className="font-bold text-cyan-400">{career_prediction.primary_match}% Match</span>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <p className="text-sm font-medium text-slate-400 mb-4">Alternative Suitable Careers</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {career_prediction.alternatives.map((alt, idx) => (
                <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                  <span className="font-medium text-slate-200">{alt.career}</span>
                  <span className="text-sm text-slate-400 bg-slate-900 px-2 py-1 rounded-md border border-slate-700">{alt.match_percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Salary Estimation Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-900/30 rounded-xl text-green-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Salary Estimate</h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center text-center mb-6">
            <p className="text-sm text-slate-400 mb-2">Estimated Current Market Value</p>
            <h3 className="text-5xl font-black text-white mb-2">
              {salary_estimation.symbol}{salary_estimation.estimated_salary} <span className="text-2xl text-slate-500 font-medium">{salary_estimation.currency}</span>
            </h3>
            <p className="text-green-400 font-medium bg-green-900/20 px-3 py-1 rounded-full border border-green-800/50 inline-block">
              Range: {salary_estimation.symbol}{salary_estimation.lower_range} - {salary_estimation.upper_range} {salary_estimation.currency}
            </p>
          </div>

          <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-800/30">
            <div className="flex items-start gap-3 text-sm">
              <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-blue-200/80 leading-relaxed">
                This is a model-based estimate derived from your skills and experience. Completing your roadmap can help you reach your target package.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Missing Skills Section */}
      {roadmap.missing_skills && roadmap.missing_skills.length > 0 && (
        <div className="bg-orange-900/20 border border-orange-800/30 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" /> High Priority Skill Gaps
          </h3>
          <div className="flex flex-wrap gap-3">
            {roadmap.missing_skills.map((skill, idx) => (
              <span key={idx} className="bg-orange-500/10 text-orange-300 border border-orange-500/20 px-4 py-2 rounded-lg font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Roadmap Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-purple-900/30 rounded-xl text-purple-400">
            <Map className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Personalized Career Roadmap</h2>
            <p className="text-slate-400">Your step-by-step path to becoming a {career_prediction.primary_career}</p>
          </div>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-8">
          {roadmap.roadmap.map((step, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-slate-400 text-sm font-bold z-10">
                {idx + 1}
              </div>
              <div className="bg-slate-800/50 hover:bg-slate-800 transition-colors rounded-xl border border-slate-700 p-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    {idx === roadmap.roadmap.length - 1 ? <Briefcase className="w-5 h-5 text-cyan-400" /> : <BookOpen className="w-5 h-5 text-cyan-400" />}
                    {step.title}
                  </h4>
                  <span className="text-xs font-medium bg-slate-900 text-cyan-400 px-3 py-1 rounded-full border border-slate-700 self-start">
                    {step.duration}
                  </span>
                </div>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;

// Needs a Map icon import fix, Map is used but not imported
