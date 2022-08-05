import { Nav, Hero, Intro, Projects, Slider, Skills, Footer } from './components'
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Intro />
      <Slider />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
