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
    const cleanEmail = email.trim().toLowerCase();

    // ── Instant Frontend Login (Bypasses Backend for user@gmail.com) ─────────
    if (cleanEmail === 'user@gmail.com' && password === 'user1234') {
      const mockUser = { id: 999, name: 'Demo User', email: 'user@gmail.com' };
      const mockToken = 'local-demo-token-999';
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
      setUser(mockUser);
      return { access_token: mockToken, user: mockUser };
    }

    // ── Real Backend Login (For all other email IDs) ─────────────────────────
    const endpointsToTry = [
      ...(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? ['http://localhost:8000/api/auth/login']
        : []),
      'https://careercompassai-17gg.onrender.com/api/auth/login'
    ];

    let lastError = null;
    for (const url of endpointsToTry) {
      try {
        const res = await axios.post(url, { email, password });
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
        setUser(res.data.user);
        return res.data;
      } catch (err) {
        lastError = err;
        // If it's a 400 or 401 response from the server, don't try fallback endpoint
        if (err.response && (err.response.status === 400 || err.response.status === 401)) {
          throw err;
        }
      }
    }
    throw lastError;
  };

  const register = async (name, email, password) => {
    const cleanEmail = email.trim().toLowerCase();

    // ── Instant Frontend Register (Bypasses Backend for user@gmail.com) ─────────
    if (cleanEmail === 'user@gmail.com') {
      const mockUser = { id: 999, name: name || 'Demo User', email: 'user@gmail.com' };
      const mockToken = 'local-demo-token-999';
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
      setUser(mockUser);
      return { access_token: mockToken, user: mockUser };
    }

    const endpointsToTry = [
      ...(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? ['http://localhost:8000/api/auth/register']
        : []),
      'https://careercompassai-17gg.onrender.com/api/auth/register'
    ];

    let lastError = null;
    for (const url of endpointsToTry) {
      try {
        const res = await axios.post(url, { name, email, password });
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
        setUser(res.data.user);
        return res.data;
      } catch (err) {
        lastError = err;
        if (err.response && (err.response.status === 400 || err.response.status === 401)) {
          throw err;
        }
      }
    }
    throw lastError;
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
