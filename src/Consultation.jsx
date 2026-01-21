import React, { useState } from 'react';
import { FileText, Clock, Video, CheckCircle, Info, AlertTriangle, Download, Mic, Monitor, Wifi, Camera, Check } from 'lucide-react';
import { usePatients } from './PatientContext';
import { useNavigate } from 'react-router-dom';

const Step1 = ({ formData, handleChange, handleToggle, errors, validateStep1, setStep }) => (
    <div className="card">
        <h3>1. Patient Information</h3>
        <div className="form-grid">
            <div><label>Patient Id *</label><input name="id" value={formData.id} onChange={handleChange} className="input-field" style={errors.id ? {borderColor:'red'} : {}} />{errors.id && <small style={{color:'red'}}>{errors.id}</small>}</div>
            <div><label>Phone Number *</label><input name="phone" value={formData.phone} onChange={handleChange} className="input-field" style={errors.phone ? {borderColor:'red'} : {}} />{errors.phone && <small style={{color:'red'}}>{errors.phone}</small>}</div>
        </div>
        <div className="alert-box alert-blue"><Info size={16}/><span>Enter ID to autopopulate.</span></div>
        <div className="form-grid-3">
            <div><label>Name*</label><input name="name" value={formData.name} onChange={handleChange} className="input-field" style={errors.name ? {borderColor:'red'} : {}} /></div>
            <div><label>Email*</label><input name="email" value={formData.email} onChange={handleChange} className="input-field" style={errors.email ? {borderColor:'red'} : {}} /></div>
            <div><label>Age</label><input name="age" value={formData.age} onChange={handleChange} className="input-field" /></div>
        </div>
        <div className="form-grid">
             <div><label>Date of Birth</label><input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input-field" /></div>
             <div><label>Reason</label><input name="reason" value={formData.reason} onChange={handleChange} className="input-field" /></div>
        </div>
        <h3 style={{marginTop:'30px'}}>2. Screening</h3>
        
        {/* USING NEW CLASS FOR MOBILE FIX */}
        {[ 
          { label: 'Experiencing severe chest pain?', key: 'chestPain' },
          { label: 'Experiencing severe bleeding?', key: 'bleeding' },
          { label: 'Signs of stroke?', key: 'stroke' }
        ].map((item) => (
            <div key={item.key} className="screening-row">
                <span>{item.label}</span>
                <div className="toggle-group">
                    <button className={`toggle-btn ${formData[item.key] === 'No' ? 'active' : ''}`} onClick={() => handleToggle(item.key, 'No')}>No</button>
                    <button className={`toggle-btn ${formData[item.key] === 'Yes' ? 'active' : ''}`} onClick={() => handleToggle(item.key, 'Yes')}>Yes</button>
                </div>
            </div>
        ))}

        <div style={{textAlign:'right', marginTop:'20px'}}><button className="btn btn-primary" onClick={() => { if(validateStep1()) setStep(2); }}>Proceed</button></div>
    </div>
);

// ... (Step 2, 3, 4 remain exactly the same as previous) ...
// For simplicity, I'm abbreviating the unchanged parts below. 
// When you copy this, ensure Step 2, 3, and 4 are included or copied from your previous version.

const Step2 = ({ setStep }) => (<div className="card" style={{textAlign:'center', padding:'50px'}}><h2>Patient Ready</h2><button className="btn btn-primary" onClick={() => setStep(3)}>Start Consultation</button></div>);
const Step3 = ({ setStep, formData }) => (<div className="video-layout"><div className="video-container" style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>Video Simulator<div style={{position:'absolute', bottom:20}}><button className="btn" style={{background:'red'}} onClick={() => setStep(4)}>End Call</button></div></div></div>);
const Step4 = ({ formData, handleChange, saveToFile, handleFinalSubmit, showModal, navigate }) => (
    <div className="card">
        <div className="alert-box alert-green"><CheckCircle size={16}/><span>Completed</span></div>
        <div className="form-grid"><div><label>ID</label><input value={formData.id} disabled className="input-field"/></div><div><label>Name</label><input value={formData.name} disabled className="input-field"/></div></div>
        <div style={{margin:'20px 0'}}><label>Doctor's Note</label><textarea name="doctorNotes" value={formData.doctorNotes} onChange={handleChange} className="input-field" rows="4"></textarea></div>
        <div style={{textAlign:'right', display:'flex', gap:'10px', justifyContent:'flex-end'}}>
             <button className="btn btn-outline" onClick={() => saveToFile(formData)}><Download size={16}/> Download</button>
             <button className="btn btn-success" onClick={handleFinalSubmit}>Mark Completed</button>
        </div>
        {showModal && <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', alignItems:'center', justifyContent:'center'}}><div className="card" style={{textAlign:'center', width:'300px'}}><h2>Success!</h2><button className="btn btn-success" onClick={() => navigate('/dashboard')}>Home</button></div></div>}
    </div>
);

const Consultation = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { addPatient } = usePatients();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ id: '', phone: '', name: '', email: '', age: '', dob: '', reason: '', bp: '', temp: '', pulse: '', history: '', chestPain: 'No', bleeding: 'No', stroke: 'No', doctorNotes: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleToggle = (field, value) => setFormData({ ...formData, [field]: value });
  
  const validateStep1 = () => {
    let newErrors = {};
    if (!formData.id) newErrors.id = "Required";
    if (!formData.name) newErrors.name = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    if (!formData.email) newErrors.email = "Required";
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
        <div className="wizard-steps">{[1,2,3,4].map(s => <div key={s} className={`step-item ${step >= s ? 'active' : ''}`}><div className="step-icon">{s}</div></div>)}</div>
        {step === 1 && <Step1 formData={formData} handleChange={handleChange} handleToggle={handleToggle} errors={errors} validateStep1={validateStep1} setStep={setStep} />}
        {step === 2 && <Step2 setStep={setStep} />}
        {step === 3 && <Step3 setStep={setStep} formData={formData} />}
        {step === 4 && <Step4 formData={formData} handleChange={handleChange} saveToFile={saveToFile} handleFinalSubmit={handleFinalSubmit} showModal={showModal} navigate={navigate} />}
    </div>
  );
};

export default Consultation;