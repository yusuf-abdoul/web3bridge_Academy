import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Admin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email === 'admin@example.com' && credentials.password === 'admin123') {
      localStorage.setItem('isAdmin', true);
      navigate('/Admindash');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="bg-gray-400 max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Admin Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter admin email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter admin password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 mb-4 bg-green-300 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
        >
          Login
        </button>
        <Link to="/" className="flex-1 text-center mt-8 text-red-500 hover:underline">
          Student Register
        </Link>
      </form>
    </div>
  );
};

export default Admin;
