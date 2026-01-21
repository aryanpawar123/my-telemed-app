import React, { createContext, useState, useEffect, useContext } from 'react';

const PatientContext = createContext();

export const usePatients = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem('telemed_patients');
    return saved ? JSON.parse(saved) : [
      { id: '234446', name: 'Varun c', phone: '+983 2424253', email: 'liam.smith@gmail.com', date: '2024-01-13', status: 'Completed' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('telemed_patients', JSON.stringify(patients));
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