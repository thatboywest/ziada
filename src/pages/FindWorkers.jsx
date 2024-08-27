import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Unauthorized');
        }

        const response = await axios.get('https://ziadaapi.onrender.com/api/user/all-employee', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployees(response.data.data);
      } catch (error) {
        if (error.message === 'Unauthorized' || (error.response && error.response.status === 403)) {
          setError('You need to log in first.');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          console.error('Error fetching employees:', error);
          setError('Error fetching employees.');
        }
      }
    };

    fetchEmployees();
  }, [navigate]);

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.jobTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTown = selectedTown ? employee.town === selectedTown : true;
    const matchesCounty = selectedCounty ? employee.county === selectedCounty : true;
    return matchesSearch && matchesTown && matchesCounty;
  });

  const uniqueTowns = [...new Set(employees.map((employee) => employee.town))];
  const uniqueCounties = [...new Set(employees.map((employee) => employee.county))];

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  if (error) return <div className="notification is-danger">{error}</div>;

  return (
    <div className="container">
      <h1 className="title has-text-centered">Find Taskers</h1>

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

      <div className="columns is-multiline is-centered">
        <div className="column is-narrow">
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
        <div className="column is-narrow">
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

      <div className="columns is-multiline is-centered">
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
                    height: '100px',
                    position: 'relative',
                  }}
                >
                  <figure
                    className="image is-96x96 mb-6"
                    style={{
                      position: 'absolute',
                      top: '50px',
                      left: '10px',
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

                <div className="card-content" style={{ paddingTop: '4rem' }}>
                  <p className="title is-6">{employee.name}</p>
                  <p className="subtitle is-6">
                    <FaBriefcase className="icon" /> {employee.jobTitle}
                  </p>
                  <div className="content">
                    <p>{truncateDescription(employee.jobDescription, 10)}</p> 
                    <p className="mt-3">
                      <FaMapMarkerAlt className="icon" /> {employee.county}, {employee.town}
                    </p>
                    <button
                      className="button is-link is-small mt-3"
                      onClick={() => window.location.href = `/employee/${employee._id}`}
                    >
                      View Profile
                    </button>
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
