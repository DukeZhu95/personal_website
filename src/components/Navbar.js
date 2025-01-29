// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: "Home", to: "/" },
        { title: "About Me", to: "/about" },
        { title: "Education", to: "/education" },
        { title: "Projects", to: "/projects" },
        { title: "Contact", to: "/contact" }
    ];

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <div className="nav-header">
                    <Link to="/" className="nav-logo">
                        Duke Zhu
                    </Link>

                    <button
                        className="menu-button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="nav-menu">
                        {menuItems.map((item) => (
                            <Link
                                key={item.title}
                                to={item.to}
                                className="menu-item"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;