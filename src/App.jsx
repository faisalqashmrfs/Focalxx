import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import { AcademyPage } from './XacademyPage/XacademyPage'
import CertificateAfterS from './components/CertificateAfterS/CertificateAfterS'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <LandingPage />}/>
      <Route path='/AcademyPage' element={ <AcademyPage />}/>
      <Route path='/Certificate/:id' element={ <CertificateAfterS />}/>
    </Routes>
    </>
  )
}

export default App
