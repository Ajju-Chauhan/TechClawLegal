import React, { useState } from 'react';
import { submitExitInterview } from '../services/apiService';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExitInterviewForm = () => {
    const [feedback, setFeedback] = useState('');
    const token = localStorage.getItem('token');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            await submitExitInterview({ feedback }, token);
            alert('✅ Exit Interview feedback submitted successfully.');
            setFeedback('');
        } catch (error) {
            alert('❌ Error submitting feedback. Please try again.');
        }

        setSubmitting(false);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">Exit Interview Feedback</h2>
                <p className="text-muted text-center">
                    Please share your feedback about your experience with the company.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Your Feedback</label>
                        <textarea 
                            className="form-control"
                            rows="4"
                            placeholder="Write your feedback here..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-sm btn-primary w-20" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ExitInterviewForm;
