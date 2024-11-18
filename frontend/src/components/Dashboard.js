import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCourseForm from './AddCourseForm';

const Dashboard = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState('');
    const [showAddCourseForm, setShowAddCourseForm] = useState(false);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/courses', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setCourses(response.data);
        } catch (err) {
            console.error("Fetching Courses Failed:", err);
            setError('Failed to fetch courses. Please try again later.');
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const toggleAddCourseForm = () => {
        setShowAddCourseForm(!showAddCourseForm);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {error && <p>{error}</p>}
            <button onClick={toggleAddCourseForm}>
                {showAddCourseForm ? 'Cancel' : 'Add Course'}
            </button>
            {showAddCourseForm && <AddCourseForm />}
            <ul>
                {courses.map(course => (
                    <li key={course._id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;