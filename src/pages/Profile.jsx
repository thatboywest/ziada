// src/pages/ProfilePage.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import UserInfo from '../components/UserInfo';
import EditProfile from '../components/EditProfile';
import ProfileActions from '../components/ProfileActions';
import TokenCard from '../components/TokenCard';

import JobList from '../components/JobList';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    gender: user?.gender || '',
    dob: user?.dob || '',
    jobTitle: user?.jobTitle || '',
    jobDescription: user?.jobDescription || '',
    county: user?.county || '',
    town: user?.town || '',
    companyName: user?.companyName || '',
    companyDescription: user?.companyDescription || '',
  });
  const [editMode, setEditMode] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null); // To manage selected jobId

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:8080/api/user/${user._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFormData(response.data);
      setEditMode(false);
      console.log('Profile updated:', response.data);
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/user/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      logout();
      console.log('Profile deleted');
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  if (!user) return null;

  return (
    <section className="section mt-6">
      <div className="container">
        {editMode ? (
          <EditProfile
            formData={formData}
            handleInputChange={handleInputChange}
            handleSave={handleSave}
            setEditMode={setEditMode}
          />
        ) : (
          <>
            <UserInfo user={user} formData={formData} />
            <ProfileActions
              editMode={editMode}
              setEditMode={setEditMode}
              handleDelete={handleDelete}
            />
          </>
        )}
        <div className="columns">
          {user.role === 'employee' && (
            <div className="column is-half">
              <TokenCard />
            </div>
          )}
          {user.role === 'employer' && (
            <>
              <div className="column is-half">
                <JobList userId={user._id} setSelectedJobId={setSelectedJobId} />
              </div>

            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
