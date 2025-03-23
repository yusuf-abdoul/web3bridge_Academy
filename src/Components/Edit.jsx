import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const students = JSON.parse(localStorage.getItem('students')) || [];
  const student = students[id];

  const [studentData, setStudentData] = useState(student || {
    name: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (!student) {
      navigate("/Admin");
    }
  }, [student, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    students[id] = studentData;
    localStorage.setItem('students', JSON.stringify(students));
    navigate('/Admin');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg sm:max-w-xs sm:p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
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
            placeholder="Enter email"
            value={studentData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={studentData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
