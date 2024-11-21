import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Retro Adventure",
            description: "A pixel RPG game built with Java language...",
            tags: ["Java", "Java swing"],
            link: "https://github.com/DukeZhu95/RetroAdventure"
        },
        {
            title: "项目名称 2",
            description: "一个基于 Python 的机器学习项目...",
            tags: ["Python", "TensorFlow", "Flask"],
            link: "https://github.com/yourusername/project2"
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Projects Review
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
                            >
                                <Github size={16} />
                                查看代码
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;