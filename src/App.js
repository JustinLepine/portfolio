import { Nav, Hero, Intro, Apps, Skills, Footer } from './components'
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Intro />
      <Apps />
      {/* <Projects /> */}
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
