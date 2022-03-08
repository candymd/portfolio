import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {useScrollHandler} from './Components/ScrollHandler'
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {

    const scroll = useScrollHandler()

    const scrollToTop = () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
    }

  return (
    <div className="App">
      <div onClick={scrollToTop} className={!scroll ? 'scrollToTop-active' : 'scrollToTop'}>
        <i className="fa-solid fa-arrow-up"/>
      </div>
      <Header  />
      <Hero />
        <AboutMe />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
