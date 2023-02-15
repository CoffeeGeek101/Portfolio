import './App.css'

import Navbar from './compnents/navbar/Navbar'
import Hero from './compnents/hero/Hero'
import Techstack from './compnents/techstack/Techstack'
function App() {

  return(
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Techstack/>
    </div>
  )

}
export default App
