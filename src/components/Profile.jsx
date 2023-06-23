import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './../assets/css/Profile.css'
import LogoutButton from './Logout.jsx'

export default function Profile() {
    const {isAuthenticated, user} = useAuth0();
    return (
        isAuthenticated && (
            <div className='dropstart'>
                <img className='userIcon' data-bs-toggle='dropdown' aria-expanded='false' src={user.picture} alt={user.name} />
                <ul className='dropdown-menu'>
                    <li>
                        <div id='profile' className='container card d-flex align-items-center justify-content-center p-5 dropdown-menu'>
                            <img className='userImage' src={user.picture} alt={user.name}/>
                            <p className='userInfo p-3'>{user.name} <br /> {user.email}</p>
                            <LogoutButton/>
                        </div>
                    </li>
                </ul>
            </div>
        )
    )
}
