import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isSubscribed = localStorage.getItem('isSubscribed') === 'true';

  return isSubscribed ? children : <Navigate to="/account" />;
};

export default ProtectedRoute;
