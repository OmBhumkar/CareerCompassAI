import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Assessment from './pages/Assessment';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import AuthContext, { AuthProvider } from './services/AuthContext';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div className="h-screen flex items-center justify-center text-white">Loading...</div>;
  const hasToken = localStorage.getItem('token');
  return (user || hasToken) ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><Login /></main>} />
              <Route path="/register" element={<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><Register /></main>} />
              <Route path="/assessment" element={<PrivateRoute><main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><Assessment /></main></PrivateRoute>} />
              <Route path="/dashboard" element={<PrivateRoute><main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><Dashboard /></main></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
