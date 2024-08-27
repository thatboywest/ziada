import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaTransgender } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";

const EmployeeProfile = () => {
  const { id } = useParams(); 
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/user/${id}`);
        setEmployee(response.data.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <p>Loading employee data...</p>;
  }

  return (
    <div className="container">
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="box">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src={employee.profilePhoto}
                      alt={`${employee.name}'s profile`}
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <h1 className="title is-3">{employee.name}</h1>
                  <p className="subtitle is-5">
                    <FaBriefcase className="mr-2" /> {employee.jobTitle}
                  </p>
                </div>
              </div>

              <div className="content mt-4">
                <div className="columns is-multiline">
                  <div className="column is-half">
                    <div className="box has-background-light">
                      <p className="subtitle is-6">
                        <FaMapMarkerAlt className="mr-2" /> {employee.county}, {employee.town}
                      </p>
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="box has-background-light">
                      <p className="subtitle is-6">
                        <FaEnvelope className="mr-2" /> {employee.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box mt-4">
                  <p className="subtitle is-6">
                    <FaTransgender className="mr-2" /> {employee.gender}
                  </p>
                  
                </div>

                <div className="box mt-4">
                  <p className="subtitle is-6">
                    <FaPhoneAlt className="mr-2 tag" /> {employee.phone}
                  </p>
                  
                </div>

                <div className="box mt-4">
                  <p>{employee.jobDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;


