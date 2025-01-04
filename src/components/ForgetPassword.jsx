import React, { useContext, useState } from 'react'
import { authContext } from '../provider/AuthProvider'
import { Link } from 'react-router-dom'

export default function ForgetPassword() {

    const{user,logOut,resetPassword,setLoading,setTempEmail,tempEmail}=useContext(authContext)
    const[error,setError]=useState("")

    const handleReset=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;

        resetPassword(email)
        .then(res=> {
            logOut()
            setTempEmail("")
           
        })
        .catch(err=> {
            setError(err.code)
    })
    }

  return (
    <div>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleReset} className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={tempEmail}
                
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
                {/* Error Message */}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button onClick={() => window.open('https://mail.google.com', '_blank')}  type="submit" className="btn btn-primary">
                  Sent Mail
                </button>
              </div>
            </form>

            {/* Back to Profile Link */}
            <div className="mt-4 text-center">
              <Link to="/auth/login" className="text-blue-500 hover:underline p-5">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
