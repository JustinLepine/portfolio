import Layout from '../components/layout/Layout.tsx'
import Hero from '../components/sections/Hero.tsx'
import About from '../components/sections/About.tsx'
import Story from '../components/sections/Story.tsx'
import '../styles/global.scss'

function Landing() {
  return (
    <Layout>
      <div className='landing'>
        <Hero />
        <About />
        <Story />
      </div>
    </Layout>
  )
}

export default Landing
