import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {

  const ls = JSON.parse(localStorage.getItem('patients')) ?? [];
  const [patients, setPatients] = useState(ls);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify( patients ) )
  }, [patients])
  
  const deletePatient = (id) => {
    const eliminatePatient = patients.filter( patient => patient.id !== id);
    setPatients(eliminatePatient)
  }
  
  return (
    <div className='container mx-auto mt-16'>
      <Header />
      
      <div className='mt-12 md:flex'>
        <Form 
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}
        />
        <PatientList 
        patients={patients}
        setPatient={setPatient}
        deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
