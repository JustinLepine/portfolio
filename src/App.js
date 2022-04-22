import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
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
    </div>
  );
}

export default App;
