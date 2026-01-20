import React from 'react';
import { LayoutDashboard, Video, Settings, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Function to handle logout
  const handleLogout = () => {
    // You can add logic here to clear user tokens if needed
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="brand">
        <div style={{ width: '30px', height: '30px', background: '#FF5722', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>🌸</div>
        Sawsan Telemed
      </div>
      
      <div style={{ flex: 1 }}>
        <div 
            className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}
            onClick={() => navigate('/dashboard')}
        >
            <LayoutDashboard size={20} /> Dashboard
        </div>
        
        <div 
            className={`nav-item ${isActive('/consultation') ? 'active' : ''}`}
            onClick={() => navigate('/consultation')}
            style={isActive('/consultation') ? { background: '#FFF3E0', color: '#FF5722' } : {}}
        >
            <Video size={20} /> Consultation
        </div>

         <div className="nav-item">
            <Settings size={20} /> Settings
        </div>
      </div>

      <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <div className="nav-item" style={{ color: '#D50000' }} onClick={handleLogout}>
          <LogOut size={20} /> Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;