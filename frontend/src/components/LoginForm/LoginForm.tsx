import React, {useState} from 'react';
import { User } from '../../types/userTypes';

console.log("Yes enter!!!!!!!!!!!!!!!!!!!!!!!!!!")
interface LoginFormProps {
    onSubmit: (dataUser: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [dataUser, setDataUser] = useState('');

    return (
        
        <div>
            <h1>Log in to Spotify</h1>
            <form>
                <span>Eamil or Username</span>
                <input type='text' placeholder='Email or username' /> 
                <span>Password</span>
                <input type='password' placeholder='Password' />
                <input type='checkbox'></input> <span>Remenber me</span>
                <input type="button" value="Log In" />
                <a href='#'>Forgot your password?</a>
                <hr />
                <span>Don't have an account? Sing for Spotify</span>
            </form>
        </div>
    );
}

export default LoginForm