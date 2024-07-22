
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/userIds');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Patients List</h2>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patients.map((patient) => (
                <tr key={patient.userId}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{patient.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{patient.userId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link 
                      to={`/reportsList/${patient.userId}`} 
                      className="bg-gray-800 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg inline-block transition duration-200 ease-in-out"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
