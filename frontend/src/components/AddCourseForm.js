// components/AddCourseForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCourseForm = () => {
   const [title, setTitle] = useState('');
   const [code, setCode] = useState('');
   const [description, setDescription] = useState('');
   const [startDate, setStartDate] = useState('');
   const [endDate, setEndDate] = useState('');
   const [instructorIds, setInstructorIds] = useState('');  // Comma-separated IDs
   const [studentIds, setStudentIds] = useState('');        // Comma-separated IDs

   const handleSubmit = async (e) => {
      e.preventDefault();

      const courseData = {
         title,
         code,
         description,
         startDate,
         endDate,
         instructorIds: instructorIds.split(',').map(id => id.trim()),
         studentIds: studentIds.split(',').map(id => id.trim())
      };

      try {
         const response = await axios.post('http://localhost:5000/api/courses', courseData);
         alert(`Course created successfully: ${response.data.course.title}`);
      } catch (error) {
         console.error('Error creating course:', error);
         alert('Error creating course');
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <input
            type="text"
            placeholder="Course Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
         />
         <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
         />
         <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
         />
         <input
            type="text"
            placeholder="Instructor IDs (comma-separated)"
            value={instructorIds}
            onChange={(e) => setInstructorIds(e.target.value)}
         />
         <input
            type="text"
            placeholder="Student IDs (comma-separated)"
            value={studentIds}
            onChange={(e) => setStudentIds(e.target.value)}
         />
         <button type="submit">Add Course</button>
      </form>
   );
};

export default AddCourseForm;
