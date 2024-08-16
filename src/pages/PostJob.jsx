import React, { useState } from 'react';
import axios from 'axios';

const JobPostForm = () => {
    const [formData, setFormData] = useState({
        category: '',
        jobTitle: '',
        description: '',
        timeline: '',
        price: '',
        paymentType: 'fixed',
        town: '',
        county: ''
    });
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('');
        const token = localStorage.getItem('token'); 

        try {
            const response = await axios.post('http://localhost:8080/api/jobs', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setSubmissionStatus('Job posted successfully!');
            setFormData({
                category: '',
                jobTitle: '',
                description: '',
                timeline: '',
                price: '',
                paymentType: 'fixed',
                town: '',
                county: ''
            });
            setCurrentStep(1); 
        } catch (error) {
            setSubmissionStatus('Failed to post job. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const goToNextStep = () => setCurrentStep(currentStep + 1);
    const goToPreviousStep = () => setCurrentStep(currentStep - 1);

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-half">
                    <div className="box">
                        <h1 className="title">{currentStep === 1 ? 'Post a Casual Job - Step 1' : 'Post a Casual Job - Step 2'}</h1>
                        {submissionStatus && <div className="notification is-info">{submissionStatus}</div>}
                        <form onSubmit={currentStep === 2 ? handleSubmit : (e) => e.preventDefault()}>
                            {currentStep === 1 && (
                                <>
                                    <div className="field">
                                        <label className="label">Category</label>
                                        <div className="control">
                                            <div className="select">
                                                <select
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Select a category</option>
                                                    <option value="Cleaning">Cleaning</option>
                                                    <option value="Tutoring">Tutoring</option>
                                                    <option value="Delivery">Delivery</option>
                                                </select>
                                            </div>
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
                                                onChange={handleChange}
                                                placeholder="Enter job title"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Job Description</label>
                                        <div className="control">
                                            <textarea
                                                className="textarea"
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                placeholder="Enter job description"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <button
                                                className="button is-primary"
                                                type="button"
                                                onClick={goToNextStep}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {currentStep === 2 && (
                                <>
                                    <div className="field">
                                        <label className="label">Timeline</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="date"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Price</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="number"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                placeholder="Enter price"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Payment Type</label>
                                        <div className="control">
                                            <div className="select">
                                                <select
                                                    name="paymentType"
                                                    value={formData.paymentType}
                                                    onChange={handleChange}
                                                >
                                                    <option value="fixed">Fixed</option>
                                                    <option value="negotiable">Negotiable</option>
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
                                                placeholder="Enter town"
                                                required
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
                                                onChange={handleChange}
                                                placeholder="Enter county"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <button
                                                className="button is-link"
                                                type="button"
                                                onClick={goToPreviousStep}
                                            >
                                                Back
                                            </button>
                                            <button
                                                className={`button is-primary ${isSubmitting ? 'is-loading' : ''}`}
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Post Job
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobPostForm;
