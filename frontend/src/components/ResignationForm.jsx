import React, { useState } from 'react';
import { submitResignation } from '../services/apiService';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResignationForm = () => {
    const [reason, setReason] = useState('');
    const [lastWorkingDay, setLastWorkingDay] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            await submitResignation({ reason, lastWorkingDay }, token);
            alert('✅ Your resignation request has been successfully submitted.');
            setReason('');
            setLastWorkingDay('');
        } catch (error) {
          const token = localStorage.getItem('token');
            alert('❌ Failed to submit resignation. Please try again later.');
        }

        setSubmitting(false);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">Resignation Submission</h2>
                <p className="text-muted text-center">
                    Please provide a reason for your resignation and select your last working day.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Reason for Resignation</label>
                        <textarea 
                            className="form-control"
                            rows="3"
                            placeholder="Enter your reason..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Last Working Day</label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            value={lastWorkingDay}
                            onChange={(e) => setLastWorkingDay(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-sm btn-danger w-20" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResignationForm;
