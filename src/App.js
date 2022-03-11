import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {useScrollHandler} from './Components/ScrollHandler'
import AboutMe from "./Components/AboutMe/AboutMe";
import BurgerMenu from "./Components/Header/BurgerMenu";
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

    const scroll = useScrollHandler()
    const matches = useMediaQuery('(max-width:600px)');

    const scrollToTop = () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
    }

  return (
    <div className="App">
   {!matches && 
    <div onClick={scrollToTop} className={!scroll ? 'scrollToTop-active' : 'scrollToTop'}>
    <i className="fa-solid fa-arrow-up"/>
  </div>
   }  

   {matches && <BurgerMenu /> }
    {!matches && <Header />}
      <Hero matches={matches} />
        <AboutMe matches={matches} />
      <Skills />
      <Projects matches={matches} />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
