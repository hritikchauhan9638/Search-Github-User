import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  // rest here are props that are going to be on children component
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  if (!isUser) {
    return <Navigate to='/login' />;
  }
  return children;
};
export default PrivateRoute;
