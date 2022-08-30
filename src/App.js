import { Nav, Hero, Intro, 
  // Projects,
   Slider, Skills, Footer } from './components'
// import ProjectLists from './components/Projects/ProjectList';
import ProjectLists from './components/Slider/ProjectList';
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Intro />
      <Slider ProjectLists = {ProjectLists} />
      {/* <Projects /> */}
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
