
const DeleteWarning = ({ deletePatient, deleteId, setWarning, patientName }) => {

    return (
        <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center'>
            <div className='w-80 h-52 bg-white shadow-lg rounded-md p-4 text-center flex flex-row flex-wrap items-center justify-around'>
                <h2 className='w-full text-lg'>
                    Are you sure you want to delete?
                    <br />Patient: <span className='font-bold uppercase'>{patientName}</span>
                </h2>

                <button
                    className='w-20 h-6 bg-red-600 text-white rounded-md'
                    type="submit"
                    onClick={() => deletePatient(deleteId)}
                >
                    Delete
                </button>

                <button
                    className='w-20 h-6 bg-indigo-600 text-white rounded-md'
                    type="submit"
                    onClick={() => setWarning(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default DeleteWarning;