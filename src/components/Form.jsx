import {useState, useEffect} from 'react'
import Error from './Error';

const Form = ({patients, setPatients, patient, setPatient}) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [discharged, setDischarged] = useState('');
    const [symptoms, setSymptoms] = useState('');
    
    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
          setName(patient.name)
          setOwner(patient.owner)
          setEmail(patient.email)
          setDischarged(patient.discharged)
          setSymptoms(patient.symptoms)  
        } 
    }, [patient]);
    

    const generateId = () => {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);
        
        return random + date;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validation
        if ([name, owner, email, discharged, symptoms].includes('')) {
            setError(true);
            return;
        } 
        setError(false)
        
        // Patient Object
        const objectPatient = {
            name,
            owner,
            email, 
            discharged, 
            symptoms,
        }

        if (patient.id) {
            // Edit Patient
            objectPatient.id = patient.id

            const updatedPatient = patients.map( patientState => patientState.id === patient.id ? objectPatient : patientState );

            setPatients(updatedPatient);

            setPatient({})
        } else {
            objectPatient.id = generateId();
            // Generate actual patients + new patient
            setPatients([...patients, objectPatient]);
        }

        // Reset Form
        setName('');
        setOwner('');
        setEmail('');
        setDischarged('');
        setSymptoms('');
    }


    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Patient Follow-up</h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Add Patients & {''}
                <span className='text-indigo-600 font-bold'>Manage Them</span>
            </p>

            <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit}>
                {error && <Error message='All fields are required'/>}
                <div className='mb-5'>
                    <label htmlFor='pet' className='block text-gray-700 uppercase font-bold'>Pet´s Name</label>

                    <input
                    id="pet" 
                    type="text" 
                    placeholder="Pets Name.."
                    className='border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='owner' className='block text-gray-700 uppercase font-bold'>Owner´s name</label>

                    <input
                    id="owner" 
                    type="text" 
                    placeholder="Owner´s Name.."
                    className='border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>

                    <input
                    id="email" 
                    type="email" 
                    placeholder="Email"
                    className='border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='discharged' className='block text-gray-700 uppercase font-bold'>Discharged Me</label>

                    <input
                    id="discharged" 
                    type="date" 
                    className='border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                    value={discharged}
                    onChange={(e) => setDischarged(e.target.value)}
                    />
                </div>
                
                <div className='mb-5'>
                    <label htmlFor='symptoms' className='block text-gray-700 uppercase font-bold'>Symptoms</label>

                    <textarea 
                    id="symptoms"
                    className='border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                    placeholder='Describe the symptoms' 
                    cols="20" 
                    rows="2"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)} 
                    /> 
                </div>

                <input 
                type="submit"
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
                value={patient.id ? 'Edit Patient' : 'Add Patient'}
                />
            </form>
        </div>
    );
};

export default Form;