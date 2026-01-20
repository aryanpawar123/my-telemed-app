import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Consultation from './Consultation';
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
      </Routes>
    </Router>
  );
}
export default App;