import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');

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

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.jobTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTown = selectedTown ? employee.town === selectedTown : true;
    const matchesCounty = selectedCounty ? employee.county === selectedCounty : true;
    return matchesSearch && matchesTown && matchesCounty;
  });

  const uniqueTowns = [...new Set(employees.map((employee) => employee.town))];
  const uniqueCounties = [...new Set(employees.map((employee) => employee.county))];

  return (
    <div className="container">
      <h1 className="title has-text-centered">Find taskers</h1>


      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Search by job title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>


      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Filter by Town</label>
            <div className="control">
              <div className="select">
                <select
                  value={selectedTown}
                  onChange={(e) => setSelectedTown(e.target.value)}
                >
                  <option value="">All Towns</option>
                  {uniqueTowns.map((town) => (
                    <option key={town} value={town}>
                      {town}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Filter by County</label>
            <div className="control">
              <div className="select">
                <select
                  value={selectedCounty}
                  onChange={(e) => setSelectedCounty(e.target.value)}
                >
                  <option value="">All Counties</option>
                  {uniqueCounties.map((county) => (
                    <option key={county} value={county}>
                      {county}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="columns is-multiline">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <div key={employee._id} className="column is-one-third">
              <div className="card">

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

                  <figure
                    className="image is-128x128"
                    style={{
                      position: 'absolute',
                      top: '150px',
                      left: '20px',
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

                <div className="card-content mt-6" style={{ paddingTop: '70px' }}>
                  <p className="title is-4 tag is-info">{employee.name}</p>
                  <p className="subtitle is-4 mt-4">
                    <FaBriefcase className="icon" /> {employee.jobTitle}
                  </p>
                  <div className="content">
                    <p>{employee.jobDescription}</p>
                    <p className="mt-3 tag">
                      {employee.county}, {employee.town}
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
