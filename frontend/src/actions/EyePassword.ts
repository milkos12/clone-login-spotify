import { useEffect } from 'react'
import { openAye, closeAye } from './PathsEyesPassword'

// Custom hook to activate the password visibility toggle
export const EyeCheckboxPassword = (): void => {
    useEffect(() => {
        // Get elements for the password checkbox, input, and icon
        const checkboxPassword = document.querySelector('.form-login-aye-password-checkbox') as HTMLInputElement;
        const inputPassword = document.querySelector('.form-login-input-password') as HTMLInputElement;
        const ayePassword = document.querySelector('.form-login-aye-password') as HTMLElement;
        const pathAyePassword = document.querySelector('.form-login-aye-path-password') as HTMLElement;

        // Function to toggle the password visibility and icon path
        function showPassword(): void {
            if (checkboxPassword.checked) {
                // the conten for (openAye) there is in PathsEyesPassword.ts
                pathAyePassword.setAttribute('d', openAye);
                checkboxPassword.checked = false;
                inputPassword.type = 'password';
            } else {
                // the conten for (closeAye) there is in PathsEyesPassword.ts
                pathAyePassword.setAttribute('d', closeAye);
                checkboxPassword.checked = true;
                inputPassword.type = 'text';
            }
        }

        // Add event listener to the password visibility icon
        ayePassword.addEventListener('click', showPassword);

        // Cleanup event listener on component unmount
        return () => {
            ayePassword.removeEventListener('click', showPassword);
        };
    }, []);
};
