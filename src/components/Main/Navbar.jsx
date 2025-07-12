import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Aceprep.png';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="AcePrep Logo" 
                className="h-10 w-auto transition-transform duration-200 group-hover:scale-105" 
              />
            </div>
            <span className="text-xl font-bold text-gradient">AcePrep</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/practice" className="nav-link">
              Practice
            </Link>
            <Link to="/mock" className="nav-link">
              Mock
            </Link>
            <Link to="/resources" className="nav-link">
              Resources
            </Link>
            <Link to="/ats" className="nav-link">
              ATS
            </Link>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 ml-4">
              <Link to="/login">
                <button className="btn-secondary text-sm py-2 px-4">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn-primary text-sm py-2 px-4">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Toggle navigation"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isNavOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isNavOpen 
            ? 'max-h-screen opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-4 bg-white/95 backdrop-blur-md border-t border-gray-100">
            <Link 
              to="/" 
              className="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/practice" 
              className="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsNavOpen(false)}
            >
              Practice
            </Link>
            <Link 
              to="/mock" 
              className="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsNavOpen(false)}
            >
              Mock
            </Link>
            <Link 
              to="/resources" 
              className="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsNavOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/ats" 
              className="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsNavOpen(false)}
            >
              ATS
            </Link>
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <Link to="/login" onClick={() => setIsNavOpen(false)}>
                <button className="w-full btn-secondary text-sm">
                  Log In
                </button>
              </Link>
              <Link to="/signup" onClick={() => setIsNavOpen(false)}>
                <button className="w-full btn-primary text-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
