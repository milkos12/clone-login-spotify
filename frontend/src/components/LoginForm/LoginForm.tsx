import React, { useState } from 'react';
import { User } from '../../types/userTypes';
import './LoginForm.css'
import { useActivateCheckboxRemenber, useActivateCheckboxPassword } from './LoginFormActions';

interface LoginFormProps {
    onSubmit: (dataUser: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [dataUser, setDataUser] = useState('');
    useActivateCheckboxRemenber();
    useActivateCheckboxPassword();
    return (

        <form className='form-login'>
            <h1 className='form-login-title'>Log in to Spotify</h1>

            <div className='form-login-inputs'>
                <span className='form-login-title-input'>Eamil or Username</span>
                <input className='form-login-input' type='text' placeholder='Email or username' />
                <span className='form-login-title-input'>Password</span>
                <div className='form-login-password-input'>
                    <input className='form-login-input form-login-input-password' type='password' placeholder='Password'></input>
                    <svg className='form-login-aye-password' role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"><path className='form-login-aye-path-password' d="M6.703 7.382A6.073 6.073 0 0 0 6.113 10c0 3.292 2.614 6 5.887 6 3.273 0 5.886-2.708 5.886-6 0-.936-.211-1.825-.589-2.618.573.341 1.115.744 1.634 1.204.674.596 1.77 1.793 2.683 3.414-.913 1.62-2.01 2.818-2.683 3.414C17.037 17.093 14.833 18 12 18s-5.037-.907-6.931-2.586c-.674-.596-1.77-1.793-2.683-3.414.913-1.62 2.01-2.818 2.683-3.414.519-.46 1.061-.863 1.634-1.204zM12 4C8.671 4 5.996 5.091 3.742 7.089c-.896.794-2.3 2.353-3.381 4.453L.125 12l.236.458c1.082 2.1 2.485 3.659 3.381 4.453C5.996 18.908 8.672 20 12 20c3.329 0 6.004-1.091 8.258-3.089.896-.794 2.3-2.353 3.38-4.453l.237-.458-.236-.458c-1.082-2.1-2.485-3.659-3.381-4.453C18.004 5.09 15.328 4 12 4zm0 2c2.125 0 3.886 1.77 3.886 4S14.125 14 12 14s-3.886-1.77-3.886-4S9.875 6 12 6z"></path></svg>
                    <input className='form-login-aye-password-checkbox' type="checkbox" />
                </div>

                <div className='form-login-remenber'>
                    <input type='checkbox' className='form-login-remenber-checkbox'></input>
                    <span className='form-login-switch-remenber'>
                        <span className='form-login-switch-remenber-button '></span>
                    </span>
                    <span className='form-login-remenber-title'>Remenber me</span>
                </div>

                <input className='form-login-button-submit' type="button" value="Log In" />
                <a className='form-login-forgot-password' href='#'>Forgot your password?</a>
            </div>




            <hr className='form-login-line'></hr>
            
            <span className='form-login-singup'><span className='form-login-singup-text'>Don't have an account?</span><a className='form-login-singup-url' href='#'>Sing up for Spotify</a></span>
        </form>

    );
}

export default LoginForm