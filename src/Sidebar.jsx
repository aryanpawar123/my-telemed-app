import React, { useState } from 'react';
import { LayoutDashboard, Video, Settings, LogOut, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24}/> : <Menu size={24}/>}</button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="brand">
          <div style={{ width: '30px', height: '30px', background: '#FF5722', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>🌸</div>
          Sawsan Telemed
        </div>
        <div className="nav-group">
          <div className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`} onClick={() => handleNav('/dashboard')}><LayoutDashboard size={20} /> Dashboard</div>
          <div className={`nav-item ${isActive('/consultation') ? 'active' : ''}`} onClick={() => handleNav('/consultation')} style={isActive('/consultation') ? { background: '#FFF3E0', color: '#FF5722' } : {}}><Video size={20} /> Consultation</div>
          <div className="nav-item"><Settings size={20} /> Settings</div>
          <div className="nav-item" style={{ color: '#D50000', marginTop: 'auto' }} onClick={() => navigate('/')}><LogOut size={20} /> Logout</div>
        </div>
      </div>
      {isOpen && <div onClick={() => setIsOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 900 }} />}
    </>
  );
};

export default Sidebar;