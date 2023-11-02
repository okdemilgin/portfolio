import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Profile from './components/Profile';
import ScrollButton from './components/ScrollButton';

const App = () => {
  return (
 
      <div>
        <NavBar />
        <Home />
        <Profile/>
        <Skills />
        <Projects />
        <Contact />
        <SocialLinks />
        <ScrollButton />
      </div>
  
  );
};

export default App;