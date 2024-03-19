import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const OTPPage = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setOtp(value);
  };


  return (
    <div className=" bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-gray-100 to-blue-900 flex justify-center items-center h-screen fixed-div">
      <div className="p-10 bg-white/30 backdrop-blur-md rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-4">Enter OTP</h1>
        <p className="text-center mb-8">We've sent an OTP to your email</p>
    
        <input
          type="password"
          placeholder="Enter otp"
          onChange={handleChange}
          maxLength={6}
          className="w-full p-3 mb-6 border-none rounded-md shadow-sm focus:ring-2 focus:ring-blue-300 "
        />
        <button className="w-full p-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-300 ease-in-out ">
          Verify
        </button>
      </div>
    </div>
  );
};

export default OTPPage;
