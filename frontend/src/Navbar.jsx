import { React, useState } from "react"
import { Link } from 'react-router-dom';
import logo from "./assets/logo.webp"

const Navbar = () => {
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent py-5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Docksboard Logo" className="h-10" />
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="px-5 py-2 rounded-md text-white font-medium hover:text-gray-100">
                            Home
                        </Link>
                        <Link to="/about" className="px-5 py-2 rounded-md text-white font-medium hover:text-gray-100">
                            About
                        </Link>
                        <Link to="/contact" className="px-5 py-2 rounded-md text-white font-medium hover:text-gray-100">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 py-3 px-2 bg-white rounded-lg shadow-lg">
                        <div className="flex flex-col space-y-3">
                            <Link
                                to="/"
                                className="px-4 py-2 rounded-md text-center border border-blue-600 text-blue-600 font-medium hover:bg-blue-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="px-4 py-2 rounded-md text-center bg-blue-600 text-white font-medium hover:bg-blue-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="px-4 py-2 rounded-md text-center border border-blue-600 text-blue-600 font-medium hover:bg-blue-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Navbar