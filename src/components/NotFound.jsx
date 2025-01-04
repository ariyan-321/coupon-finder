import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center space-y-6 p-6 max-w-lg">
        <h1 className="text-6xl font-extrabold">404</h1>
        <h2 className="text-2xl font-semibold">Oops! Page Not Found</h2>
        <p className="text-lg">
          The page you are looking for does not exist. It might have been
          removed or the URL might be incorrect.
        </p>
        <Link to="/" className="btn btn-primary shadow-lg hover:scale-105 transition-transform">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
