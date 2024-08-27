import React, { useState } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const JobCard = ({ job }) => {
  const {
    _id,
    category,
    jobTitle,
    description,
    timeline,
    price,
    paymentType,
    town,
    county,
    interestedUsers,
    
  } = job;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDelete = async (jobId) => {
    const endpoint = `https://ziadaapi.onrender.com/api/jobs`; 
    const token = localStorage.getItem('token');
  
    try {
      await axios.delete(`${endpoint}/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Job deleted successfully');
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('Failed to delete job');
    }
  };
  
  const handleMarkAsDone = async (jobId) => {
    const endpoint = `https://ziadaapi.onrender.com/api/jobs`; 
    const token = localStorage.getItem('token');
  
    try {
      await axios.patch(`${endpoint}/${jobId}/done`, { status: 'done' }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Job marked as done');
    } catch (error) {
      console.error('Error marking job as done:', error);
      alert('Failed to mark job as done');
    }
  };
  

  return (
    <div className="card" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <header className="card-header">
        <p className="card-header-title is-size-4">
          {jobTitle}
        </p>
        <button
          className="card-header-icon button is-danger is-small"
          aria-label="delete"
          onClick={() => handleDelete(_id)}
        >
          <span className="icon is-small">
            <FaTrashAlt />
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          <p className="title is-5 has-text-info">{category}</p>
          <p>{description}</p>
          <p className="is-size-6 has-text-grey">{town}, {county}</p>
          <p className="is-size-6">
            <span className="has-text-primary">{paymentType}</span> - ${price}
          </p>
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <span className="has-text-grey">{new Date(timeline).toLocaleDateString()}</span>
        </div>
        <div className="card-footer-item ml-auto">
          <button
            className="button is-success is-small"
            onClick={() => handleMarkAsDone(_id)}
            disabled={status === 'done'}
          >
            <span className="icon is-small">
              <FaCheck />
            </span>
            <span>Mark as Done</span>
          </button>
        </div>
        <div className="card-footer-item">
          <button
            className="button is-info is-small"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            <span>Interested Users</span>
          </button>
        </div>
      </footer>
      {isDropdownOpen && interestedUsers.length > 0 && (
        <div className="card-content">
          <ul>
            {interestedUsers.map(user => (
              <li key={user._id}>
                {user.name} - {user.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
      {isDropdownOpen && interestedUsers.length === 0 && (
        <div className="card-content">
          <p>No users have shown interest in this job.</p>
        </div>
      )}
    </div>
  );
};

export default JobCard;
