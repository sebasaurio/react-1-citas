const Patient = ({ patient, setPatient, handleDeletePatient }) => {
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {' '}
        Nombre:{' '}
        <span className="font-normal normal-case">
          {patient.petName} {patient.id}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {' '}
        Propietario:{' '}
        <span className="font-normal normal-case">{patient.petOwner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {' '}
        Mail:{' '}
        <span className="font-normal normal-case">{patient.ownerEmail}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {' '}
        Fecha de alta:{' '}
        <span className="font-normal normal-case">{patient.entryDate}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {' '}
        Sintomas:{' '}
        <span className="font-normal normal-case">{patient.symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          className="py-2 px-8 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={() => handleDeletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patient;
