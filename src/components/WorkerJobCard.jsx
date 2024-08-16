import React from 'react';


const WorkerJobCard = ({ job }) => {
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
        <p className="tag is-dark">
          Posted by: {job.user.email}
        </p>
      </footer>
    </div>
  );
};

export default WorkerJobCard;
