import React from "react";
import { Link } from "react-router-dom";
import "./SingUp.css"


function SingUp() {
    return(
        <span className='form-login-singup'><span className='form-login-singup-text'>Don't have an account?</span><Link className='form-login-singup-url' to='/PageSingUp'>Sing up for Spotify</Link></span>
    );
}

export default SingUp;