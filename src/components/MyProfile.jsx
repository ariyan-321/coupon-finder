import React, { useContext, useState, useEffect } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

export default function MyProfile() {
  const { user, updateUserProfile, setLoading } = useContext(authContext);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <div
      className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="text-center pt-20 text-white" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold drop-shadow-md">Welcome to Your Profile!</h1>
        <p className="text-lg mt-4 font-medium drop-shadow-sm">
          Manage your account settings and personalize your experience.
        </p>
      </div>

      <div className="profile flex flex-col items-center mt-16 space-y-8" data-aos="fade-up">
        <img
          className="rounded-full w-[150px] h-[150px] border-4 border-white shadow-lg"
          src={user.photoURL || 'https://via.placeholder.com/150'}
          alt="Profile"
          data-aos="zoom-in" // Adding zoom-in animation to the profile image
        />
        <h1 className="font-semibold text-3xl text-black drop-shadow-md" data-aos="fade-up">
          {user.displayName || 'Name not available'}
        </h1>
        <p className="text-xl font-medium text-black drop-shadow-sm" data-aos="fade-up">
          {user.email}
        </p>
        <Link
          to={"/change-profile-data"}
          className="px-6 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition duration-200"
          data-aos="fade-up" // Adding fade-up animation to the button
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
}
