import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import './styles/variables.css';
import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/Education.css';
import './styles/Projects.css';
import './styles/Contact.css';
import './styles/Footer.css';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/education" element={<EducationPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;