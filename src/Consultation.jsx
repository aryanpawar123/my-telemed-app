import React, { useState } from 'react';
import { FileText, Clock, Video, CheckCircle, Mic, Monitor, Wifi } from 'lucide-react';

const Consultation = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // --- Step 1: Patient Intake Form ---
  const Step1 = () => {
    // Local state for the toggle buttons
    const [chestPain, setChestPain] = useState('No');
    const [bleeding, setBleeding] = useState('No');
    const [stroke, setStroke] = useState('No');

    return (
        <div className="card">
        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px' }}>1. Patient Information</h3>
        
        <div className="form-grid">
            <div><label>Patient Id</label><input className="input-field" placeholder="Enter" /></div>
            <div><label>Phone Number *</label><input className="input-field" placeholder="Enter" /></div>
        </div>
        
        <div className="form-grid-3">
            <div><label>Name*</label><input className="input-field" defaultValue="Varun c" /></div>
            <div><label>Email Id</label><input className="input-field" defaultValue="xyz@gmail.com" /></div>
            <div><label>Age*</label><input className="input-field" defaultValue="23" /></div>
        </div>

        <div style={{ marginBottom: '20px' }}>
            <label>Reason for Visit *</label>
            <textarea className="input-field" rows="3" placeholder="Enter reason"></textarea>
        </div>

        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px', marginTop: '40px' }}>2. Vital Signs</h3>
        <div className="form-grid-3">
            <div><label>BP*</label><input className="input-field" placeholder="Enter" /></div>
            <div><label>Temperature (Celsius)</label><input className="input-field" placeholder="Enter" /></div>
            <div><label>Pulse*</label><input className="input-field" placeholder="Enter" /></div>
        </div>

        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px', marginTop: '40px' }}>3. Screening</h3>
        
        {/* Screening Question 1 */}
        <div style={{ background: '#F8F9FA', padding: '15px', borderRadius: '8px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Experiencing severe chest pain or difficulty breathing?</span>
            <div className="toggle-group">
                <button 
                    className={`toggle-btn ${chestPain === 'No' ? 'active' : ''}`} 
                    onClick={() => setChestPain('No')}>No</button>
                <button 
                    className={`toggle-btn ${chestPain === 'Yes' ? 'active' : ''}`} 
                    onClick={() => setChestPain('Yes')}>Yes</button>
            </div>
        </div>

        {/* Screening Question 2 */}
        <div style={{ background: '#F8F9FA', padding: '15px', borderRadius: '8px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Experiencing severe bleeding or trauma?</span>
            <div className="toggle-group">
                <button 
                    className={`toggle-btn ${bleeding === 'No' ? 'active' : ''}`} 
                    onClick={() => setBleeding('No')}>No</button>
                <button 
                    className={`toggle-btn ${bleeding === 'Yes' ? 'active' : ''}`} 
                    onClick={() => setBleeding('Yes')}>Yes</button>
            </div>
        </div>

         {/* Screening Question 3 */}
         <div style={{ background: '#F8F9FA', padding: '15px', borderRadius: '8px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Showing signs of stroke or heart attack?</span>
            <div className="toggle-group">
                <button 
                    className={`toggle-btn ${stroke === 'No' ? 'active' : ''}`} 
                    onClick={() => setStroke('No')}>No</button>
                <button 
                    className={`toggle-btn ${stroke === 'Yes' ? 'active' : ''}`} 
                    onClick={() => setStroke('Yes')}>Yes</button>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
            <button className="btn btn-primary" onClick={() => setStep(2)}>Proceed</button>
        </div>
        </div>
    );
  };

  // --- Step 2: Waiting Room ---
  const Step2 = () => (
    <div>
       <div className="card">
        <div className="form-grid">
            <div style={{ background: '#E8F5E9', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Monitor size={20} color="green"/> <div><strong>Fixed Device</strong><div style={{fontSize: '12px'}}>Dedicated laptop</div></div></div>
                <span style={{background: '#4CAF50', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '12px'}}>Connected</span>
            </div>
            <div style={{ background: '#E8F5E9', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Wifi size={20} color="green"/> <div><strong>Stable Internet</strong><div style={{fontSize: '12px'}}>High speed connection</div></div></div>
                <span style={{background: '#4CAF50', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '12px'}}>250 Mbps</span>
            </div>
             <div style={{ background: '#FFEBEE', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Mic size={20} color="red"/> <div><strong>Audio System</strong><div style={{fontSize: '12px'}}>Check mic</div></div></div>
                <span style={{background: '#F44336', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '12px'}}>Not Ready</span>
            </div>
        </div>
       </div>

       <div className="card" style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F3E5F5' }}>
            <div style={{ width: '60px', height: '60px', border: '5px solid #E1BEE7', borderTopColor: '#7B1FA2', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <h2 style={{ marginTop: '20px' }}>Patient Ready</h2>
            <p>All systems operational. Waiting for doctor...</p>
            <button className="btn btn-primary" style={{marginTop: '20px'}} onClick={() => setStep(3)}>Start Consultation</button>
       </div>
    </div>
  );

  // --- Step 3: Video Call ---
  const Step3 = () => (
    <div style={{ display: 'flex', gap: '20px', height: '80vh' }}>
        {/* Left: Video */}
        <div style={{ flex: 3, position: 'relative', background: 'black', borderRadius: '12px', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Patient" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            
            {/* Controls Overlay */}
            <div style={{ position: 'absolute', bottom: '30px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: 'none', color: 'white', cursor: 'pointer' }}><Mic /></button>
                <button style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: 'none', color: 'white', cursor: 'pointer' }}><Video /></button>
                <button style={{ padding: '0 30px', borderRadius: '30px', background: '#D50000', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setStep(4)}>End Call</button>
            </div>
        </div>

        {/* Right: Quick Notes & Info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card">
                <h3>Patient Details</h3>
                <div style={{ fontSize: '14px', lineHeight: '2' }}>
                    <div><strong>ID:</strong> 131441</div>
                    <div><strong>Name:</strong> Varun c</div>
                    <div><strong>Age:</strong> 23</div>
                </div>
            </div>
            <div className="card" style={{ flex: 1 }}>
                <h3>Quick Notes</h3>
                <textarea className="input-field" style={{ height: '100%', resize: 'none' }} placeholder="Type notes here..."></textarea>
            </div>
        </div>
    </div>
  );

  // --- Step 4: Clinical Notes ---
  const Step4 = () => (
    <div className="card">
        <div style={{ background: '#E8F5E9', border: '1px solid #C8E6C9', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', color: '#2E7D32', marginBottom: '30px' }}>
            <CheckCircle size={20} /> <strong>Consultation Completed Successfully</strong>
        </div>

        <div className="form-grid">
            <div><label>Patient ID</label><input className="input-field" defaultValue="131441" disabled /></div>
            <div><label>Name</label><input className="input-field" defaultValue="Varun c" disabled /></div>
        </div>

        <div style={{ marginBottom: '20px' }}>
            <label>Volunteer's Notes</label>
            <div style={{ padding: '15px', background: '#fafafa', border: '1px solid #eee', borderRadius: '6px' }}>The Patient is not well</div>
        </div>

        <div style={{ marginBottom: '20px' }}>
            <label>Doctors Note and Medical Prescription</label>
            <textarea className="input-field" rows="6" defaultValue="After a thorough examination, the patient presents symptoms indicative of Acute Glargon Syndrome..."></textarea>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
            <button className="btn btn-outline">Save as PDF</button>
            <button className="btn btn-primary">Send to Mobile</button>
        </div>

        <div style={{ textAlign: 'right' }}>
            <button className="btn btn-success" onClick={() => setShowModal(true)}>Mark as Completed</button>
        </div>

        {/* Success Modal */}
        {showModal && (
             <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                <div className="card" style={{ width: '400px', textAlign: 'center', padding: '40px' }}>
                    <div style={{ width: '80px', height: '80px', background: '#4CAF50', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: 'white' }}>
                        <CheckCircle size={40} />
                    </div>
                    <h2>Consultation Completed</h2>
                    <p style={{ color: '#777', marginBottom: '30px' }}>The patient record has been successfully updated in the database.</p>
                    <button className="btn btn-success" style={{ width: '100%' }} onClick={() => window.location.href='/dashboard'}>Go back Home</button>
                </div>
             </div>
        )}
    </div>
  );

  return (
    <div>
        {/* Wizard Header */}
        <div className="wizard-steps">
            <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
                <div className="step-icon"><FileText size={18} /></div>
                <span style={{fontSize: '12px'}}>Patient Intake</span>
            </div>
            <div style={{ flex: 1, height: '2px', background: step >= 2 ? '#FF5722' : '#eee', margin: '20px 10px' }}></div>
            
            <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
                <div className="step-icon"><Clock size={18} /></div>
                <span style={{fontSize: '12px'}}>Waiting Room</span>
            </div>
             <div style={{ flex: 1, height: '2px', background: step >= 3 ? '#FF5722' : '#eee', margin: '20px 10px' }}></div>

            <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
                <div className="step-icon"><Video size={18} /></div>
                <span style={{fontSize: '12px'}}>Consultation</span>
            </div>
             <div style={{ flex: 1, height: '2px', background: step >= 4 ? '#FF5722' : '#eee', margin: '20px 10px' }}></div>

            <div className={`step-item ${step >= 4 ? 'active' : ''}`}>
                <div className="step-icon"><CheckCircle size={18} /></div>
                <span style={{fontSize: '12px'}}>Clinical Notes</span>
            </div>
        </div>

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
    </div>
  );
};

export default Consultation;