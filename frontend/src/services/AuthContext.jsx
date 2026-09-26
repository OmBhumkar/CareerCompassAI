import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// ─── Local hardcoded account (works fully offline / without backend) ───────────
const LOCAL_ACCOUNT = {
  name:     'user',
  email:    'user@gmail.com',
  password: 'user1234',
};
// ──────────────────────────────────────────────────────────────────────────────

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // ── Local-first authentication ──────────────────────────────────────────
    if (
      email.trim().toLowerCase() === LOCAL_ACCOUNT.email.toLowerCase() &&
      password === LOCAL_ACCOUNT.password
    ) {
      const mockUser  = { name: LOCAL_ACCOUNT.name, email: LOCAL_ACCOUNT.email };
      const mockToken = 'local-auth-token';
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
      setUser(mockUser);
      return { access_token: mockToken, user: mockUser };
    }
    // ── Fallback: try the real backend for other accounts ───────────────────
    const res = await axios.post('https://careercompassai-17gg.onrender.com/api/auth/login', { email, password });
    localStorage.setItem('token', res.data.access_token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
    setUser(res.data.user);
    return res.data;
  };

  const register = async (name, email, password) => {
    const res = await axios.post('https://careercompassai-17gg.onrender.com/api/auth/register', { name, email, password });
    localStorage.setItem('token', res.data.access_token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
    setUser(res.data.user);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
