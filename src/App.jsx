import { useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientList';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getData = () => {
      const patientsLocal = JSON.parse(localStorage.getItem('patients')) ?? [];
      patientsLocal?.length > 0 && setPatients(patientsLocal);
    };

    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const handleDeletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPatients={setPatients}
          patients={patients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          handleDeletePatient={handleDeletePatient}
        />
      </div>
    </div>
  );
}

export default App;
