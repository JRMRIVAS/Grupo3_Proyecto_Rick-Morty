import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Landing from './components/Landing.jsx'
import Profile from './components/Profile.jsx'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
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
