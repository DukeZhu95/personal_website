// src/components/Projects.js
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/Projects.css';
import gameScreenShot1 from '../images/Game1.jpg';
import gameScreenShot2 from '../images/Game2.jpg';
import gameScreenShot3 from '../images/Game3.jpg';
import gameScreenShot4 from '../images/Game4.jpg';
import mobileAppScreenShot1 from '../images/Mobile1.png';
import mobileAppScreenShot2 from '../images/Mobile2.png';
import mobileAppScreenShot3 from '../images/Mobile3.png';
import mobileAppScreenShot4 from '../images/Mobile4.png';
import courseManagementScreenShot1 from '../images/Course1.png';
import courseManagementScreenShot2 from '../images/Course2.png';
import courseManagementScreenShot3 from '../images/Course3.png';
import courseManagementScreenShot4 from '../images/Course4.png';

const Projects = () => {
    const projects = [
        {
            title: "Retro Adventure",
            description: "A pixel RPG game built with Java, featuring self-designed characters, monsters, and original background music. The game includes multiple levels, turn-based combat system, and character progression.",
            longDescription: [
                "Developed a complete RPG game system including character stats, inventory management, and save/load functionality",
                "Designed and created pixel art for game characters, monsters, and environments",
                "Composed and implemented original background music to enhance game atmosphere",
                "Implemented real-time combat system with various skills and items"
            ],
            tags: ["Java", "Java Swing"],
            techDetails: "Built using Java Swing for GUI, implemented custom pixel rendering system, and integrated audio playback functionality",
            link: "https://github.com/DukeZhu95/RetroAdventure",
            // 添加项目截图
            images: [gameScreenShot1, gameScreenShot2, gameScreenShot3, gameScreenShot4]
        },
        {
            title: "Building Inspection Smart Mobile App",
            description: "Front-end development of a mobile application for building inspections, developed during internship at Datacom (Tauranga).",
            longDescription: [
                "Developed responsive and intuitive user interfaces for building inspection processes",
                "Implemented real-time data synchronization with backend services",
                "Created dynamic forms for inspection checklists and reports",
                "Integrated camera functionality for photo documentation"
            ],
            tags: ["React Native", "TypeScript", "Node.js", "Expo"],
            techDetails: "Utilized React Native with TypeScript for type safety, integrated RESTful APIs, and implemented offline data persistence",
            link: "https://github.com/DukeZhu95/Final596",
            images: [mobileAppScreenShot1, mobileAppScreenShot2, mobileAppScreenShot3, mobileAppScreenShot4]
        },
        {
            title: "Course Management System",
            description: "A comprehensive web-based course management system enabling interaction between teachers and students, featuring role-based access control, real-time updates, and integrated assignment management. Built with Next.js and deployed on Netlify.",
            longDescription: [
                "Built a full-stack application with real-time updates using modern web technologies",
                "Implemented secure authentication and authorization with role-based access control",
                "Created intuitive UI/UX for both teacher and student roles using modern UI components",
                "Designed responsive interfaces with Tailwind CSS for optimal viewing across devices"
            ],
            tags: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Convex"],
            techDetails: "Utilized Next.js for the frontend framework, TypeScript for type safety, Tailwind CSS for styling, Clerk for authentication, and Convex for real-time database management. Implemented responsive design principles and modern UI/UX practices.",
            link: "https://github.com/DukeZhu95/application1",
            deployedLink: "https://stellar-licorice-823ee2.netlify.app",
            images: [courseManagementScreenShot1, courseManagementScreenShot2, courseManagementScreenShot3, courseManagementScreenShot4]
        }
    ];

    return (
        <section className="min-h-screen py-16 bg-[#fff5e6]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Projects Review
                </h2>
                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                            {/* 项目图片画廊 */}
                            <div className="w-full h-64 overflow-hidden">
                                <div className="flex gap-4 p-4 overflow-x-auto">
                                    {project.images?.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            className="h-48 rounded-lg object-cover shadow-md"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="p-6">
                                {/* 项目标题和简介 */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>

                                {/* 技术标签 */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* 详细功能列表 */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                                        {project.longDescription.map((desc, idx) => (
                                            <li key={idx}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 技术细节 */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800 mb-2">Technical Details:</h4>
                                    <p className="text-gray-600">{project.techDetails}</p>
                                </div>

                                {/* 链接部分 */}
                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.link}
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                    <Github size={20} />
                                    View Source Code
                                </a>
                                {project.deployedLink && (
                                    <a
                                        href={project.deployedLink}
                                        className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                    <ExternalLink size={20} />
                                    Live Demo
                                    </a>
                                )}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;