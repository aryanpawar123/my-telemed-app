import React from 'react';
import { ArrowLeft, FileText, FileSpreadsheet, File } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PatientDetails = () => {
  const navigate = useNavigate();

  // Dummy data for the history list on the right
  const history = [
    { date: '12 Dec 2025, 12:45 PM', doctor: 'Amin Sheikh', file: 'Consultation Report.PDF', type: 'pdf', color: '#D50000' },
    { date: '13 Dec 2025, 1:15 PM', doctor: 'Sarah Lee', file: 'Follow-Up Notes.DOCX', type: 'doc', color: '#2196F3' },
    { date: '14 Dec 2025, 3:30 PM', doctor: 'John Doe', file: 'Initial Assessment.XLSX', type: 'xls', color: '#4CAF50' },
    { date: '15 Dec 2025, 11:00 AM', doctor: 'Emily Zhang', file: 'Treatment Plan.PPTX', type: 'ppt', color: '#FF5722' },
    { date: '16 Dec 2025, 2:00 PM', doctor: 'Robert Chen', file: 'Case Study Report.DOC', type: 'doc', color: '#2196F3' },
  ];

  return (
    <div>
      {/* Header with Back Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
        <button 
            onClick={() => navigate('/dashboard')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '18px', fontWeight: 'bold' }}
        >
            <ArrowLeft size={24} style={{ marginRight: '10px' }} /> Patient Details
        </button>
      </div>

      <div className="split-layout">
        {/* LEFT COLUMN: Basic Information */}
        <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Basic Information</h3>
            
            <div style={{ marginBottom: '15px' }}>
                <label>Patient Id</label>
                <input className="input-field" defaultValue="131441" readOnly />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>Name*</label>
                <input className="input-field" defaultValue="Varun c" readOnly />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>Email Id</label>
                <input className="input-field" defaultValue="xyz@gmail.com" readOnly />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>Phone Number</label>
                <input className="input-field" defaultValue="xyz@gmail.com" readOnly />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>Date of Birth*</label>
                <div style={{ position: 'relative' }}>
                    <input className="input-field" defaultValue="24/242" readOnly />
                    {/* Calendar icon simulated */}
                    <span style={{ position: 'absolute', right: '10px', top: '12px' }}>📅</span>
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN: Consultation History */}
        <div>
            <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Consultation History</h3>
            
            {history.map((item, index) => (
                <div key={index} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', marginBottom: '10px' }}>
                    <div>
                        <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.date}</div>
                        <div style={{ color: '#777', fontSize: '13px', marginTop: '4px' }}>Consulted by {item.doctor}</div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: item.color, border: `1px solid ${item.color}30`, padding: '5px 10px', borderRadius: '5px', background: `${item.color}05`, fontSize: '13px', cursor: 'pointer' }}>
                        <FileText size={16} /> {item.file}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;