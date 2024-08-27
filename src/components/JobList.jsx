import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard'

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const endpoint = 'https://ziadaapi.onrender.com/api';
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${endpoint}/jobs`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setJobs(response.data);
            } catch (error) {
                setError('Error fetching jobs');
                console.error('Error fetching jobs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [endpoint, token]);

    if (loading) return <div className="notification is-info">Loading...</div>;
    if (error) return <div className="notification is-danger">{error}</div>;

    return (
        <div className="container">
            <h1 className='title mt-6 has-text-centered'>
                Jobs you posted
            </h1>

            <div className="columns is-multiline">
                {jobs.length > 0 ? (
                    jobs.map(job => (
                        <div className="column " key={job._id}>
                            <JobCard job={job} />
                        </div>
                    ))
                ) : (
                    <div className="column is-full">
                        <div className="notification is-warning">
                            <p className="has-text-centered">No jobs found</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobList;
