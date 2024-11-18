// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        slapID: '',
        password: '',
        role: ''
    });

    const [message, setMessage] = useState('');

    const { slapID, password, role } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);

            // Store the token in localStorage or handle it as needed
            localStorage.setItem('token', res.data.token);
            setMessage('Registered successfully!');
        } catch (error) {
            console.error('Registration error:', error.response.data);
            setMessage('Registration failed.');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>SlapID:</label>
                    <input
                        type="text"
                        name="slapID"
                        value={slapID}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select name="role" value={role} onChange={onChange}>
                        <option value="">Select Role</option>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Register;
