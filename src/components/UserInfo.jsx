import React from 'react';
import { FaEnvelope, FaPhone, FaBriefcase, FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const UserInfo = ({ user, formData }) => {
  return (
    <div className="columns is-centered mt-5">
      <div className="column is-three-quarters">
       
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src={formData.profilePhoto} alt="User Photo" className="is-rounded" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{formData.name}</p>
              </div>
            </div>
          </div>
        </div>

        
        {user.role === 'employee' ? (
          <div className="card mt-4">
            <div className="card-content">
              <div className="content">
                <div className="icon-text">
                  <span className="icon has-text-danger">
                    <FaBriefcase />
                  </span>
                  <span><strong>Job Title:</strong> {formData.jobTitle}</span>
                </div>
                <div className="icon-text">
                  <span className="icon has-text-info">
                    <FaCalendarAlt />
                  </span>
                  <span><strong>Date of Birth:</strong> {formData.dob}</span>
                </div>
                <div className="icon-text">
                  <span className="icon has-text-primary">
                    <FaPhone />
                  </span>
                  <span><strong>Phone:</strong> {formData.phone}</span>
                </div>
                <div className="icon-text">
                  <span className="icon has-text-warning">
                    <FaEnvelope />
                  </span>
                  <span><strong>Email:</strong> {formData.email}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="card mt-4">
            <div className="card-content">
              <div className="content">
                <div className="icon-text">
                  <span className="icon has-text-success">
                    <FaBuilding />
                  </span>
                  <span><strong>Company Name:</strong> {formData.companyName}</span>
                </div>
                <div className="icon-text">
                  <span className="icon has-text-warning">
                    <FaBuilding />
                  </span>
                  <span><strong>Company Description:</strong> {formData.companyDescription}</span>
                </div>
                <div className="icon-text">
                  <span className="icon has-text-primary">
                    <FaPhone />
                  </span>
                  <span><strong>Phone:</strong> {formData.phone}</span>
                </div>
                <div className="icon-text">
                  <span className="icon has-text-warning">
                    <FaEnvelope />
                  </span>
                  <span><strong>Email:</strong> {formData.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="card mt-4">
          <div className="card-content">
            <div className="content">
              <div className="icon-text">
                <span className="icon has-text-primary">
                  <FaPhone />
                </span>
                <span><strong>Phone:</strong> {formData.phone}</span>
              </div>
              <div className="icon-text">
                <span className="icon has-text-warning">
                  <FaEnvelope />
                </span>
                <span><strong>Email:</strong> {formData.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
