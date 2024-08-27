import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../context/AuthContext';
import UserInfo from '../components/UserInfo';
import EditProfile from '../components/EditProfile';
import ProfileActions from '../components/ProfileActions';
import TokenCard from '../components/TokenCard';
import JobList from '../components/JobList';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: user?.name || '',
    profilePhoto: user?.profilePhoto || '',
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
  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `https://ziadaapi.onrender.com/api/user/${user._id}`,
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
      await axios.delete(`https://ziadaapi.onrender.com/api/user/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      logout();
      console.log('Profile deleted');
      navigate('/login');
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  

  useEffect(() => {
    if (!user) {
      navigate('/login'); 
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered mb-5">
          <div className="column is-8">
           
            <div className="card">
              <div className="card-content">
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
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-centered">
      
          {user.role === 'employee' && (
            <div className="column is-8">
              <TokenCard />
            </div>
          )}
          {user.role === 'employer' && (
            <div className="column is-8">
              <JobList userId={user._id} setSelectedJobId={setSelectedJobId} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
