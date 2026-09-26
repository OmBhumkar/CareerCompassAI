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
  // LOGIN SYSTEM COMMENTED OUT — Default active guest user so all app features work without login
  const [user, setUser] = useState({ id: 1, name: 'Guest User', email: 'user@gmail.com' });
  const [loading, setLoading] = useState(false);

  /*
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);
  */

  const login = async (email, password) => {
    // LOGIN SYSTEM COMMENTED OUT — Returns instant success without backend check
    const mockUser = { id: 1, name: 'Guest User', email: email || 'user@gmail.com' };
    setUser(mockUser);
    return { access_token: 'disabled-auth-token', user: mockUser };
  };

  const register = async (name, email, password) => {
    // LOGIN SYSTEM COMMENTED OUT — Returns instant success without backend check
    const mockUser = { id: 1, name: name || 'Guest User', email: email || 'user@gmail.com' };
    setUser(mockUser);
    return { access_token: 'disabled-auth-token', user: mockUser };
  };

  const logout = () => {
    // setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
