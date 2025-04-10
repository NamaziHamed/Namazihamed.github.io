import Layout from "./components/layout";
import About from "./components/Sections/about";
import Contact from "./components/Sections/contact";
import Education from "./components/Sections/education";
import Experience from "./components/Sections/experience";
import Projects from "./components/Sections/projects";
import {useEffect, useState } from "react";
import Navbar from "./components/Sections/navbar";
import Hero from "./components/Sections/hero";
import useThemeStore from "./store/store";

function App() {
  
  const {darkMode, setDarkMode} = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout title="Codex By Hamed">
      <Navbar
        toggleDarkMode={toggleDarkMode}
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
