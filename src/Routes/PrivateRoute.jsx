import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(authContext);
  const location = useLocation();


  if (loading) {
    return <h1 className='text-blue-600 font-bold text-4xl text-center mt-12'>Loading...</h1>;
  }

  if (user && user.email) {
    return children; 
  }

  return (
    <Navigate state={location.pathname} to={"/auth/login"} ></Navigate>
  );
}
