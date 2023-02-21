import './App.css'

import Navbar from './compnents/navbar/Navbar'
import Hero from './compnents/hero/Hero'
import Techstack from './compnents/techstack/Techstack'
import Projects from './compnents/project_caro/Projects'
import Aboutme from './compnents/aboutme/Aboutme'
import Connect from './compnents/connect/Connect'
import Footer from './compnents/footer/Footer'
function App() {

  return(
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Techstack/>
      <Projects/>
      <Aboutme/>
      <Connect/>
      <Footer/>
    </div>
  )

}
export default App
