import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button type="button" className='btn btn-danger px-4' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>CERRAR SESION</button>
    );
};

export default LogoutButton;