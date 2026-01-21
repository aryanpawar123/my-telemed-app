import React from 'react';
import { ArrowLeft, FileText, User } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePatients } from './PatientContext';

const PatientDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { patients } = usePatients();
  const patient = patients.find(p => p.id === id);

  if (!patient) return <div style={{padding:'40px'}}><h2>Not Found</h2><button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Home</button></div>;

  return (
    <div>
      <div style={{display:'flex', gap:'10px', marginBottom:'20px', alignItems:'center', cursor:'pointer'}} onClick={() => navigate('/dashboard')}><ArrowLeft /> <strong>Back to Dashboard</strong></div>
      <div className="split-layout">
        <div className="card">
            <h3>Basic Info</h3>
            <div style={{marginBottom:'10px'}}><label>ID</label><input value={patient.id} readOnly className="input-field"/></div>
            <div style={{marginBottom:'10px'}}><label>Name</label><input value={patient.name} readOnly className="input-field"/></div>
            <div style={{marginBottom:'10px'}}><label>Email</label><input value={patient.email} readOnly className="input-field"/></div>
            <div style={{marginBottom:'10px'}}><label>Phone</label><input value={patient.phone} readOnly className="input-field"/></div>
            <div style={{padding:'10px', background:'#E8F5E9', color:'green', borderRadius:'5px', textAlign:'center', fontWeight:'bold'}}>{patient.status}</div>
        </div>
        <div className="card">
            <h3>History</h3>
            <div style={{padding:'15px', border:'1px solid #eee', borderRadius:'8px', display:'flex', justifyContent:'space-between'}}>
                <div><strong>{patient.date || 'Today'}</strong><div style={{fontSize:'12px', color:'#777'}}>Consultation Record</div></div>
                <div style={{color:'#D50000', display:'flex', alignItems:'center', gap:'5px'}}><FileText size={16}/> PDF</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;