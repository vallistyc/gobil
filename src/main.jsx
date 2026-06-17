import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TutorialModalProvider } from './cmp/TutorialModalContext'
import InstallTutorialModal from './cmp/InstallTutorialModal'
import TutorialFAB from './cmp/TutorialFAB'
import Navbar from './cmp/Navbar'
import Hero from './sct/Hero'
import Service from './sct/Service'
import Banner from './sct/Banner'
import Location from './sct/Location'
import Profile from './sct/Profile'
import Testimoni from './sct/Testimoni'
import Cta from './sct/Cta'
import WhatsAppFAB from './cmp/WhatsAppFAB'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TutorialModalProvider>
      <Navbar />
      <Hero />
      <Banner/>
      <Service/>
      <Location/>
      <Profile />
      <Testimoni />
      <Cta />
      <InstallTutorialModal />
      <WhatsAppFAB/>
      <TutorialFAB />
    </TutorialModalProvider>
  </StrictMode>,
)