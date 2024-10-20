import React from "react";
import { Link } from "react-router-dom";
import './ForgotPassword.css'

function ForgotPassword() {
    return(
        <Link to='/PageForgotPassword' className='form-login-forgot-password'>Forgot your password?</Link>
    );
}

export default ForgotPassword;