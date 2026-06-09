import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App = () => (
  <Layout>
    <Hero />
    <About />
    <Skills />
    <Education />
    <Experience />
    <Projects />
    <Certifications />
    <Achievements />
    <Contact />
  </Layout>
);

export default App;
