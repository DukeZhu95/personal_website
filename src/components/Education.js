// src/components/Education.js
import React from 'react';
import '../styles/Education.css';

const Education = () => {
    const education = [
        {
            school: "University of Waikato",
            degree: "Master of Information Technology",
            period: "Feb 2023 - Nov 2024",
            details: [
                // "GPA: X.XX/4.00",
                "Courses: Programming with Web Technology, Programming for Industry, Programming Tools and Techniques, etc.",
                "Internship: Building Inspection Smart Mobile App",
                "Research and Enterprise Study Award - 2024"
            ]
        }
    ];

    return (
        <section className="education-section min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Education Background
                </h2>
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="education-card bg-white rounded-lg shadow-md p-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">{edu.school}</h3>
                            <p className="text-gray-600">{edu.degree}</p>
                            <p className="text-gray-500 text-sm mb-4">{edu.period}</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {edu.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;