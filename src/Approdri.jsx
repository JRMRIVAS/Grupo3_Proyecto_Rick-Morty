import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Landing from './components/Landing.jsx'
import Profile from './components/Profile.jsx'

import Header from './components/Header'
import Footer from './components/Footer'
import './assets/css/estilos.css'
import './assets/css/style.css'
import './assets/css/Lstyle.css'
import './assets/css/Profile.css'
import './assets/css/rodristyle.css'
import './assets/css/styleEd.css'
function App() {
  console.log(window.location.origin);

    const { isAuthenticated } = useAuth0();
    return (
      <>
      {
        isAuthenticated ? (
          <> 
            <Header />
            <Footer />
          </>
        ) : (
          <Landing />
        )
      }
    </>
  )
}

export default App
