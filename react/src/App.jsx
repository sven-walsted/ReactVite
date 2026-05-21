
import { Route, Routes } from 'react-router'

import '@uswds/uswds/css/uswds.css'

import LandingMain from './applications/uswdsTemplates/landing-main.jsx'
import ModalMain from './applications/uswdsComponents/modal/modal-main.jsx'
import Index from './applications/welcome/index'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<LandingMain />} />
        <Route path="modal" element={<ModalMain />} />
      </Routes> 
    </>
  )
}

export default App
