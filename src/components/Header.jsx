import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';

export default function Header() {
  const { user, logOut } = useContext(authContext);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-300 to-white shadow-md">
      <div className="navbar">
        {/* Logo Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/brands'}>Brands</Link>
            </li>
            <li>
              <Link to={'/about-dev'}>About Dev</Link>
            </li>
            <li>
              {
                user&& user.email? <Link to={'/my-profile'}>My profile</Link>:""
              }
            </li>
            </ul>
          </div>
          <div className="logo   hidden md:flex  gap-4 flex-wrap items-center">
            <Link to={'/'}>
              <img
                className="rounded-full w-[40px] border-2 border-white"
                src="https://i.postimg.cc/8cmg7stD/1.png"
                alt=""
              />
            </Link>
            <Link
              className="font-bold text-3xl text-white drop-shadow-lg"
              to={'/'}>
              Coupon Hunter
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/brands'}>Brands</Link>
            </li>
            <li>
              <Link to={'/about-dev'}>About Dev</Link>
            </li>
            <li>
              {
                user&& user.email? <Link to={'/my-profile'}>My profile</Link>:""
              }
            </li>
            <li>{user&& user?.photoURL? <img src={user.photoURL} className='w-[70px] rounded-full'></img>:""}</li>
          </ul>
        </div>

        {/* User Section */}
        <div className="navbar-end space-x-4">
          {user && (
            <p className="font-semibold text-black">
              {user.email}
            </p>
          )}
          {user && user?.email ? (
            <button
              onClick={logOut}
              className="btn bg-white text-blue-500 font-semibold hover:bg-blue-100">
              Log Out
            </button>
          ) : (
            <div className="flex gap-5 items-center">
              <Link
                to={'/auth/login'}
                className="btn bg-white text-blue-500 font-semibold hover:bg-blue-100">
                Login
              </Link>
              <Link
                to={'/auth/registration'}
                className="btn bg-white text-blue-500 font-semibold hover:bg-blue-100">
                Registration
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="text-center mt-5">
        <h1 className="text-4xl  font-semibold text-white drop-shadow-lg">
          Welcome {user?.displayName || 'Guest'}
        </h1>
        <p className="text-white mt-2 text-xl pb-5">Embrace the winter savings!</p>
      </div>
    </div>
  );
}
