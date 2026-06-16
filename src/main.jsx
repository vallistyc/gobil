import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './cmp/Navbar'
import Hero from './sct/Hero'
import Service from './sct/Service'
import Banner from './sct/Banner'
import Location from './sct/Location'
import Profile from './sct/Profile'
import Testimoni from './sct/Testimoni'
import Cta from './sct/Cta'
import Footer from './sct/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Banner/>
    <Service/>
    <Location/>
    <Profile />
    <Testimoni />
    <Cta />
    <Footer />
  </StrictMode>,
)
