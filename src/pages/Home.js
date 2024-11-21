import React from 'react';
import '../styles/variables.css';
import '../styles/Hero.css';

const Home = () => {
    return (
        <section className="hero min-h-screen pt-16 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <img
                    src="/api/placeholder/150/150"
                    alt="Profile"
                    className="hero-image w-32 h-32 rounded-full mx-auto mb-8 object-cover"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Duke Zhu
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Full-stack Developer, UI/UX Designer, Game Developer
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Hi, I'm Duke! I'm a full-stack developer with a passion for building beautiful and functional user
                    interfaces. I have experience working with React, Node.js, and MongoDB. I'm also a UI/UX designer
                    and a game developer. I'm currently looking for new opportunities, so feel free to reach out to me!
                </p>
            </div>
        </section>
    );
};

export default Home;