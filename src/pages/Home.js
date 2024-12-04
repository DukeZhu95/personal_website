// src/pages/Home.js
import React from 'react';
import '../styles/variables.css';
import '../styles/Hero.css';
import profileImage from '../images/1.jpg';

const Home = () => {
    return (
        <section className="hero min-h-screen pt-16 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="hero-image w-72 h-72 rounded-full mx-auto mb-8 object-cover"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Duke Zhu
                </h1>
                <p className="text-xl text-gray-700 mb-10">
                    Full-stack Developer, UI/UX Designer, Game Developer
                </p>

                <div className="text-left space-y-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    <p>
                        Hello! I'm Duke, a recent graduate with a Master's degree in Information Technology
                        from the University of Waikato. Throughout my academic journey, I've developed a
                        strong foundation in various programming languages and technologies, with particular
                        expertise in C++, React, and Java.
                    </p>

                    <p>
                        My passion for web front-end development has led me to thoroughly explore the React
                        ecosystem, where I've gained hands-on experience building responsive and user-friendly
                        interfaces. Additionally, my interest in game development has allowed me to leverage
                        my C++ and Java skills to create engaging gaming experiences.
                    </p>

                    <p>
                        What sets me apart is my ability to quickly adapt to new technologies and
                        programming paradigms. During my studies, I've demonstrated this by successfully
                        tackling diverse projects, from developing web applications using modern frameworks
                        to creating interactive games from scratch. This adaptability, combined with my
                        strong problem-solving skills, enables me to effectively tackle complex technical
                        challenges.
                    </p>

                    <p>
                        I'm particularly drawn to roles that allow me to combine my technical expertise
                        with creative problem-solving. Whether it's optimizing user interfaces, implementing
                        complex game mechanics, or learning new technologies, I approach each challenge with
                        enthusiasm and dedication.
                    </p>

                    <p>
                        Currently, I'm eager to begin my professional journey and contribute my skills to
                        innovative projects. I'm excited about opportunities where I can not only apply my
                        current knowledge but also continue growing and learning in a dynamic environment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;