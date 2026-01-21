import React, { createContext, useState, useEffect, useContext } from 'react';

const PatientContext = createContext();

export const usePatients = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem('telemed_patients');
    return saved ? JSON.parse(saved) : [
      { id: '234446', name: 'Varun c', phone: '+983 2424253', email: 'liam.smith@gmail.com', date: '2023-10-25', status: 'Completed' },
      { id: '234448', name: 'Olivia Davis', phone: '+983 2424255', email: 'olivia.davis@gmail.com', date: '2023-11-02', status: 'Waiting' },
      { id: '234447', name: 'Emma Johnson', phone: '+983 2424254', email: 'emma.j@gmail.com', date: '2023-10-28', status: 'Completed' },
      { id: '234449', name: 'Noah Wilson', phone: '+983 2424256', email: 'noah.w@gmail.com', date: '2023-11-10', status: 'In Consultation' },
      { id: '234450', name: 'Ava Martinez', phone: '+983 2424257', email: 'ava.m@gmail.com', date: '2023-12-05', status: 'Waiting' },
      { id: '234451', name: 'Sophia Anderson', phone: '+983 2424258', email: 'sophia.a@gmail.com', date: '2024-01-15', status: 'Completed' },
      { id: '234452', name: 'Liam Smith', phone: '+983 2424259', email: 'liam.s@gmail.com', date: '2024-01-20', status: 'Completed' }
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