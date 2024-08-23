import React from 'react';

const EditProfile = ({ formData, handleInputChange, handleSave, setEditMode }) => {
  return (
    <>
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
      <div className="field">
        <label className="label">Phone Number</label>
        <div className="control">
          <input
            className="input"
            type="tel"
            name="phone"
            value={formData.phone}
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
  );
};

export default EditProfile;
