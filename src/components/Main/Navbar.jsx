import { useState, useEffect } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-white shadow-mdt"
      }`}
    >
      <div className="text-2xl font-bold">AcePrep</div>
      <div className="md:hidden">
        <button className="focus:outline-none" onClick={toggleNav}>
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isNavOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } md:flex md:justify-center md:items-center gap-8 flex-col md:flex-row`}
      >
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Practice
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Mock
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Resources
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          ATS
        </a>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 mx-3 rounded-lg">
            Log In
          </button>
          <button className="bg-gray-300 hover:bg-green-600 text-white font-bold py-1 px-4 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
