import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import WorkerJobCard from '../components/WorkerJobCard';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You need to log in first.');
          setTimeout(() => {
            navigate('/login'); 
          }, 2000);
          return; 
        }

        const response = await axios.get('https://ziadaapi.onrender.com/api/jobs/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const shuffledJobs = response.data.sort(() => Math.random() - 0.5);
        setJobs(shuffledJobs);
        setFilteredJobs(shuffledJobs);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setError('You need to log in first.');
          setTimeout(() => {
            navigate('/login'); 
          }, 2000);
        } else {
          setError('Error fetching jobs');
          console.error('Error fetching jobs:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [navigate]); 

  useEffect(() => {
    const applyFilters = () => {
      let results = jobs;

      if (search) {
        results = results.filter(job =>
          job.jobTitle.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (selectedTown) {
        results = results.filter(job => job.town === selectedTown);
      }

      if (selectedCounty) {
        results = results.filter(job => job.county === selectedCounty);
      }

      setFilteredJobs(results);
    };

    applyFilters();
  }, [search, selectedTown, selectedCounty, jobs]);

  if (loading) return <div className="notification is-info">Loading...</div>;
  if (error) return <div className="notification is-danger">{error}</div>;

  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-one-quarter">
          <aside className="menu">
            <p className="menu-label">Filters</p>
            <div className="menu-list">
              <div className="field">
                <label className="label">Search</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search by title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Town</label>
                <div className="control">
                  <div className="select">
                    <select
                      value={selectedTown}
                      onChange={(e) => setSelectedTown(e.target.value)}
                    >
                      <option value="">All Towns</option>
                      {[...new Set(jobs.map(job => job.town))].map(town => (
                        <option key={town} value={town}>{town}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">County</label>
                <div className="control">
                  <div className="select">
                    <select
                      value={selectedCounty}
                      onChange={(e) => setSelectedCounty(e.target.value)}
                    >
                      <option value="">All Counties</option>
                      {[...new Set(jobs.map(job => job.county))].map(county => (
                        <option key={county} value={county}>{county}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="column is-three-quarters">
          <h1 className="title mt-6 has-text-centered">Jobs Available</h1>
          <div className="columns is-multiline">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div className="column is-one-third" key={job._id}>
                  <WorkerJobCard job={job} />
                </div>
              ))
            ) : (
              <div className="column is-half">
                <div className="card has-background-warning-light">
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <p>No jobs found</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
