import Patient from './Patient';

function PatientList({ patients, setPatient, handleDeletePatient }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">
        {patients.length > 0 ? 'Listado de pacientes' : 'No hay pacientes'}
      </h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
      </p>

      {patients.map((value, index) => {
        return (
          <Patient
            key={value.id}
            patient={value}
            setPatient={setPatient}
            handleDeletePatient={handleDeletePatient}
          />
        );
      })}
    </div>
  );
}

export default PatientList;
