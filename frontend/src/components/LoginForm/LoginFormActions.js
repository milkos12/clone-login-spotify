import React, { useEffect } from 'react';


export const useActivateCheckbox = () => {
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