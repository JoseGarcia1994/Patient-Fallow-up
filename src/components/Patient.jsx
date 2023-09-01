import React, { useState } from 'react';
import DeleteWarning from './DeleteWarning';

const Patient = ({patient, setPatient, deletePatient}) => {

    const {name, owner, email, discharged, symptoms, id} = patient
    const [warning, setWarning] = useState(false)

    return (
        <div className='m-5 bg-white shadow-md px-5 py-8 rounded-lg'>
            <p className='font-bold text-gray-700 uppercase'>Name: {''}
                <span className='font-normal normal-case text-lg'>{name}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase'>Owner: {''}
                <span className='font-normal normal-case text-lg'>{owner}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case text-lg'>{email}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase'>Discharged Date: {''}
                <span className='font-normal normal-case text-lg'>{discharged}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase'>Symptoms: {''}
                <span className='font-normal normal-case text-lg'>{symptoms}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button 
                type='button' 
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                onClick={() => setPatient(patient)}
                >
                    Edit
                </button>

                <button 
                type='button' 
                className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                onClick={() => setWarning(true)}
                >
                    Delete
                </button>
            </div>

            {
                warning && 
                <DeleteWarning 
                deleteId={id}
                patientName={name}
                deletePatient={deletePatient}
                setWarning={setWarning}
                />
            }
        </div>
    );
};

export default Patient;