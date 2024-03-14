// LoginPage.js


import image from "../../assets/images/Aceprep.png";
import React, { useEffect } from 'react';

const DisableScrollComponent = () => {
    useEffect(() => {
      // Disable scrolling when the component mounts
      document.body.style.overflow = 'hidden';
  
      // Re-enable scrolling when the component unmounts
      return () => {
        document.body.style.overflow = 'scroll';
      };
    }, []);
  
    return (
        <div className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-gray-100 to-blue-900 flex justify-center items-center h-screen fixed-div  ">
        <div className="max-w-md w-full p-6 bg-white  shadow-md bg-opacity-30 backdrop-blur-sm rounded-3xl">
          <div className="text-center ">
              <div className='flex w-20 mx-auto  '>
                      <img
                      src={image} // Replace with your logo image path
                  
                      className="mx-auto justify-center items-center "
                  />
              </div>
          
            <h2 className="mb-2 text-2xl font-bold">Welcome Back!</h2>
            <p className="text-gray-600">Glad to see you again, <br />Login to your account below</p>
          </div>
          <form className="mt-6">
          <button
        className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-50 hover:opacity-100 "
      >Continue with Google
        <img
          src="/path/to/google-logo.png" // Replace with the actual Google logo image path
          alt="Google"
          className="h-5 w-5 ml-2"
        />
      </button>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded focus:outline-none  opacity-50 hover:opacity-100 "
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded focus:outline-none opacity-50 hover:opacity-100"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    );
  };
  

export default DisableScrollComponent;
