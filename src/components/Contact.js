// src/components/Contact.js
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-section min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">
                    Contact Me:
                </h2>
                <div className="space-y-6">
                    <a
                        href="mailto:zlnirvana4@gmail.com"
                        className="contact-link flex items-center justify-center gap-2 text-gray-600" // 添加 contact-link 类名，移除 hover 效果
                    >
                        <Mail size={20}/>
                        zlnirvana4@gmail.com
                    </a>
                    <a
                        href="https://github.com/DukeZhu95"
                        className="contact-link flex items-center justify-center gap-2 text-gray-600" // 添加 contact-link 类名
                    >
                        <Github size={20}/>
                        github.com/DukeZhu95
                    </a>
                    <a
                        href="https://linkedin.com/in/dukezhu"
                        className="contact-link flex items-center justify-center gap-2 text-gray-600" // 添加 contact-link 类名
                    >
                        <Linkedin size={20}/>
                        linkedin.com/in/dukezhu
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;