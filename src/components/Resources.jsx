import React from 'react';
import Navbar from './Main/Navbar'


const  Resources = () => {
  const buttons = [
    { id: 1, link: '#', label: 'Strivers SDE Sheet' },
    { id: 2, link: '#', label: 'Strivers A2Z DSA Course' },
    { id: 3, link: '#', label: 'Modern Web Development' },
    { id: 4, link: '#', label: 'Complete Git and GitHub Tutorial' },
    { id: 5, link: '#', label: 'Figma UI Design Tutorial' },
    { id: 6, link: '#', label: 'Android Development' },
    { id: 7, link: '#', label: '0 to 100 Machine Learning' },
    { id: 8, link: '#', label: 'DSA Sheet by Love Babbar' },
    { id: 9, link: '#', label: '10 DSA Cheat Sheet For Interview' },
    { id: 10, link: '#', label: 'Apna College DSA Sheet' },
    { id: 11, link: '#', label: 'Java with DSA' }
  ];

  return (
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-100 via-slate-300 to-slate-500">
    <div><Navbar /></div>
    <div className="flex justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 dark:text-black leading-tight tracking-tighter animate-pulse py-8">
        Learning Materials
      </h1>
    </div>
    <div className="flex flex-col items-start mt-15  ">
      {buttons.map((button) => (
        <a
          key={button.id}
          href={button.link}

          className="flex drop-shadow-2xl bg-gray-100 text-black font-bold py-8 w-5/6 ml-12 px-4 size-auto text-xl hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded-2xl shadow-lg transition duration-300 ease-in-out mb-5   text-left "
            style={{flex: "1 0 auto"}}
        >
                {button.label}
        </a>
      ))}
    </div>
    </div>
  );
};

export default Resources;
