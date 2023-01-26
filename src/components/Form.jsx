import { useState, useEffect } from 'react';
import { Error } from './Error';

const Form = ({ setPatients, patients, patient, setPatient }) => {
  const [petName, setPetName] = useState('');
  const [petOwner, setPetOwner] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setPetOwner(patient.petOwner);
      setOwnerEmail(patient.ownerEmail);
      setEntryDate(patient.entryDate);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion de formularios
    if ([petName, petOwner, ownerEmail, entryDate, symptoms].includes('')) {
      console.log('Hay al menos un campo vacio');
      setError(true);
      return;
    }

    setError(false);

    const newPatient = {
      petName,
      petOwner,
      ownerEmail,
      entryDate,
      symptoms,
    };

    if (patient.id) {
      newPatient.id = patient.id;
      const updatedPatients = patients.map((value) => {
        return value.id == patient.id ? newPatient : value;
      });
      setPatients(updatedPatients);
      setPatient({});
    } else {
      newPatient.id = generateId();
      setPatients([...patients, newPatient]);
    }

    setPetName('');
    setPetOwner('');
    setOwnerEmail('');
    setEntryDate('');
    setSymptoms('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 ml:mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Agrega pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            {' '}
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="petName"
          >
            Mascota
          </label>
          <input
            id="petName"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="petOwner"
          >
            Nombre propietario
          </label>
          <input
            id="petOwner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={petOwner}
            onChange={(e) => setPetOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="ownerEmail"
          >
            Mail
          </label>
          <input
            id="ownerEmail"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="mail"
            placeholder="Email de contacto"
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="entryDate"
          >
            Fecha de alta
          </label>
          <input
            id="entryDate"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Fecha de alta
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="describe los sintomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
};

export default Form;
