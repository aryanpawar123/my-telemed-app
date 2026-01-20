import React from 'react';
import { Users, Clock, Video, CheckCircle, Search } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="header">
        <div>
          <h1>Welcome Samantha</h1>
          <p style={{ color: '#777', fontSize: '14px' }}>Welcome to Telemedicine App</p>
        </div>
        <div style={{ background: 'white', padding: '8px 15px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }}>
          📅 24th Oct to 12th Nov ▾
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#FF5722' }}><Users size={20} /></div>
          <span style={{ fontSize: '13px', color: '#777' }}>Total Patients</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>1,245</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#FFC107' }}><Clock size={20} /></div>
          <span style={{ fontSize: '13px', color: '#777' }}>Waiting</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>354</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#2196F3' }}><Video size={20} /></div>
          <span style={{ fontSize: '13px', color: '#777' }}>In Consultation</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>1,245</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#4CAF50' }}><CheckCircle size={20} /></div>
          <span style={{ fontSize: '13px', color: '#777' }}>Completed</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>24</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ background: 'white', borderRadius: '30px', padding: '5px', display: 'flex', gap: '5px' }}>
            <button style={{ background: 'black', color: 'white', border: 'none', borderRadius: '20px', padding: '8px 20px', fontSize: '13px' }}>All</button>
            <button style={{ background: 'transparent', border: 'none', padding: '8px 20px', color: '#777', fontSize: '13px' }}>Waiting</button>
            <button style={{ background: 'transparent', border: 'none', padding: '8px 20px', color: '#777', fontSize: '13px' }}>Completed</button>
        </div>
        <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '10px', top: '10px', color: '#999' }} />
            <input type="text" placeholder="Search for ID, Patient or Doctors" style={{ padding: '8px 10px 8px 35px', borderRadius: '20px', border: '1px solid #ddd', width: '250px', outline: 'none' }} />
        </div>
      </div>

      {/* Detailed Patient Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Consulted By</th>
              <th>Date and Time</th>
              <th>Medical Record</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>234446</td>
              <td style={{ fontWeight: '500' }}>Varun c</td>
              <td>+983 2424253</td>
              <td>liam.smith@gmail.com</td>
              <td>Nina Brown</td>
              <td>13 Jan 2024, 09:15</td>
              <td><a href="#" className="status-link">View Records</a></td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td>234448</td>
              <td style={{ fontWeight: '500' }}>Olivia Davis</td>
              <td>+983 2424255</td>
              <td>olivia.davis@gmail.com</td>
              <td>James Wilson</td>
              <td>13 Jan 2024, 10:30</td>
              <td><a href="#" className="status-link">View Records</a></td>
            </tr>
             {/* Row 3 */}
             <tr>
              <td>234447</td>
              <td style={{ fontWeight: '500' }}>Emma Johnson</td>
              <td>+983 2424254</td>
              <td>emma.johnson@gmail.com</td>
              <td>Michael White</td>
              <td>13 Jan 2024, 10:00</td>
              <td><a href="#" className="status-link">View Records</a></td>
            </tr>
            {/* Row 4 */}
             <tr>
              <td>234448</td>
              <td style={{ fontWeight: '500' }}>Liam Smith</td>
              <td>+983 2424255</td>
              <td>liam.smith@gmail.com</td>
              <td>Sarah Brown</td>
              <td>14 Jan 2024, 11:30</td>
              <td><a href="#" className="status-link">View Records</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;