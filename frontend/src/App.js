import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';  // Import the Dashboard component

const App = () => {
    return (
        <Router>
            <div>
                <h1>Welcome to SLAP</h1>
                <Routes>
                    <Route path="/" element={<Login />} />  {/* Login page at root */}
                    <Route path="/register" element={<Register />} />  {/* Register page */}
                    <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;