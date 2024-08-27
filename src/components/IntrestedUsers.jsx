import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterestedUsers = ({ jobId }) => {
  const [interestedUsers, setInterestedUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterestedUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://ziadaapi.onrender.com/api/job/${jobId}/interested-users`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setInterestedUsers(response.data.interestedUsers);
      } catch (err) {
        setError('Failed to fetch interested users');
      }
    };

    if (jobId) {
      fetchInterestedUsers();
    }
  }, [jobId]);

  if (!jobId) return <p>Please select a job to see interested users.</p>;
  if (error) return <p className="has-text-danger">{error}</p>;

  return (
    <div>
      <h3 className="title">Interested Users</h3>
      {interestedUsers.length === 0 ? (
        <p>No users have shown interest in this job yet.</p>
      ) : (
        <ul>
          {interestedUsers.map(user => (
            <li key={user._id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InterestedUsers;
