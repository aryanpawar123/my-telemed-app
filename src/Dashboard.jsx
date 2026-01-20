import React, { useState } from 'react';
import { Users, Clock, Video, CheckCircle, Search, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // State for the calendar
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({ start: '2023-10-24', end: '2023-11-12' });

  // Helper to format dates for display
  const formatDate = (dateString) => {
    if(!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  };

  return (
    <div>
      <div className="header">
        <div>
          <h1>Welcome Samantha</h1>
          <p style={{ color: '#777', fontSize: '14px' }}>Welcome to Telemedicine App</p>
        </div>
        
        {/* FUNCTIONAL DATE PICKER BUTTON */}
        <div style={{ position: 'relative' }}>
            <div 
                onClick={() => setShowDatePicker(!showDatePicker)}
                style={{ background: 'white', padding: '8px 15px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}
            >
                <Calendar size={16} /> 
                {formatDate(dateRange.start)} to {formatDate(dateRange.end)} ▾
            </div>

            {/* POPUP CALENDAR */}
            {showDatePicker && (
                <div className="date-picker-popup">
                    <div>
                        <span className="date-label">Start Date</span>
                        <input 
                            type="date" 
                            className="input-field" 
                            value={dateRange.start}
                            onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                        />
                    </div>
                    <div>
                        <span className="date-label">End Date</span>
                        <input 
                            type="date" 
                            className="input-field" 
                            value={dateRange.end}
                            onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                        />
                    </div>
                    <button 
                        className="btn btn-primary" 
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        onClick={() => setShowDatePicker(false)}
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#FF5722' }}><Users size={20} /></div>
          <span style={{ fontSize: '13px', color: '#777' }}>Total Patients</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>1,245</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#FFC107' }}><Clock size={20} /></div>
          <span style={{ fontSize: '13px', color: '#777' }}>Waiting</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>354</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#2196F3' }}><Video size={20} /></div>
          <span style={{ fontSize: '13px', color: '#777' }}>In Consultation</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>1,245</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#4CAF50' }}><CheckCircle size={20} /></div>
          <span style={{ fontSize: '13px', color: '#777' }}>Completed</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>24</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ background: 'white', borderRadius: '30px', padding: '5px', display: 'flex', gap: '5px' }}>
            <button style={{ background: 'black', color: 'white', border: 'none', borderRadius: '20px', padding: '8px 20px', fontSize: '13px' }}>All</button>
            <button style={{ background: 'transparent', border: 'none', padding: '8px 20px', color: '#777', fontSize: '13px' }}>Waiting</button>
            <button style={{ background: 'transparent', border: 'none', padding: '8px 20px', color: '#777', fontSize: '13px' }}>Completed</button>
        </div>
        <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '10px', top: '10px', color: '#999' }} />
            <input type="text" placeholder="Search..." style={{ padding: '8px 10px 8px 35px', borderRadius: '20px', border: '1px solid #ddd', width: '250px', outline: 'none' }} />
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Date and Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>234446</td>
              <td style={{ fontWeight: '500' }}>Varun c</td>
              <td>+983 2424253</td>
              <td>liam.smith@gmail.com</td>
              <td>13 Jan 2024, 09:15</td>
              <td>
                <span 
                    className="status-link" 
                    onClick={() => navigate('/patient/234446')}
                >
                    View Records
                </span>
              </td>
            </tr>
             <tr>
              <td>234448</td>
              <td style={{ fontWeight: '500' }}>Olivia Davis</td>
              <td>+983 2424255</td>
              <td>olivia.davis@gmail.com</td>
              <td>13 Jan 2024, 10:30</td>
              <td><span className="status-link" onClick={() => navigate('/patient/234448')}>View Records</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;