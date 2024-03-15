import  { useState } from 'react';

const AIRole = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-200 focus:ring-blue-500"
        >
          Options
          {/* Icon for dropdown */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {/* Dropdown menu items */}
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Menu Item 1
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Menu Item 2
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
              >
                Menu Item 3
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIRole;
