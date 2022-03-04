import './App.css';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
    <Header/>
      <Hero />
    <Projects />
    </div>
  );
}

export default App;
