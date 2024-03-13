import React from 'react';
import { FaBookOpen } from "react-icons/fa6";
import { LiaNewspaper } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFile } from "react-icons/fa";

const Card = ({ title, logo, buttonText }) => {
  return (

    
    <div className ="w-96 h-60 bg-white shadow-lg rounded-lg p-6 m-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg p-4 bg-white rounded-lg bg-gray-100 gap-4 border-[3px]">
      <h1 className="font-bold text-xl mb-2">{title}</h1>
      {/* <img className="w-10 h-10 mb-4" src={logo} alt="Logo" /> */}
      {logo }
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {buttonText}
      </button>
    </div>
  );
};

const CardSection = () => {
  return (
<div>
    <div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 dark:text-black leading-tight tracking-tighter animate-pulse py-8">
      Important Questions
    </h1>
            </div>
    <div className="flex justify-center items-center">
      <Card title="Questions" logo={<FaBookOpen />} buttonText="Button 1" />
      <Card title="Aptitude" logo={<LiaNewspaper />} buttonText="Button 2" />
      <Card title="MCQs" logo={<GiHamburgerMenu />} buttonText="Button 3" />
      <Card title="Practice Sheets" logo={<FaFile />} buttonText="Button 4" />
    </div>

    </div>
  );
};

export default CardSection;
