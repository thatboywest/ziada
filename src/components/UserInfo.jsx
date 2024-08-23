import React from 'react';
import { FaEnvelope, FaPhone, FaUser, FaBriefcase, FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const UserInfo = ({ user, formData }) => {
  return (
    <div className="columns is-multiline">
      {user.role === 'employee' ? (
        <>
          <div className="column is-half mt-6">
            <div className="box has-background-danger-light">
              <div className="icon-text">
                <span className="icon has-text-danger">
                  <FaBriefcase />
                </span>
                <span className="text"><strong>Job Title:</strong> {formData.jobTitle}</span>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="box has-background-info-light">
              <div className="icon-text">
                <span className="icon has-text-info">
                  <FaCalendarAlt />
                </span>
                <span className="text"><strong>Date of Birth:</strong> {formData.dob}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="column is-half">
            <div className="box has-background-success-light">
              <div className="icon-text">
                <span className="icon has-text-success">
                  <FaBuilding />
                </span>
                <span className="text"><strong>Company Name:</strong> {formData.companyName}</span>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="box has-background-warning-light">
              <div className="icon-text">
                <span className="icon has-text-warning">
                  <FaBuilding />
                </span>
                <span className="text"><strong>Company Description:</strong> {formData.companyDescription}</span>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="column is-half">
        <div className="box has-background-light">
          <div className="icon-text">
            <span className="icon has-text-primary">
              <FaPhone />
            </span>
            <span className="text"><strong>Phone:</strong> {formData.phone}</span>
          </div>
        </div>
      </div>
      <div className="column is-half">
        <div className="box has-background-warning-light">
          <div className="icon-text">
            <span className="icon has-text-warning">
              <FaEnvelope />
            </span>
            <span className="text"><strong>Email:</strong> {formData.email}</span>
          </div>
        </div>
      </div>
      <div className="column is-half">
        <div className="box has-background-primary-light">
          <div className="icon-text">
            <span className="icon has-text-primary">
              <FaUser />
            </span>
            <span className="text"><strong>Name:</strong> {formData.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
