import React, { createContext, useState, useEffect, useContext } from 'react';

const PatientContext = createContext();

export const usePatients = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
  // Helper to get dates relative to today (so data is always "fresh")
  const getDate = (daysOffset) => {
    const d = new Date();
    d.setDate(d.getDate() + daysOffset);
    return d.toISOString().split('T')[0];
  };

  const [patients, setPatients] = useState(() => {
    // CHANGED KEY to '_v2' to force fresh data load for your demo
    const saved = localStorage.getItem('telemed_patients_v2');
    return saved ? JSON.parse(saved) : [
      { id: '234446', name: 'Varun c', phone: '+983 2424253', email: 'varun.c@gmail.com', date: getDate(0), status: 'Completed' },
      { id: '234448', name: 'Olivia Davis', phone: '+983 2424255', email: 'olivia.davis@gmail.com', date: getDate(0), status: 'Waiting' },
      { id: '234447', name: 'Emma Johnson', phone: '+983 2424254', email: 'emma.j@gmail.com', date: getDate(-1), status: 'Completed' },
      { id: '234449', name: 'Noah Wilson', phone: '+983 2424256', email: 'noah.w@gmail.com', date: getDate(-1), status: 'In Consultation' },
      { id: '234450', name: 'Ava Martinez', phone: '+983 2424257', email: 'ava.m@gmail.com', date: getDate(-2), status: 'Waiting' },
      { id: '234451', name: 'Sophia Anderson', phone: '+983 2424258', email: 'sophia.a@gmail.com', date: getDate(-5), status: 'Completed' },
      { id: '234452', name: 'Liam Smith', phone: '+983 2424259', email: 'liam.s@gmail.com', date: getDate(-10), status: 'Completed' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('telemed_patients_v2', JSON.stringify(patients));
  }, [patients]);

  const addPatient = (newPatient) => {
    setPatients(prev => [newPatient, ...prev]);
  };

  return (
    <PatientContext.Provider value={{ patients, addPatient }}>
      {children}
    </PatientContext.Provider>
  );
};