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
    const matchesMobile = useMediaQuery('(max-width:480px)');
    const matchesTablet = useMediaQuery('(max-width:1024px)');

    const scrollToTop = () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
    }

  return (
    <div className="App">
   {!matchesMobile && 
    <div onClick={scrollToTop} className={!scroll ? 'scrollToTop-active' : 'scrollToTop'}>
    <i className="fa-solid fa-arrow-up"/>
  </div>
   }  

   {matchesMobile && <BurgerMenu /> }
    {!matchesMobile && <Header />}
      <Hero matchesMobile={matchesMobile} matchesTablet={matchesTablet}  />
        <AboutMe matchesMobile={matchesMobile} matchesTablet={matchesTablet}  />
      <Skills />
      <Projects matchesMobile={!matchesMobile} matchesTablet={matchesTablet}  />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
