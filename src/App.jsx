import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';



function App() {
  return (
    <div className="app-container">
      <Background />
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="education"><Education /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
