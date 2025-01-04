import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { authContext } from '../provider/AuthProvider';

export default function ChangeProfileData() {
  const { user, updateUserProfile, setLoading } = useContext(authContext);

  const [error, setError] = useState(null); // State to handle errors

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;

    setLoading(true);

    // Update the user profile
    updateUserProfile({ displayName: name, photoURL: photo })
      .then((res) => {
        setError(null); // Clear any previous errors
        setLoading(false); // Reset loading state
      })
      .catch((err) => {
        console.error('Error updating profile:', err.code);
        setError('Failed to update profile. Please try again.');
        setLoading(false); // Reset loading state on error
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Update Data
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <Link to="/my-profile" className="text-blue-500 hover:underline py-5 p-3">
                Back to Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  