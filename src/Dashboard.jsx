import React, { useState } from 'react';
import { Users, Clock, Video, CheckCircle, Search, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePatients } from './PatientContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { patients } = usePatients();
  
  // Default range covers the dummy data dates
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({ start: '2023-10-01', end: '2023-12-31' });

  // FILTER LOGIC: Only show patients within the selected range
  const filteredPatients = patients.filter(p => {
    if (!p.date) return true; // Show if no date
    return p.date >= dateRange.start && p.date <= dateRange.end;
  });

  const formatDate = (dateString) => {
    if(!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  };

  return (
    <div>
      <div className="header">
        <div><h1>Welcome Samantha</h1><p style={{ color: '#777' }}>Welcome to Telemedicine App</p></div>
        
        {/* Date Filter Button */}
        <div style={{ position: 'relative' }}>
            <div 
                onClick={() => setShowDatePicker(!showDatePicker)}
                style={{ background: 'white', padding: '8px 15px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}
            >
                <Calendar size={16} /> 
                {formatDate(dateRange.start)} to {formatDate(dateRange.end)} ▾
            </div>

            {/* Popup */}
            {showDatePicker && (
                <div className="date-picker-popup">
                    <div><span className="date-label">Start Date</span><input type="date" className="input-field" value={dateRange.start} onChange={(e) => setDateRange({...dateRange, start: e.target.value})}/></div>
                    <div><span className="date-label">End Date</span><input type="date" className="input-field" value={dateRange.end} onChange={(e) => setDateRange({...dateRange, end: e.target.value})}/></div>
                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '5px' }} onClick={() => setShowDatePicker(false)}>Apply Filter</button>
                </div>
            )}
        </div>
      </div>

      {/* Stats Cards (Now dynamic based on filtered results) */}
      <div className="stats-grid">
        <div className="card" style={{display:'flex', gap:'15px', alignItems:'center'}}>
            <div style={{background:'#FF5722', padding:'10px', borderRadius:'50%', color:'white'}}><Users /></div>
            <div><div style={{fontSize:'24px', fontWeight:'bold'}}>{filteredPatients.length}</div><div style={{fontSize:'12px', color:'#777'}}>Total Patients</div></div>
        </div>
        <div className="card" style={{display:'flex', gap:'15px', alignItems:'center'}}>
            <div style={{background:'#FFC107', padding:'10px', borderRadius:'50%', color:'white'}}><Clock /></div>
            <div><div style={{fontSize:'24px', fontWeight:'bold'}}>{filteredPatients.filter(p=>p.status==='Waiting').length}</div><div style={{fontSize:'12px', color:'#777'}}>Waiting</div></div>
        </div>
        <div className="card" style={{display:'flex', gap:'15px', alignItems:'center'}}>
            <div style={{background:'#2196F3', padding:'10px', borderRadius:'50%', color:'white'}}><Video /></div>
            <div><div style={{fontSize:'24px', fontWeight:'bold'}}>{filteredPatients.filter(p=>p.status==='In Consultation').length}</div><div style={{fontSize:'12px', color:'#777'}}>In Consultation</div></div>
        </div>
        <div className="card" style={{display:'flex', gap:'15px', alignItems:'center'}}>
            <div style={{background:'#4CAF50', padding:'10px', borderRadius:'50%', color:'white'}}><CheckCircle /></div>
            <div><div style={{fontSize:'24px', fontWeight:'bold'}}>{filteredPatients.filter(p=>p.status==='Completed').length}</div><div style={{fontSize:'12px', color:'#777'}}>Completed</div></div>
        </div>
      </div>

      <div className="card">
        <h3>Patient List</h3>
        <div className="table-container">
            <table>
            <thead>
                <tr style={{borderBottom:'1px solid #eee', textAlign:'left'}}>
                <th>ID</th><th>Name</th><th>Phone</th><th>Email</th><th>Date</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredPatients.length > 0 ? filteredPatients.map((p, i) => (
                <tr key={i} style={{borderBottom:'1px solid #eee'}}>
                    <td style={{padding:'15px'}}>{p.id}</td>
                    <td style={{fontWeight:'bold'}}>{p.name}</td>
                    <td>{p.phone}</td>
                    <td>{p.email}</td>
                    <td>{p.date}</td>
                    <td><span style={{color:'#2196F3', cursor:'pointer'}} onClick={() => navigate(`/patient/${p.id}`)}>View Records</span></td>
                </tr>
                )) : <tr><td colSpan="6" style={{padding:'20px', textAlign:'center', color:'#777'}}>No records found for this date range.</td></tr>}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;