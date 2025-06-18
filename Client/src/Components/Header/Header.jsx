import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/" className="flex items-center">
                        <span className="self-center text-[24px]  font-bold whitespace-nowrap  text-orange-500 ">
                            Dhobi . 
                        </span>
                        <span className='self-center text-[24px]  font-bold whitespace-nowrap text-gray-600'>
                                G
                        </span>
                    </Link>


                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu"
                        aria-expanded={menuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <div className="hidden lg:flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2"
                        >
                            Get started
                        </Link>
                    </div>

                    <div
                        className={`${menuOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 hover:text-orange-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 hover:text-orange-700`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 hover:text-orange-700`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>

                        <div className="flex flex-col items-start mt-4 space-y-2 lg:hidden">
                            <Link
                                to="/login"
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-800 font-medium px-4 py-2.5"
                            >
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                onClick={() => setMenuOpen(false)}
                                className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2.5"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
