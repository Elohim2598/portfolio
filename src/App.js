import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Projects />
      <Skills />
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;
