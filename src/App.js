import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
 const scrollToTop = () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 }


  return (
    <div className="App">
      <div onClick={scrollToTop} className="scrollToTop">
        <i className="fa-solid fa-arrow-up"/>
      </div>
      <Header  />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
