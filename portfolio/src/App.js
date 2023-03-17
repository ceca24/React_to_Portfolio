import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}