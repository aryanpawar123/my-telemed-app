import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PatientProvider } from './PatientContext';
import Login from './Login';
import Dashboard from './Dashboard';
import Consultation from './Consultation';
import PatientDetails from './PatientDetails';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div className="layout">
    <Sidebar />
    <div className="main-content">{children}</div>
  </div>
);

function App() {
  return (
    <PatientProvider>
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/consultation" element={<Layout><Consultation /></Layout>} />
            <Route path="/patient/:id" element={<Layout><PatientDetails /></Layout>} />
        </Routes>
        </Router>
    </PatientProvider>
  );
}

export default App;