// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer py-8"> {/* 添加 footer 类名，移除 bg-gray-800 和 text-white */}
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Duke Zhu. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;