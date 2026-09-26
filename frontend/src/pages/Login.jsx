import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../services/AuthContext';
import { Compass, Loader2 } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setStatusMsg('');

    try {
      await login(email, password);
      // login() returns instantly for the local account — no backend needed
      navigate('/assessment');
    } catch (err) {
      if (!err.response) {
        // Network / server-cold-start — retry once after a short wait
        setStatusMsg('Server is waking up… retrying in 35 seconds. Please wait.');
        await new Promise((res) => setTimeout(res, 35000));
        setStatusMsg('Retrying…');
        try {
          await login(email, password);
          navigate('/assessment');
          return;
        } catch (retryErr) {
          setError(
            retryErr.response?.data?.detail ||
            'Server unavailable. Please try again in a moment.'
          );
        }
      } else {
        setError(err.response?.data?.detail || 'Login failed. Please check your credentials.');
      }
      setLoading(false);
      setStatusMsg('');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Compass className="w-12 h-12 text-cyan-400 mb-4" />
          <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          <p className="text-slate-400 text-sm mt-1">Log in to continue your career journey</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 text-red-200 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          
          {statusMsg && (
            <p className="text-cyan-300 text-xs text-center mt-2 animate-pulse">{statusMsg}</p>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center mt-6 disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                {statusMsg ? 'Please wait...' : 'Logging in...'}
              </span>
            ) : 'Log In'}
          </button>
        </form>
        
        <p className="text-center text-slate-400 text-sm mt-6">
          Don't have an account? <Link to="/register" className="text-cyan-400 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
