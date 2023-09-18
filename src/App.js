import About from "./Components/About";
import Contact from "./Components/Contact";
import Credit from "./Components/Credit";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {

useEffect(() => {
    AOS.init({
      duration: 1000,
    });
}, [])

  return (
    <div>
      <Home />
      <About />
      <TechStack />
      <Projects/>
      <Contact />
      <Credit/>
    </div>
  );
}

export default App;
