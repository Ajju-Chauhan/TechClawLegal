import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ResignationForm from './components/ResignationForm';
import ExitInterviewForm from './components/ExitInterviewForm';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/resignation" element={<ResignationForm />} />
                <Route path="/exit-interview" element={<ExitInterviewForm />} />
            </Routes>
        </Router>
    );
};

export default App;
