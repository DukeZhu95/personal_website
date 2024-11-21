import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
  );
};

export default App;