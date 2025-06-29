import './styles/index.css'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import HeroSection from './Pages/Home/heroSection'
import LastestProjectsSection from './Pages/Home/lasterProjectsSection'
function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <LastestProjectsSection></LastestProjectsSection>
      <Footer></Footer>
    </>
  )
}

export default App
