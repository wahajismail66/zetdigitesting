import './App.css'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { MidSection } from './components/MidSection'
import { Navbar } from './components/Navbar'
import { SliderSection } from './components/SliderSection'
import { Testimonials } from './components/Testimonials'

const App = () => {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <MidSection/>
    <SliderSection/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
