
        import { useState } from 'react';

        function Navbar() {
            const [isNavOpen, setIsNavOpen] = useState(false);

            const toggleNav = () => {
                setIsNavOpen(!isNavOpen);
            };

            return (
                <div className="flex justify-between items-center py-4 px-6 drop-shadow-2xl sticky top-0 bg-white md:flex-row md:justify-between md:items-center">
                    <div className="text-2xl font-bold">AcePrep</div>
                    <div className="md:hidden">
                        <button
                            className="focus:outline-none"
                            onClick={toggleNav}
                        >
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
                            isNavOpen ? 'block' : 'hidden'
                        } md:flex md:justify-center md:items-center gap-8 flex-col md:flex-row`}
                    >
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">Practice</a>
                        <a href="#" className="hover:text-gray-300">Mock</a>
                        <a href="#" className="hover:text-gray-300">Resources</a>
                        <a href="#" className="hover:text-gray-300">ATS</a>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 mx-3 rounded-lg">Log In</button>
                            <button className="bg-gray-300 hover:bg-green-600 text-white font-bold py-1 px-4 rounded-lg">Sign Up</button>

                        </div>
                    </div>
                </div>
            );
        }

        export default Navbar;
