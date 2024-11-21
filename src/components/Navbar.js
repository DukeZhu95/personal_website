// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: "Home", to: "/" },             // 更新了链接
        { title: "About", to: "/about" },
        { title: "Education", to: "/education" },
        { title: "Projects", to: "/projects" },
        { title: "Contact", to: "/contact" }
    ];

    return (
        <nav className="navbar fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex-shrink-0 font-bold text-xl text-gray-800">
                        Duke Zhu
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.title}
                                to={item.to}
                                className="navbar-link text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.to}
                                    className="navbar-link text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;