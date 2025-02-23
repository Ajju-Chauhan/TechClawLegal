import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container text-center mt-5 fade-in">
            {/* Title with animation */}
            <h1 className="mb-3 fw-bold slide-in">
                ClawLegalTech Resignation System
            </h1>

            {/* Short About Company */}
            <p className="lead fade-in-delayed">
                ClawLegalTech is a leading HR tech company that simplifies resignation management and exit 
                interviews, ensuring a smooth transition for employees and HR professionals.
            </p>

            {/* Buttons */}
            <div className="mt-4">
                <Link to="/login">
                    <button className="btn btn-primary mx-2 px-4 py-2 animated-button">
                        Login
                    </button>
                </Link>
                <Link to="/register">
                    <button className="btn btn-outline-primary mx-2 px-4 py-2 animated-button">
                        Register
                    </button>
                </Link>
            </div>

            {/* Key Features */}
            <div className="mt-5">
                <h3 className="mb-3 fade-in">Key Features</h3>
                <ul className="list-group list-group-flush text-start d-inline-block fade-in-delayed">
                    <li className="list-group-item">🔹 Secure Employee & HR Authentication</li>
                    <li className="list-group-item">🔹 Simple Resignation Submission Process</li>
                    <li className="list-group-item">🔹 HR Approval & Workflow Automation</li>
                    <li className="list-group-item">🔹 Exit Interview Management</li>
                    <li className="list-group-item">🔹 Email Notifications via Nodemailer</li>
                </ul>
            </div>

            {/* Footer */}
            <footer className="mt-5 text-muted fade-in-delayed">
                &copy; 2025 ClawLegalTech
            </footer>

            {/* Keyframe Animations */}
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes slideIn {
                        from { transform: translateY(-20px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                    @keyframes buttonHover {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                        100% { transform: scale(1); }
                    }

                    .fade-in { animation: fadeIn 1s ease-in-out; }
                    .fade-in-delayed { animation: fadeIn 1.5s ease-in-out; }
                    .slide-in { animation: slideIn 1s ease-in-out; }
                    .animated-button {
                        transition: 0.3s ease-in-out;
                        font-size: 18px;
                        font-weight: 500;
                        border-radius: 8px;
                    }
                    .animated-button:hover {
                        animation: buttonHover 0.5s ease-in-out;
                        background-color: #007bff;
                        color: white;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
