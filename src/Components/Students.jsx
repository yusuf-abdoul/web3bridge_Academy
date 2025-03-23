import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router';

const Students = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(studentData);
    localStorage.setItem('students', JSON.stringify(students));

    setStudentData({
      name: '',
      email: '',
      phoneNumber: '',
    });

    alert('Registration Successful');
  };

  return (
    <div className="bg-gray-400 max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg sm:max-w-xs sm:p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Student Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={studentData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={studentData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">PhoneNumber</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={studentData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="flex-1 w-full py-2 px-4 bg-green-200 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200 sm:w-auto"
        >
         Register
        </button>
        <Link to="/admin" className=" flex-col text-center ml-8 mt-4 text-red-400 hover:underline">Admin Login</Link>
      </form>
    </div>
  )
}

export default Students