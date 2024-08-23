import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkerJobCard = ({ job }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    // Check if the request has already been sent
    const checkRequestStatus = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`http://localhost:8080/api/job/${job._id}/request-status`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setRequestSent(response.data.requestSent);
      } catch (error) {
        console.error('Error fetching request status:', error);
      }
    };

    checkRequestStatus();
  }, [job._id]);

  const handleSendJobRequest = async () => {
    if (requestSent) return; 

    setLoading(true);
    setError(null);
    setSuccess(null);

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:8080/api/interest', {
        jobId: job._id,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      setRequestSent(true);
      setSuccess('Job request sent successfully!');
    } catch (err) {
      setError('Failed to send job request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const postedDate = new Date(job.postedDate);
  const now = new Date();
  const timeDiff = Math.floor((now - postedDate) / (1000 * 60 * 60));
  const postedTime = timeDiff < 1 ? 'New' : `${timeDiff} hrs ago`;
  const statusClass = job.status === 'Active' ? 'is-success' : 'is-light';

  return (
    <div className="card mb-4">
      <div className="card-header">
        <p className="card-header-title is-size-4 has-text-weight-bold">{job.jobTitle}</p>
        <p className={`tag is-small ${timeDiff < 1 ? 'is-success' : 'is-light'} has-text-grey`}>
          {postedTime}
        </p>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="is-size-6 has-text-weight-semibold">{job.category}</p>
          <p className="is-size-6">{job.description}</p>
          <div className="columns is-mobile is-vcentered">
            <div className="column">
              <p className="is-size-6">
                <span className="tag is-info">{job.paymentType}</span>
                <span className="tag is-primary">${job.price}</span>
              </p>
            </div>
            <div className="column">
              <p className="is-size-6">
                <span className="tag is-light">{job.town}</span>
                <span className="tag is-light">{job.county}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <p className="card-footer-item has-text-grey">
          Timeline: {new Date(job.timeline).toLocaleDateString()}
        </p>
        <p className={`card-footer-item ${statusClass} has-text-weight-bold`}>
          {job.status}
        </p>
      </div>
      <footer className="card-footer">
        <button
          onClick={handleSendJobRequest}
          className={`button ${requestSent ? 'is-success' : 'is-dark'} is-small`}
          disabled={loading || requestSent}
        >
          {loading ? 'Sending...' : requestSent ? 'Request Sent' : 'Send Job Request'}
        </button>
        {error && <p className="has-text-danger">{error}</p>}
        {success && <p className="has-text-success">{success}</p>}
      </footer>
    </div>
  );
};

export default WorkerJobCard;
