import React from 'react';
import { CiFileOn } from "react-icons/ci";
// Card component for individual cards



const Card = ({ logo }) => {
  return (
    
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 m-2">
      <img className="w-16 h-16" src={logo} alt="Logo" />
    </div>
  );
};

// CardSection component to hold the cards in a horizontal line
const SheetCard= () => {
  return (

    <div>
        <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 dark:text-black leading-tight tracking-tighter animate-pulse py-8">
                Practice Sheets
            </h1>
        </div>

       
    
    <div className="flex justify-evenly items-center space-x-4 ">
    <div class=" shadow-lg rounded-lg  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg p-4 flex items-center justify-center space-x-2 px-6 py-4 bg-gray-100 gap-4 border-[3px]">
        <h1 class="text-lg font-bold transition duration-300 ease-in-out">Sheet 1</h1>
        {<CiFileOn size={30}/>}
    </div>
    <div class="shadow-lg rounded-lg  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg p-4 flex items-center justify-center space-x-2 px-6 py-4  bg-gray-100 gap-4 border-[3px]">
        <h1 class="text-lg font-bold transition duration-300 ease-in-out hover:text-blue-500">Sheet 2</h1>
        {<CiFileOn size={30} />}
    </div>
    <div class="shadow-lg rounded-lg  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg p-4 flex items-center justify-center space-x-2 px-6 py-4  bg-gray-100 gap-4 border-[3px]">
        <h1 class="text-lg font-bold transition duration-300 ease-in-out hover:text-blue-500">Sheet 3</h1>
        {<CiFileOn size={30} />}
    </div>
    <div class="shadow-lg rounded-lg  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg p-4 flex items-center justify-center space-x-2 px-6 py-4 bg-gray-100 gap-4 border-[3px]">
        <h1 class="text-lg font-bold transition duration-300 ease-in-out hover:text-blue-500">Sheet 4</h1>
        {<CiFileOn size={30} />}
    </div>    
    </div>
    </div>
  );
};

export default SheetCard;
