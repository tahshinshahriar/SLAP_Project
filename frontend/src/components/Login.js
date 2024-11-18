// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [slapID, setSlapID] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                slapID,
                password
            });

            // Store the token in localStorage or handle it as needed
            localStorage.setItem('token', response.data.token);
            setMessage('Logged in successfully!');
            navigate('/dashboard'); // Redirect to the dashboard
        } catch (error) {
            console.error('Login error:', error.response.data);
            setMessage('Invalid slapID or password.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token to log out
        setMessage('Logged out successfully!');
    };

    return (
        <div>
            <h2>Login</h2> 
            
            <form onSubmit={handleLogin}>
                <div>
                    <label>SlapID:</label>
                    <input
                        type="text"
                        value={slapID}
                        onChange={(e) => setSlapID(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={handleLogout}>Logout</button>
            {message && <p>{message}</p>}
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    );
};

export default Login;
