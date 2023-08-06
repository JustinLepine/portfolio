import {  Hero, Intro, Slider, Skills
  // , Hobbies 
} from './components'
import ProjectLists from './components/Slider/ProjectList';
import "./App.scss";
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <div className="app">
      <Layout>
        <Hero />
        <Intro />
        <Slider ProjectLists = {ProjectLists} />
        <Skills />
        {/* <Hobbies /> */}
      </Layout>
    </div>
  );
}

export default App;
