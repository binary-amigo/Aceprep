import React from 'react';
import myImage from '../../../assets/images/practice.gif'; // Replace 'image.jpg' with your image file's name


const FooterImage = () => {
  return (
    <div className='grid grid-cols-2'>
        
        {/* photo */}
        <div className="p-20">
            <img
                src={myImage} // Replace with your image path
                alt="Sample"
                className=" h-auto shadow-lg rounded"
            />
        </div>
    {/* text boxes */}
        <div className='grid gap-8'>
            {/* <div className='border-black  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg   space-x-2 px-6 py-8  bg-gray-100 gap-4 border-[3px] rounded-3xl mt-20 mb-20 p-10 pt-4 pb-24  '> */}
                <div className='border-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg  bg-gray-100 border-[3px] rounded-3xl p-5 mx-10 mt-20 '>
                    <div className='pt-12'>
                        <h1 className='text-xl font-bold'>Mock Assessment</h1>
                        <p>Assess your coding skills</p>
                    </div>
            </div>
            <div className='border-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg  bg-gray-100 border-[3px] rounded-3xl p-5 mx-10 mb-20'>
                    <div className='pt-12'>
                        <h1 className='text-xl font-bold'>Mock Assessment</h1>
                        <p>Assess your coding skills</p>
                    </div>
            </div>
        </div>
    </div>

            

    
    
  );
};

export default FooterImage;
