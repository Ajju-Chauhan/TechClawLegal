import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion"; // Import animation library

const Dashboard = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem("role");

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            {/* Animated Card */}
            <motion.div
                className="card shadow-lg p-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h2 
                    className="text-center mb-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to Your Dashboard 🎉
                </motion.h2>

                <motion.p 
                    className="text-muted text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Manage your tasks and stay updated with the latest company information. 🚀
                </motion.p>

                {/* Employee Actions */}
                {role === "Employee" && (
                    <div className="d-flex justify-content-center gap-3 mt-3">
                        <motion.button
                            className="btn btn-danger"
                            onClick={() => navigate("/resignation")}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Submit Resignation ✍️
                        </motion.button>

                        <motion.button
                            className="btn btn-warning"
                            onClick={() => navigate("/exit-interview")}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Exit Interview 📝
                        </motion.button>
                    </div>
                )}

                {/* Quick Links Section */}
                <div className="mt-4">
                    <h5 className="text-center text-primary">🌟 Quick Links & Resources</h5>
                    <motion.ul 
                        className="list-group list-group-flush"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <motion.li className="list-group-item" whileHover={{ scale: 1.05 }}>📌 Company Policies & Guidelines</motion.li>
                        <motion.li className="list-group-item" whileHover={{ scale: 1.05 }}>🛠️ Employee Support & HR Contact</motion.li>
                        <motion.li className="list-group-item" whileHover={{ scale: 1.05 }}>📅 Upcoming Events & Announcements</motion.li>
                        <motion.li className="list-group-item" whileHover={{ scale: 1.05 }}>📊 Performance & Career Growth</motion.li>
                    </motion.ul>
                </div>

                {/* Logout Button */}
                <div className="text-center mt-4">
                    <motion.button
                        className="btn btn-secondary"
                        onClick={handleLogout}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Logout 🚪
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Dashboard;
