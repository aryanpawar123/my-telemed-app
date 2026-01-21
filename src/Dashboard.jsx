import React from 'react';
import { Users, Clock, Video, CheckCircle, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePatients } from './PatientContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { patients } = usePatients();

  return (
    <div>
      <div className="header">
        <div><h1>Welcome Samantha</h1><p style={{ color: '#777' }}>Welcome to Telemedicine App</p></div>
        <div style={{ background: 'white', padding: '8px 15px', borderRadius: '6px', border: '1px solid #ddd' }}>📅 Today</div>
      </div>

      <div className="stats-grid">
        <div className="card" style={{display:'flex', gap:'15px', alignItems:'center'}}>
            <div style={{background:'#FF5722', padding:'10px', borderRadius:'50%', color:'white'}}><Users /></div>
            <div><div style={{fontSize:'24px', fontWeight:'bold'}}>{patients.length}</div><div style={{fontSize:'12px', color:'#777'}}>Total Patients</div></div>
        </div>
        <div className="card" style={{display:'flex', gap:'15px', alignItems:'center'}}>
            <div style={{background:'#FFC107', padding:'10px', borderRadius:'50%', color:'white'}}><Clock /></div>
            <div><div style={{fontSize:'24px', fontWeight:'bold'}}>12</div><div style={{fontSize:'12px', color:'#777'}}>Waiting</div></div>
        </div>
        <div className="card" style={{display:'flex', gap:'15px', alignItems:'center'}}>
            <div style={{background:'#2196F3', padding:'10px', borderRadius:'50%', color:'white'}}><Video /></div>
            <div><div style={{fontSize:'24px', fontWeight:'bold'}}>5</div><div style={{fontSize:'12px', color:'#777'}}>In Consultation</div></div>
        </div>
      </div>

      <div className="card">
        <h3>Patient List</h3>
        <div style={{overflowX: 'auto'}}>
            <table style={{width:'100%', borderCollapse:'collapse', minWidth:'600px'}}>
            <thead>
                <tr style={{borderBottom:'1px solid #eee', textAlign:'left'}}>
                <th style={{padding:'15px'}}>ID</th><th>Name</th><th>Phone</th><th>Email</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((p, i) => (
                <tr key={i} style={{borderBottom:'1px solid #eee'}}>
                    <td style={{padding:'15px'}}>{p.id}</td>
                    <td style={{fontWeight:'bold'}}>{p.name}</td>
                    <td>{p.phone}</td>
                    <td>{p.email}</td>
                    <td><span style={{color:'#2196F3', cursor:'pointer'}} onClick={() => navigate(`/patient/${p.id}`)}>View Records</span></td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;