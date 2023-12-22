import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Dashboard from '../leads/Dashboard';
// import Login from '../accounts/Login';

const PrivateRoute = ({ path, children }) => {
  const auth = useSelector(state => state.auth);

  return (
    <Routes>
      <Route path={path} element={auth?.isAuthenticated ? children : <Navigate to="/login" replace />} />
    </Routes>
  );
};

export default PrivateRoute;
