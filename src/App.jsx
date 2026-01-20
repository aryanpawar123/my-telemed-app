import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Consultation from './Consultation';
import PatientDetails from './PatientDetails'; // Import the new file
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div className="layout">
    <Sidebar />
    <div className="main-content">{children}</div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/consultation" element={<Layout><Consultation /></Layout>} />
        {/* New Route Added Below */}
        <Route path="/patient/:id" element={<Layout><PatientDetails /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;