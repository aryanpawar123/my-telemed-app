import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (email === 'admin@sawsan.com' && password === '123') {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try: admin@sawsan.com / 123');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80")' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div style={{ position: 'relative', zIndex: 2, color: 'white', maxWidth: '500px' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>About Sawsan Alakhras Foundation</h1>
            <p style={{ opacity: 0.9 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Welcome Back</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>Enter Email Id and Password</p>
            {error && <div style={{ background: '#FFEBEE', color: '#D32F2F', padding: '10px', borderRadius: '5px', marginBottom: '20px', display: 'flex', gap: '8px' }}><AlertCircle size={16} /> {error}</div>}
            
            <div style={{ marginBottom: '20px' }}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@sawsan.com" className="input-field" />
            </div>
            <div style={{ marginBottom: '30px', position: 'relative' }}>
                <label>Password</label>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="123" className="input-field" />
                <div onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '15px', top: '35px', cursor: 'pointer', color: '#999' }}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</div>
            </div>
            <button onClick={handleLogin} className="btn btn-primary" style={{ width: '100%' }}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;