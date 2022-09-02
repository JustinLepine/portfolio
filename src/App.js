import { Nav, Hero, Intro, Slider, Skills, Hobbies, Footer } from './components'
import ProjectLists from './components/Slider/ProjectList';
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Intro />
      <Slider ProjectLists = {ProjectLists} />
      <Skills />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
