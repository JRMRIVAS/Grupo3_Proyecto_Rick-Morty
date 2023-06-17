import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Profile.css'
import LogoutButton from './Logout.jsx'
import rickMorty from './assets/rick_morty_favicon.png'

export default function Profile() {
    const {isAuthenticated, user} = useAuth0();
    return (
        isAuthenticated && (
            <div id='profile' className='container d-flex align-items-center justify-content-center'>
                <div className='card d-flex align-items-center justify-content-center p-5'>
                    <img className='userImage' src={user.picture} alt={user.name}/>
                    <p className='userInfo'>Usuario: {user.name}</p>
                    <p className='userInfo'>Correo: {user.email}</p>
                    <LogoutButton/>
                </div>
            </div>
        )
    )
}
