import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';  // 注意这里是 Github 而不是 GitHub

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">
                    联系方式
                </h2>
                <div className="space-y-6">
                    <a href="mailto:your.email@example.com" className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900">
                        <Mail size={20} />
                        your.email@example.com
                    </a>
                    <a href="https://github.com/yourusername" className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900">
                        <Github size={20} />  {/* 这里使用 Github 而不是 GitHub */}
                        github.com/yourusername
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900">
                        <Linkedin size={20} />
                        linkedin.com/in/yourprofile
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;