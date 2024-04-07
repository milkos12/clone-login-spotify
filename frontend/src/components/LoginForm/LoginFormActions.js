import React, { useEffect } from 'react';

import { openAye, closeAye } from './pathsAyesPassword';

export const useActivateCheckboxRemenber = () => {
    useEffect(() => {

        const switchButtonConteiner = document.querySelector('.form-login-switch-remenber');
        const switchButtonMove = document.querySelector('.form-login-switch-remenber-button');
        const switchButton = document.querySelector('.form-login-switch-remenber');

        function activateSwitchButton() {
            const checkbox = document.querySelector('.form-login-remenber-checkbox');

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

        switchButtonConteiner.addEventListener('click', activateSwitchButton);
    }, []);
};


export const useActivateCheckboxPassword = () => {
    useEffect(() => {
        const checkboxPassword = document.querySelector('.form-login-aye-password-checkbox');
        const inputPassword = document.querySelector('.form-login-input-password');
        const ayePassword = document.querySelector('.form-login-aye-password');
        const pathAyePassword = document.querySelector('.form-login-aye-path-password');

        function showPassword() {
            if(checkboxPassword.checked) {
                pathAyePassword.setAttribute('d', openAye);
                checkboxPassword.checked = false;
                inputPassword.type = 'password';
            } else {
                pathAyePassword.setAttribute('d', closeAye);
                checkboxPassword.checked = true;
                inputPassword.type = 'text';
            }
        }

        ayePassword.addEventListener('click', showPassword);
    }, []);
}