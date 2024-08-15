import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';


const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user/all-employee');
        setEmployees(response.data.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <h1 className="title has-text-centered">Employee Profiles</h1>
      <div className="columns is-multiline">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <div key={employee._id} className="column is-one-third">
              <div className="card">
                {/* Background Photo */}
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${employee.backgroundPhoto})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '200px',
                    position: 'relative',
                  }}
                >
                  {/* Circular Profile Photo */}
                  <figure
                    className="image is-128x128"
                    style={{
                      position: 'absolute',
                      top: '150px',
                      left: '20px', // Adjust this value to move the image left
                      zIndex: '1',
                    }}
                  >
                    <img
                      className="is-rounded"
                      src={employee.profilePhoto}
                      alt={`${employee.name}'s profile`}
                    />
                  </figure>
                </div>
                {/* Card Content */}
                <div className="card-content mt-6" style={{ paddingTop: '70px' }}>
                  <p className="title is-4 tag is-info">{employee.name}</p>
                  <p className="subtitle is-6">
                    <FaBriefcase className="icon" /> {employee.jobTitle}
                  </p>
                  <div className="content">
                    <p>{employee.jobDescription}</p>
                    <p className="mt-3 tag">
                      <FaMapMarkerAlt className="icon" /> {employee.county}, {employee.town}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="has-text-centered">No employees found.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeesPage;
