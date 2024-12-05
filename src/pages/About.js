// src/pages/About.js
import React from 'react';
import { Code, Globe, Heart, Target } from 'lucide-react'; // 导入图标

const About = () => {
    return (
        <div className="min-h-screen pt-20" style={{ backgroundColor: 'var(--background-primary)' }}>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                    About Me
                </h2>

                <div className="space-y-12">
                    {/* 个人背景 */}
                    <section
                        className="bg-white p-8 rounded-lg shadow-md transform hover:scale-[1.02] transition-transform">
                        <div className="flex items-center mb-6">
                            <Globe className="w-8 h-8 text-yellow-500 mr-4"/>
                            <h3 className="text-2xl font-semibold text-gray-800">Background</h3>
                        </div>
                        <p className="leading-relaxed text-gray-600">
                            Born and raised in China, I've always been fascinated by technology and its potential
                            to shape our future. This passion led me to pursue higher education in New Zealand,
                            where I've gained not only academic knowledge but also valuable cross-cultural
                            perspectives and communication skills.
                        </p>
                    </section>

                    {/* 专业技能 */}
                    <section
                        className="bg-white p-8 rounded-lg shadow-md transform hover:scale-[1.02] transition-transform">
                        <div className="flex items-center mb-6">
                            <Code className="w-8 h-8 text-yellow-500 mr-4"/>
                            <h3 className="text-2xl font-semibold text-gray-800">Technical Skills</h3>
                        </div>
                        <p className="leading-relaxed text-gray-600 mb-6">
                            I specialize in multiple programming languages and technologies:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-lg text-gray-800 mb-4">Programming Languages</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                        C++ (STL, Object-Oriented Programming)
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                        JavaScript/TypeScript (ES6+)
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                        Java (Spring Framework)
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-lg text-gray-800 mb-4">Web Technologies</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                        React (Hooks, Router, Redux)
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                        HTML5 & CSS3
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                        Node.js & Express
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 兴趣爱好 */}
                    <section
                        className="bg-white p-8 rounded-lg shadow-md transform hover:scale-[1.02] transition-transform">
                        <div className="flex items-center mb-6">
                            <Heart className="w-8 h-8 text-yellow-500 mr-4"/>
                            <h3 className="text-2xl font-semibold text-gray-800">Outside of Coding</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="leading-relaxed text-gray-600">
                                In my spare time, I enjoy reinforcing my programming knowledge and exploring new
                                technologies.
                                What excites me most is applying what I've learned to my hobbies - whether it's
                                developing
                                small games with C++ or creating web pages about game rules using web technologies.
                                These
                                projects not only strengthen my skills but also fuel my passion for programming.
                            </p>
                            <p className="leading-relaxed text-gray-600">
                                Beyond computer games, I'm an enthusiast of billiards and fitness. I'm drawn to
                                billiards
                                not just because it's a "gentleman's sport," but also for its ability to cultivate focus
                                and concentration, which resonates well with my calm personality. As for fitness, it not
                                only helps prevent health issues associated with a sedentary lifestyle but also helps
                                shape
                                the body and maintain a positive mental state.
                            </p>
                        </div>
                    </section>

                    {/* 职业目标 */}
                    <section
                        className="bg-white p-8 rounded-lg shadow-md transform hover:scale-[1.02] transition-transform">
                        <div className="flex items-center mb-6">
                            <Target className="w-8 h-8 text-yellow-500 mr-4"/>
                            <h3 className="text-2xl font-semibold text-gray-800">Career Goals</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="leading-relaxed text-gray-600">
                                Looking ahead, I aim to contribute to innovative projects that challenge me technically
                                and creatively. I'm particularly interested in opportunities that allow me to work on
                                both front-end development and game development, while continuing to learn and grow
                                as a developer.
                            </p>
                            <p className="leading-relaxed text-gray-600">
                                My immediate goal is to find a role where I can apply my diverse skill set in a
                                practical
                                setting. Whether it's crafting intuitive user interfaces or developing engaging game
                                features,
                                I'm excited about the prospect of turning my academic knowledge into real-world
                                solutions.
                                Long-term, I aspire to become a well-rounded developer who can bridge the gap between
                                web
                                technologies and game development, creating meaningful experiences that combine the best
                                of
                                both worlds.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;