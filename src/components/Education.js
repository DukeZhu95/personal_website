// src/components/Education.js
import React from 'react';
import { GraduationCap, Book, Award, Code } from 'lucide-react';  // 引入图标
import '../styles/Education.css';
import waikatoLogo from '../images/waikato-logo.png'; // 导入校徽图片

const Education = () => {
    const education = [
        {
            school: "University of Waikato",
            degree: "Master of Information Technology",
            period: "Feb 2023 - Nov 2024",
            location: "Hamilton, New Zealand",
            courses: [
                {
                    name: "Programming with Web Technology",
                    description: "In this comprehensive web development course, " +
                        "I mastered both front-end and back-end technologies. " +
                        "Beyond learning the fundamentals of HTML, CSS, and JavaScript, " +
                        "I gained practical experience in database integration with web applications. " +
                        "I successfully developed a social media blog platform similar to X(Twitter), " +
                        "which strengthened my understanding of full-stack development and database management. " +
                        "This course significantly enhanced my ability to build user-friendly web applications" +
                        " with robust database functionality and improved my skills in handling user data " +
                        "and dynamic content management."
                },
                {
                    name: "Programming for Industry",
                    description: "In this foundational course, " +
                        "I deepened my understanding of Object-Oriented Programming (OOP) through Java development. " +
                        "The course equipped me with essential software engineering skills, " +
                        "where I learned to apply core OOP principles including encapsulation, inheritance, " +
                        "and polymorphism. I developed several Java applications that helped me master " +
                        "design patterns and modern development tools. " +
                        "This hands-on experience not only enhanced my programming capabilities but also " +
                        "taught me industry-standard practices for writing clean, maintainable code."
                },
                {
                    name: "Programming Tools and Techniques",
                    description: "This advanced course significantly expanded my development toolkit and " +
                        "cross-platform development capabilities. Building upon previous courses, " +
                        "I deepened my expertise in version control with Git and Linux shell scripting. " +
                        "The course introduced me to modern web development frameworks including jQuery and React.js, " +
                        "along with REST API integration. A significant portion focused on mobile development, " +
                        "where I learned Android development using Android Studio, " +
                        "including essential skills like gradle configuration and SDK management. " +
                        "This comprehensive exposure to both web and mobile development technologies " +
                        "has greatly enhanced my ability to work across different platforms and handle diverse " +
                        "development challenges."
                },
                {
                    name: "Programming Project",
                    description: "This project-focused course is designed to cultivate students' ability to " +
                        "independently develop small-scale applications. As part of this course, " +
                        "I independently developed a retro-style pixel RPG game using Java, " +
                        "demonstrating my ability to create a complete software solution from conception " +
                        "to implementation. " +
                        "What makes this project unique is that I not only handled the programming aspects but also " +
                        "showcased my creative abilities by designing and pixel-drawing all character and " +
                        "monster portraits, as well as composing the background music. " +
                        "Throughout the development process, " +
                        "I took full responsibility for every aspect: " +
                        "from initial project planning and requirements analysis to system architecture design, " +
                        "user interface implementation, and multimedia content creation. " +
                        "The project enhanced my practical skills in software development methodology, " +
                        "teaching me how to effectively manage project timelines, handle technical challenges, " +
                        "and create user-centered solutions. " +
                        "This comprehensive experience not only strengthened my programming abilities but also " +
                        "demonstrated my capability to blend technical expertise with creative design in " +
                        "delivering a complete gaming experience."
                }
            ],
            projects: [
                {
                    title: "Building Inspection Smart Mobile App",
                    role: "Front-end Developer Intern",
                    company: "Datacom",
                    details: [
                        "Developed mobile application interfaces using React Native and TypeScript",
                        "Implemented responsive design principles and user-friendly navigation",
                        "Collaborated with back-end team for API integration",
                        "Participated in agile development process with regular sprints"
                    ]
                }
            ],
            achievements: [
                "Research and Enterprise Study Award - 2024",
                "Consistently achieved high grades in programming-related courses",
                "Active participant in university's tech community"
            ],
            skills_gained: [
                "Full-stack web development",
                "Game development",
                "Mobile app development",
                "Agile methodologies",
                "Software testing & debugging",
                "Team collaboration"
            ]
        }
    ];

    return (
        <section className="education-section min-h-screen py-16" style={{ backgroundColor: 'var(--background-primary)' }}>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Education Background
                </h2>

                {education.map((edu, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-8 space-y-8">
                        {/* 学校信息和校徽 */}
                        <div className="flex items-start justify-between border-b pb-6">
                            <div className="flex items-start">
                                <GraduationCap className="w-8 h-8 text-yellow-500 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900">University of Waikato</h3>
                                    <p className="text-xl text-gray-600">Master of Information Technology</p>
                                    <p className="text-gray-500">Feb 2023 - Nov 2024 | Hamilton, New Zealand</p>
                                </div>
                            </div>
                            <img
                                src={waikatoLogo}
                                alt="University of Waikato Logo"
                                className="w-24 h-24 object-contain"
                            />
                        </div>

                        {/* 课程信息 */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Book className="w-6 h-6 text-yellow-500 mr-3" />
                                <h4 className="text-xl font-semibold text-gray-800">Key Courses</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-9">
                                {edu.courses.map((course, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                                        <h5 className="font-semibold text-gray-800 mb-2">{course.name}</h5>
                                        <p className="text-gray-600 text-sm">{course.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 实习项目 */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Code className="w-6 h-6 text-yellow-500 mr-3" />
                                <h4 className="text-xl font-semibold text-gray-800">Internship Experience</h4>
                            </div>
                            {edu.projects.map((project, idx) => (
                                <div key={idx} className="pl-9">
                                    <h5 className="font-semibold text-gray-800 mb-2">{project.title}</h5>
                                    <p className="text-gray-600 mb-2">{project.role} at {project.company}</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                                        {project.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* 成就和技能 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Award className="w-6 h-6 text-yellow-500 mr-3" />
                                    <h4 className="text-xl font-semibold text-gray-800">Achievements</h4>
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-9">
                                    {edu.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Code className="w-6 h-6 text-yellow-500 mr-3" />
                                    <h4 className="text-xl font-semibold text-gray-800">Skills Gained</h4>
                                </div>
                                <div className="pl-9 flex flex-wrap gap-2">
                                    {edu.skills_gained.map((skill, idx) => (
                                        <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;