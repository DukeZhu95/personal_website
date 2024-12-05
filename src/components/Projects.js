// src/components/Projects.js
import React from 'react';
import { Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Retro Adventure",
            description: "A pixel RPG game built with Java language...",
            tags: ["Java", "Java swing"],
            link: "https://github.com/DukeZhu95/RetroAdventure"
        },
        {
            title: "Front-end of Building Inspection Smart Mobile App",
            description: "Front-end pages of the project which was conducting during the internship of Datacom (Tauranga)...",
            tags: ["React Native", "TypeScript", "Node.js", "Expo"],
            link: "https://github.com/DukeZhu95/Final596"
        }
    ];

    return (
        <section className="min-h-screen py-16" style={{ backgroundColor: 'var(--background-primary)' }}>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Projects Review
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card rounded-lg p-6 bg-white" // 添加 project-card 类名，移除 bg-gray-50
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="project-tag px-3 py-1 rounded-full text-sm" // 添加 project-tag 类名，移除原来的颜色类
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link}
                               className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
                                <Github size={16}/>
                                review the code
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;