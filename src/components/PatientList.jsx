import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

            {patients && patients.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Patients List</h2>

                    <p className='text-lg mt-5 text-center mb-10'>
                        Manage Your {''}
                        <span className='text-indigo-600 font-bold'>Patients & Appointments</span>
                    </p>

                    {
                        patients.map(patient => (
                            <Patient
                                key={patient.id}
                                patient={patient}
                                setPatient={setPatient}
                                deletePatient={deletePatient}
                            />
                        ))
                    }
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>No Patients</h2>

                    <p className='text-lg mt-5 text-center mb-10'>
                        Add Patients {''}
                        <span className='text-indigo-600 font-bold'>and they will show here</span>
                    </p>
                </>
            )}


        </div>
    );
};

export default PatientList;