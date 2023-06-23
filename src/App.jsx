import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Landing from './components/Landing.jsx'
import Profile from './components/Profile.jsx'

function App() {
  console.log(window.location.origin);

    const { isAuthenticated } = useAuth0();
    return (
      <>
      {
        isAuthenticated ? (
          <> 
            <Profile />
          </>
        ) : (
          <Landing />
        )
      }
      </>
    )
}

export default App
