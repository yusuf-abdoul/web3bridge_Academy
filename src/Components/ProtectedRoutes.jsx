import React from 'react';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAdmin') === 'true';

  return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;