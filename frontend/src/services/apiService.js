import axios from 'axios';

const API_URL = 'https://clawlegal-tech-1.onrender.com';

export const register = async (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const login = async (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const submitResignation = async (resignationData, token) => 
    axios.post(`${API_URL}/resignation/submit`, resignationData, {
        headers: { Authorization: `Bearer ${token}` }
    });

export const submitExitInterview = async (interviewData, token) => 
    axios.post(`${API_URL}/employee/exit-interview`, interviewData, {
        headers: { Authorization: `Bearer ${token}` }
    });
