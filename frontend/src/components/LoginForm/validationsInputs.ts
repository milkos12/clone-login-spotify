import React from 'react';



export const validationEmails = (email: string) => {
    const messageInput = document.getElementById('message-error-inputs');
    const emailCharacteresValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const resultValidation = emailCharacteresValid.test(email);

   
    if(resultValidation && messageInput) {
        messageInput.className = messageInput.className.replace('-active', '-desactive');
    } else if(messageInput) {
        messageInput.className = messageInput?.className.replace('-desactive', '-active');
    }
    return emailCharacteresValid.test(email)
}
