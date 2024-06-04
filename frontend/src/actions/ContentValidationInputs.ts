import React from 'react';

// Function to validate the format of an email address
export const validationEmails = (email: string): void => {
    // Get the element that displays error messages
    const messageInput = document.getElementById('message-error-inputs');
    
    // Regular expression to validate email format
    const emailCharacteresValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test if the email matches the regular expression
    const resultValidation = emailCharacteresValid.test(email);

    // Check if the email is valid and the message input element is not undefined
    if (resultValidation && messageInput) {
        // Remove the '-active' part of the class name and add '-desactive' to hide the error message
        messageInput.className = messageInput.className.replace('-active', '-desactive');
    } else if (messageInput) {
        // Remove the '-desactive' part of the class name and add '-active' to show the error message
        messageInput.className = messageInput.className.replace('-desactive', '-active');
    }
};
