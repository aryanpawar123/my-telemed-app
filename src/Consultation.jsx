import React, { useState } from 'react';
import { FileText, Clock, Video, CheckCircle, Info, AlertTriangle, Download, Mic, Monitor, Wifi, Camera, Check } from 'lucide-react';
import { usePatients } from './PatientContext';
import { useNavigate } from 'react-router-dom';

// --- STEP 1: PATIENT INTAKE (Restored Vital Signs & History) ---
const Step1 = ({ formData, handleChange, handleToggle, errors, validateStep1, setStep }) => (
    <div className="card">
        <h3>1. Patient Information</h3>
        
        <div className="form-grid">
            <div>
                <label>Patient Id *</label>
                <input name="id" value={formData.id} onChange={handleChange} className="input-field" style={errors.id ? {borderColor:'red'} : {}} placeholder="Enter" />
                {errors.id && <small style={{color:'red'}}>{errors.id}</small>}
            </div>
            <div>
                <label>Phone Number *</label>
                <input name="phone" value={formData.phone} onChange={handleChange} className="input-field" style={errors.phone ? {borderColor:'red'} : {}} placeholder="Enter" />
                {errors.phone && <small style={{color:'red'}}>{errors.phone}</small>}
            </div>
        </div>

        <div className="alert-box alert-blue">
            <Info size={16} style={{marginTop: '2px', flexShrink: 0}} />
            <span>Enter Patient ID or Phone Number if the Patient Exists in the Database the Information will Autopopulate</span>
        </div>
        
        <div className="form-grid-3">
            <div>
                <label>Name*</label>
                <input name="name" value={formData.name} onChange={handleChange} className="input-field" style={errors.name ? {borderColor:'red'} : {}} />
                {errors.name && <small style={{color:'red'}}>{errors.name}</small>}
            </div>
            <div>
                <label>Email Id*</label>
                <input name="email" value={formData.email} onChange={handleChange} className="input-field" style={errors.email ? {borderColor:'red'} : {}} />
                {errors.email && <small style={{color:'red'}}>{errors.email}</small>}
            </div>
            <div><label>Age*</label><input name="age" value={formData.age} onChange={handleChange} className="input-field" /></div>
        </div>
        
        <div className="form-grid">
             <div><label>Date of Birth*</label><input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input-field" /></div>
             <div><label>Reason for Visit *</label><input name="reason" value={formData.reason} onChange={handleChange} className="input-field" /></div>
        </div>

        {/* --- RESTORED VITAL SIGNS --- */}
        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px', marginTop: '40px' }}>2. Vital Signs</h3>
        <div className="form-grid-3">
            <div><label>BP*</label><input name="bp" value={formData.bp} onChange={handleChange} className="input-field" placeholder="Enter" /></div>
            <div><label>Temperature (Celsius)</label><input name="temp" value={formData.temp} onChange={handleChange} className="input-field" placeholder="Enter" /></div>
            <div><label>Pulse*</label><input name="pulse" value={formData.pulse} onChange={handleChange} className="input-field" placeholder="Enter" /></div>
        </div>
        
        <div style={{marginTop: '20px'}}>
            <label>Medical History*</label>
            <textarea name="history" value={formData.history} onChange={handleChange} className="input-field" rows="3" placeholder="Any allergies, chronic conditions, or relevant medical history..."></textarea>
        </div>

        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px', marginTop: '40px' }}>3. Screening</h3>
        
        <div className="alert-box alert-orange">
            <AlertTriangle size={16} style={{marginTop: '2px', flexShrink: 0}} />
            <span>Enter Patient ID or Phone Number if the Patient Exists in the Database</span>
        </div>

        {[ 
          { label: 'Experiencing severe chest pain or difficulty breathing?', key: 'chestPain' },
          { label: 'Experiencing severe bleeding or trauma?', key: 'bleeding' },
          { label: 'Showing signs of stroke or heart attack?', key: 'stroke' }
        ].map((item) => (
            <div key={item.key} className="screening-row">
                <span>{item.label}</span>
                <div className="toggle-group">
                    <button className={`toggle-btn ${formData[item.key] === 'No' ? 'active' : ''}`} onClick={() => handleToggle(item.key, 'No')}>No</button>
                    <button className={`toggle-btn ${formData[item.key] === 'Yes' ? 'active' : ''}`} onClick={() => handleToggle(item.key, 'Yes')}>Yes</button>
                </div>
            </div>
        ))}
        
        <div className="alert-box alert-green">
            <CheckCircle size={16} style={{marginTop: '2px', flexShrink: 0}} />
            <span>Enter Patient ID or Phone Number if the Patient Exists in the Database</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
            <button className="btn btn-primary" onClick={() => { if(validateStep1()) setStep(2); }}>Proceed</button>
        </div>
    </div>
);

// --- STEP 2: WAITING ROOM (Updated to match image) ---
const Step2 = ({ setStep }) => (
    <div>
       {/* Status Cards Grid */}
       <div className="form-grid">
            {/* Card 1: Fixed Device */}
            <div style={{ background: '#E8F5E9', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #C8E6C9' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{background: '#4CAF50', padding: '10px', borderRadius: '8px', color: 'white'}}><Monitor size={20}/></div>
                    <div>
                        <div style={{fontWeight: 'bold', fontSize: '14px'}}>Fixed Device</div>
                        <div style={{fontSize: '11px', color: '#2E7D32'}}>Dedicated laptop/tablet</div>
                    </div>
                </div>
                <span style={{background: '#4CAF50', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold'}}>✓ Connected</span>
            </div>

            {/* Card 2: Stable Internet */}
            <div style={{ background: '#E8F5E9', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #C8E6C9' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{background: '#4CAF50', padding: '10px', borderRadius: '8px', color: 'white'}}><Wifi size={20}/></div>
                    <div>
                        <div style={{fontWeight: 'bold', fontSize: '14px'}}>Stable Internet</div>
                        <div style={{fontSize: '11px', color: '#2E7D32'}}>High-speed connection</div>
                    </div>
                </div>
                <span style={{background: '#4CAF50', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold'}}>250 Mbps</span>
            </div>

             {/* Card 3: HD Camera */}
             <div style={{ background: '#E8F5E9', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #C8E6C9' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{background: '#4CAF50', padding: '10px', borderRadius: '8px', color: 'white'}}><Camera size={20}/></div>
                    <div>
                        <div style={{fontWeight: 'bold', fontSize: '14px'}}>HD Camera</div>
                        <div style={{fontSize: '11px', color: '#2E7D32'}}>High-quality video feed</div>
                    </div>
                </div>
                <span style={{background: '#4CAF50', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold'}}>✓ Active</span>
            </div>

            {/* Card 4: Audio System (Not Ready) */}
             <div style={{ background: '#FFEBEE', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #FFCDD2' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{background: '#D32F2F', padding: '10px', borderRadius: '8px', color: 'white'}}><Mic size={20}/></div>
                    <div>
                        <div style={{fontWeight: 'bold', fontSize: '14px'}}>Audio System</div>
                        <div style={{fontSize: '11px', color: '#C62828'}}>Check microphone</div>
                    </div>
                </div>
                <span style={{background: '#D32F2F', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold'}}>✕ Not Ready</span>
            </div>
        </div>

        {/* Setup Complete Checklist */}
        <div className="card" style={{marginTop: '20px'}}>
            <h3 style={{display: 'flex', alignItems: 'center', gap: '10px', color: '#2E7D32', fontSize: '16px', margin: '0 0 15px 0'}}><CheckCircle size={18}/> Setup Complete</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '13px', lineHeight: '2'}}>
                <li style={{display:'flex', gap:'10px', alignItems:'center'}}><span style={{color:'green', fontSize:'16px'}}>•</span> Patient is comfortably seated in a private consultation room</li>
                <li style={{display:'flex', gap:'10px', alignItems:'center'}}><span style={{color:'green', fontSize:'16px'}}>•</span> All equipment has been tested and verified</li>
                <li style={{display:'flex', gap:'10px', alignItems:'center'}}><span style={{color:'green', fontSize:'16px'}}>•</span> No login required - patient access is pre-authorized</li>
                <li style={{display:'flex', gap:'10px', alignItems:'center'}}><span style={{color:'green', fontSize:'16px'}}>•</span> Staff member is available for technical assistance</li>
            </ul>
        </div>

       {/* Patient Ready Bottom Section */}
       <div className="card" style={{ height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F3E5F5', border: '1px solid #E1BEE7' }}>
            <div style={{ width: '50px', height: '50px', border: '4px solid white', borderTopColor: '#7B1FA2', borderRadius: '50%', animation: 'spin 1s linear infinite', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}></div>
            <h2 style={{ marginTop: '15px', fontSize: '18px' }}>Patient Ready</h2>
            <p style={{color: '#666', fontSize: '13px'}}>All systems operational. Waiting for doctor to join the consultation...</p>
            <div style={{display:'flex', gap: '5px', marginTop: '10px'}}>
                <span style={{width:'6px', height:'6px', background:'#7B1FA2', borderRadius:'50%'}}></span>
                <span style={{width:'6px', height:'6px', background:'#BA68C8', borderRadius:'50%'}}></span>
                <span style={{width:'6px', height:'6px', background:'#E1BEE7', borderRadius:'50%'}}></span>
            </div>
            <button className="btn btn-primary" style={{marginTop: '20px', fontSize: '12px'}} onClick={() => setStep(3)}>Start Consultation</button>
       </div>
    </div>
);

// --- STEP 3: VIDEO CALL ---
const Step3 = ({ setStep, formData }) => (
    <div className="video-layout">
        <div className="video-container">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Patient" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            <div style={{ position: 'absolute', bottom: '30px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button className="btn" style={{borderRadius: '50%', width:'50px', height: '50px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.2)'}}><Mic color="white"/></button>
                <button className="btn" style={{borderRadius: '50%', width:'50px', height: '50px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.2)'}}><Video color="white"/></button>
                <button className="btn" style={{background: '#D32F2F', borderRadius: '30px', padding: '0 30px'}} onClick={() => setStep(4)}>End Call</button>
            </div>
        </div>
        <div className="video-notes">
            <div className="card">
                <h3>Patient Details</h3>
                <div style={{ fontSize: '14px', lineHeight: '2' }}>
                    <div><strong>ID:</strong> {formData.id}</div>
                    <div><strong>Name:</strong> {formData.name}</div>
                    <div><strong>Age:</strong> {formData.age}</div>
                </div>
            </div>
            <div className="card" style={{ flex: 1 }}>
                <h3>Quick Notes</h3>
                <textarea className="input-field" style={{ height: '90%', resize: 'none' }} placeholder="Type notes here..."></textarea>
            </div>
        </div>
    </div>
);

// --- STEP 4: FINAL NOTES ---
const Step4 = ({ formData, handleChange, saveToFile, handleFinalSubmit, showModal, navigate }) => (
    <div className="card">
        <div className="alert-box alert-green" style={{background: '#E8F5E9', border: '1px solid #C8E6C9', color: '#2E7D32'}}>
            <CheckCircle size={20} /> 
            <div>
                <strong>Consultation Completed Successfully</strong>
                <div style={{fontSize:'12px', marginTop:'2px'}}>All patient information and clinical notes have been securely saved to the Database</div>
            </div>
        </div>

        <div className="form-grid">
            <div><label>Patient ID</label><input value={formData.id} disabled className="input-field" /></div>
            <div><label>Name</label><input value={formData.name} disabled className="input-field" /></div>
        </div>

        <div className="form-grid" style={{marginTop: '20px'}}>
             <div><label>Email Id</label><input value={formData.email} disabled className="input-field" /></div>
             <div><label>Date of Birth</label><input value={formData.dob} disabled className="input-field" /></div>
        </div>

         <div className="form-grid-3" style={{marginTop: '20px'}}>
             <div><label>Age</label><input value={formData.age} disabled className="input-field" /></div>
             <div><label>Temperature</label><input value={formData.temp} disabled className="input-field" /></div>
             <div><label>Blood Pressure</label><input value={formData.bp} disabled className="input-field" /></div>
        </div>

        <div style={{margin:'30px 0'}}>
            <label style={{display:'flex', gap:'10px', alignItems:'center'}}><FileText size={16}/> Volunteer's Notes</label>
            <input value="The Patient is Not well" disabled className="input-field" style={{marginTop:'5px'}} />
        </div>

        <div style={{margin:'30px 0'}}>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:'5px'}}>
                <label style={{display:'flex', gap:'10px', alignItems:'center'}}><FileText size={16}/> Doctors Note and Medical Prescription</label>
                <span style={{fontSize:'12px', color:'#777'}}>Data Stored in Database 12:23 PM</span>
            </div>
            <textarea name="doctorNotes" value={formData.doctorNotes} onChange={handleChange} className="input-field" rows="6" placeholder="Type here..."></textarea>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
             <button className="btn btn-outline" style={{flex: 1}} onClick={() => saveToFile(formData)}>Save as PDF</button>
             <button className="btn btn-primary" style={{flex: 1}}>Send to Mobile</button>
        </div>

        <div style={{ textAlign: 'right', marginTop: '30px' }}>
            <button className="btn btn-success" onClick={handleFinalSubmit} style={{padding: '12px 40px'}}>Mark as Completed</button>
        </div>

        {showModal && (
             <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                <div className="card" style={{ width: '400px', textAlign: 'center', padding: '40px' }}>
                    <div style={{width:'80px', height:'80px', background:'#2E7D32', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', color:'white'}}>
                        <Check size={50} strokeWidth={4} />
                    </div>
                    <h2>Consultation Completed</h2>
                    <p style={{color:'#777', fontSize:'13px', lineHeight:'1.5', margin:'20px 0'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="btn btn-success" style={{background:'#2E7D32', width:'100%'}} onClick={() => navigate('/dashboard')}>Go back Home</button>
                </div>
             </div>
        )}
    </div>
);

// --- MAIN PARENT COMPONENT ---
const Consultation = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { addPatient } = usePatients();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    id: '', phone: '', name: '', email: '', age: '', dob: '', reason: '',
    bp: '', temp: '', pulse: '', history: '',
    chestPain: 'No', bleeding: 'No', stroke: 'No', doctorNotes: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleToggle = (field, value) => setFormData({ ...formData, [field]: value });

  const validateStep1 = () => {
    let newErrors = {};
    if (!formData.id) newErrors.id = "Patient ID is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveToFile = (data) => {
    const fileName = `patient_${data.id}_record.json`;
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFinalSubmit = () => {
    const finalData = { ...formData, date: new Date().toISOString().split('T')[0], status: 'Completed' };
    addPatient(finalData);
    saveToFile(finalData);
    setShowModal(true);
  };

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

        {/* Step Rendering */}
        {step === 1 && (
            <Step1 
                formData={formData} 
                handleChange={handleChange} 
                handleToggle={handleToggle} 
                errors={errors} 
                validateStep1={validateStep1} 
                setStep={setStep} 
            />
        )}
        
        {step === 2 && <Step2 setStep={setStep} />}
        
        {step === 3 && <Step3 setStep={setStep} formData={formData} />}
        
        {step === 4 && (
            <Step4 
                formData={formData} 
                handleChange={handleChange} 
                saveToFile={saveToFile} 
                handleFinalSubmit={handleFinalSubmit} 
                showModal={showModal} 
                navigate={navigate} 
            />
        )}
    </div>
  );
};

export default Consultation;