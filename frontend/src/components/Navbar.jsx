import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../services/AuthContext';
import { Compass } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Compass className="w-8 h-8 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-bold text-xl tracking-tight text-white">
              Career <span className="text-cyan-400">Compass</span> AI
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link to="/dashboard" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Dashboard</Link>
                <Link to="/assessment" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">New Assessment</Link>
                <div className="h-6 w-px bg-slate-700 mx-2"></div>
                <span className="text-slate-400 text-sm hidden sm:block">{user.name}</span>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Log in</Link>
                <Link to="/register" className="px-4 py-2 text-sm font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
