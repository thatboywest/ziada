import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';



const counties = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Nakuru', 'Kericho', 'Thika', 'Kitui', 'Meru', 'Machakos', 'Kajiado', 'Garissa', 'Wajir', 'Mandera', 'Isiolo', 'Marsabit', 'Nyeri', 'Kirinyaga', 'Nyandarua', 'Laikipia'
];


const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    email: '',
    phone: '', 
    password: '',
    confirmPassword: '',
    profilePhoto: null,
    gender: '',
    dob: '',
    backgroundPhoto: null,
    jobTitle: '',
    jobDescription: '',
    county: '',
    town: '',
    companyName: '',
    companyDescription: '',
  });

  const validatePhoneNumber = (phone) => {
    const kenyanPhonePattern = /^(07|01|\+2547)\d{8}$/;

    return kenyanPhonePattern.test(phone);
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.role) {
        alert('Please select a role.');
        return;
      }
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone) {
        alert('Please fill in all required fields.');
        return;
      }
      if (!validatePhoneNumber(formData.phone)) {
        alert('Please enter a valid Kenyan phone number.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      if (!formData.profilePhoto) {
        alert('Please upload your profile photo.');
        return;
      }
    } else if (step === 2 && formData.role === 'employee') {
      if (!formData.gender || !formData.dob || !formData.backgroundPhoto) {
        alert('Please fill in all required fields.');
        return;
      }
    } else if (step === 3 && formData.role === 'employee') {
      if (!formData.jobTitle || !formData.jobDescription || !formData.county || !formData.town) {
        alert('Please fill in all required fields.');
        return;
      }
    } else if (step === 2 && formData.role === 'employer') {
      if (!formData.companyName || !formData.companyDescription) {
        alert('Please fill in all required fields.');
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrevious = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.role === 'employee') {
      const dob = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
      }
      if (age < 18) {
        alert('You must be at least 18 years old to sign up.');
        setIsSubmitting(false);
        return;
      }
    }

    const apiFormData = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        apiFormData.append(key, formData[key]);
      }
    }

    try {
      const endpoint = formData.role === 'employee' ? 'https://ziadaapi.onrender.com/api/signup' : 'https://ziadaapi.onrender.com/api/signup';
      const response = await axios.post(endpoint, apiFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);
      alert('Signup successful!');
      navigate('/login')
     
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="card">
              <div className="card-content">
                <h1 className="title is-4 has-text-centered">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <>
                      <h2 className="subtitle is-5">Step 1: Account Information</h2>
                      <div className="field">
                        <label className="label">Role</label>
                        <div className="control">
                          <div className="select">
                            <select name="role" value={formData.role} onChange={handleChange} required>
                              <option value="">Select your role</option>
                              <option value="employer">Employer</option>
                              <option value="employee">Employee</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
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
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Phone</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                          <input
                            className="input"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                          <input
                            className="input"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Profile Photo</label>
                        <div className="control">
                          <input
                            className="input"
                            type="file"
                            name="profilePhoto"
                            onChange={handleChange}
                            accept="image/*"
                            required
                          />
                        </div>
                      </div>
                      <div className="buttons">
                        <button
                          className="button is-primary"
                          type="button"
                          onClick={handleNext}
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}
                  {step === 2 && formData.role === 'employee' && (
                    <>
                      <h2 className="subtitle is-5">Step 2: Personal Information</h2>
                      <div className="field">
                        <label className="label">Gender</label>
                        <div className="control">
                          <div className="select">
                            <select name="gender" value={formData.gender} onChange={handleChange} required>
                              <option value="">Select your gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
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
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Background Photo</label>
                        <div className="control">
                          <input
                            className="input"
                            type="file"
                            name="backgroundPhoto"
                            onChange={handleChange}
                            accept="image/*"
                            required
                          />
                        </div>
                      </div>
                      <div className="buttons">
                        <button
                          className="button is-light"
                          type="button"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        <button
                          className="button is-primary"
                          type="button"
                          onClick={handleNext}
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}
                  {step === 3 && formData.role === 'employee' && (
                    <>
                      <h2 className="subtitle is-5">Step 3: Job Information</h2>
                      <div className="field">
                        <label className="label">Job Title</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            required
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
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">County</label>
                        <div className="control">
                          <div className="select">
                            <select name="county" value={formData.county} onChange={handleChange} required>
                              <option value="">Select your county</option>
                              {counties.map((county) => (
                                <option key={county} value={county}>
                                  {county}
                                </option>
                              ))}
                            </select>
                          </div>
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
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="buttons">
                        <button
                          className="button is-light"
                          type="button"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        <button
                          className="button is-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                      </div>
                    </>
                  )}
                  {step === 2 && formData.role === 'employer' && (
                    <>
                      <h2 className="subtitle is-5">Step 2: Company Information</h2>
                      <div className="field">
                        <label className="label">Company Name</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
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
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="buttons">
                        <button
                          className="button is-light"
                          type="button"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        <button
                          className="button is-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;

