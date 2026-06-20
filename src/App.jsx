import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TutorialModalProvider } from './cmp/TutorialModalContext'
import InstallTutorialModal from './cmp/InstallTutorialModal'
import TutorialFAB from './cmp/TutorialFAB'
import WhatsAppFAB from './cmp/WhatsAppFAB'
import Navbar from './cmp/Navbar'
import Home from './pages/Home'
import Driver from './pages/Driver'
import Mitra from './pages/Mitra'

function App() {
  return (
    <BrowserRouter>
      <TutorialModalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/mitra" element={<Mitra />} />
        </Routes>
        <InstallTutorialModal />
        <WhatsAppFAB />
        <TutorialFAB />
      </TutorialModalProvider>
    </BrowserRouter>
  )
}

export default App