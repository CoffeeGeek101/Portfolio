import './App.css'

import Navbar from './compnents/navbar/Navbar'
import Hero from './compnents/hero/Hero'
import Techstack from './compnents/techstack/Techstack'
import Projects from './compnents/project_caro/Projects'
function App() {

  return(
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Techstack/>
      <Projects/>
    </div>
  )

}
export default App
