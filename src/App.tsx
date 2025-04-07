import Layout from "./components/layout";
import About from "./components/Sections/about";
import Contact from "./components/Sections/contact";
import Education from "./components/Sections/education";
import Experience from "./components/Sections/experience";
import Projects from "./components/Sections/projects";
import {useState} from 'react'
import Navbar from "./components/Sections/navbar";
import Hero from "./components/Sections/hero";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };
 
  return (
    <Layout title="Codex By Hamed">
      <Navbar toggleDarkMode ={toggleDarkMode} />
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
