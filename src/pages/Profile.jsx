import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { FaEdit, FaTrashAlt, FaEnvelope, FaUser, FaCalendarAlt, FaBriefcase, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import JobList from '../components/JobList';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    gender: user?.gender || '',
    dob: user?.dob || '',
    jobTitle: user?.jobTitle || '',
    jobDescription: user?.jobDescription || '',
    county: user?.county || '',
    town: user?.town || '',
    companyName: user?.companyName || '',
    companyDescription: user?.companyDescription || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/user/${user._id}`, formData);
      setEditMode(false);
      console.log('Profile updated:', response.data);
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/user/${user._id}`);
      logout();
      console.log('Profile deleted');
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  if (!user) return null; // Handle loading or no user state

  return (
    <section className="section mt-6">
      <div className="container">
        <div className="box" style={{ padding: '0', borderRadius: '0' }}>
          {user.backgroundPhoto && (
            <figure className="image" style={{ height: '200px', overflow: 'hidden' }}>
              <img
                src={user.backgroundPhoto}
                alt="Background"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </figure>
          )}
          <div className="media" style={{ marginTop: '-100px', paddingBottom: '1rem', textAlign: 'center' }}>
            <figure className="image is-128x128" style={{ margin: '0 auto' }}>
              <img
                className="is-rounded"
                src={user.profilePhoto}
                alt="Profile"
                style={{ borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
              />
            </figure>
            <div className="media-content">
              <h1 className="title is-3">{formData.name}</h1>
              <p className="subtitle is-5">{formData.jobTitle || formData.companyName}</p>
            </div>
          </div>

          <div className="buttons" style={{ textAlign: 'center', marginTop: '20px' }}>
            {!editMode && (
              <>
                <button className="button is-link" onClick={() => setEditMode(true)}>
                  <FaEdit /> Edit
                </button>
                <button className="button is-danger" onClick={handleDelete}>
                  <FaTrashAlt /> Delete
                </button>
              </>
            )}
          </div>

          <div className="content">
            {editMode ? (
              <>
                {/* Form Fields for Editing */}
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {user.role === 'employee' && (
                  <>
                    <div className="field">
                      <label className="label">Gender</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Date of Birth</label>
                      <div className="control">
                        <input
                          className="input"
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Job Title</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Job Description</label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name="jobDescription"
                          value={formData.jobDescription}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">County</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="county"
                          value={formData.county}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Town</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="town"
                          value={formData.town}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </>
                )}

                {user.role === 'employer' && (
                  <>
                    <div className="field">
                      <label className="label">Company Name</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Company Description</label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name="companyDescription"
                          value={formData.companyDescription}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="buttons" style={{ marginTop: '20px', textAlign: 'center' }}>
                  <button className="button is-primary" onClick={handleSave}>
                    Save
                  </button>
                  <button className="button is-light" onClick={() => setEditMode(false)}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="columns is-multiline">
                {/* Display content based on user role */}
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
                  </>
                )}
                <div className="column is-half">
                  <div className="box has-background-warning-light">
                    <div className="icon-text">
                      <span className="icon has-text-warning">
                        <FaMapMarkerAlt />
                      </span>
                      <span className="text"><strong>Location:</strong> {formData.town}, {formData.county}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="box has-background-info-light">
                    <div className="icon-text">
                      <span className="icon has-text-info">
                        <FaEnvelope />
                      </span>
                      <span className="text"><strong>Email:</strong> {formData.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* JobList component here */}
        <JobList />
      </div>
    </section>
  );
};

export default ProfilePage;
