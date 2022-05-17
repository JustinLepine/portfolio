import { Nav, Hero, Intro, Projects, Skills } from './components'
import "./App.scss";

function App() {
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove("app__scroll-up");
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("app__scroll-down")) {
      body.classList.remove("app__scroll-up");
      body.classList.add("app__scroll-down");
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains("app__scroll-down")
    ) {
      body.classList.remove("app__scroll-down");
      body.classList.add("app__scroll-up");
    }
    lastScroll = currentScroll;
  });

  return (
    <div className="app">
      <Nav />
      <Hero />
      <Intro />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
