import React from 'react'
import Navbar from './components/Navbars';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contacts />
      </div>
      <Toaster />

    </>
  )
}

export default App