import { Nav, Hero, Intro, Projects, Skills, Footer } from './components'
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Intro />
      <Projects />
      {/* <Projects /> */}
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
