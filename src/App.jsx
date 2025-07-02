import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import GridOverlay from './components/grid/GridOverlay'
import Contacts from './components/Contacts'

function App() {
  

  return (
    <>
    <GridOverlay/>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Contacts/>
   <Footer/>
   </>
  )
}

export default App
