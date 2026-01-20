import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Left Side - Image & Text */}
      <div style={{ 
        flex: 1, 
        position: 'relative', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '60px'
      }}>
        {/* Dark Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, color: 'white', maxWidth: '500px' }}>
            <h1 style={{ fontSize: '42px', marginBottom: '20px', lineHeight: '1.2' }}>About Sawsan Alakhras Foundation</h1>
            <p style={{ fontSize: '16px', lineHeight: '1.6', opacity: 0.9, marginBottom: '30px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <button className="btn" style={{ background: '#FF5722', color: 'white', border: 'none', padding: '12px 30px', fontSize: '16px', borderRadius: '5px' }}>
                Read More
            </button>
        </div>
        
        {/* Logo at top center of left panel (optional based on image) */}
        <div style={{ position: 'absolute', top: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
             <div style={{ width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '30px' }}>🌸</span>
             </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F7FB' }}>
        <div style={{ width: '450px', background: 'white', padding: '50px', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Welcome to Sawsan Telemedicine App</h2>
            <p style={{ color: '#666', marginBottom: '40px', fontSize: '14px' }}>Enter Email Id and Password to Continue</p>

            <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600' }}>Email</label>
                <input 
                    type="email" 
                    placeholder="Enter Email" 
                    style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} 
                />
            </div>

            <div style={{ marginBottom: '30px', position: 'relative' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600' }}>Password</label>
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter Password" 
                    style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} 
                />
                <div 
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '15px', top: '42px', cursor: 'pointer', color: '#999' }}
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
            </div>

            <button 
                onClick={() => navigate('/dashboard')}
                style={{ width: '100%', padding: '15px', background: '#FF5722', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
            >
                Login
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;