import React, { useEffect } from 'react';
import { openAye, closeAye } from './PathsEyesPassword';

// Custom hook to activate the "Remember Me" checkbox
export const CheckboxRemenber = (): void => {
    useEffect(() => {
        // Get elements for the switch button and its container
        const switchButtonConteiner = document.querySelector('.form-login-switch-remenber') as HTMLElement;
        const switchButtonMove = document.querySelector('.form-login-switch-remenber-button') as HTMLElement;
        const switchButton = document.querySelector('.form-login-switch-remenber') as HTMLElement;

        // Function to toggle the "Remember Me" checkbox and switch button styles
        function activateSwitchButton(): void {
            const checkbox = document.querySelector('.form-login-remenber-checkbox') as HTMLInputElement;

            if (checkbox.checked) {
                switchButtonMove.classList.remove('form-login-switch-remenber-button-active');
                switchButton.classList.remove('form-login-switch-remenber-activate');
                checkbox.checked = false;
            } else {
                switchButtonMove.classList.add('form-login-switch-remenber-button-active');
                switchButton.classList.add('form-login-switch-remenber-activate');
                checkbox.checked = true;
            }
        }

        // Add event listener to the switch button container
        switchButtonConteiner.addEventListener('click', activateSwitchButton);

        // Cleanup event listener on component unmount
        return () => {
            switchButtonConteiner.removeEventListener('click', activateSwitchButton);
        };
    }, []);
};

