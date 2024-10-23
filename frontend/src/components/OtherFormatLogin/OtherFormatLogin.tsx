import React from "react";
import "./OtherFormatLogin.css"


export interface otherFormatLogin {
    showPhone: boolean
}

function OtherFormatLogin({showPhone}:otherFormatLogin) {
    return (
        <div className='form-login-with-buttons'>
            <div className='form-login-with'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 12.2273C21.6 11.5182 21.5364 10.8364 21.4182 10.1819H12V14.0501H17.3818C17.15 15.3001 16.4455 16.3592 15.3864 17.0682V19.5773H18.6182C20.5091 17.8364 21.6 15.2728 21.6 12.2273Z" fill="#4285F4" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 21.9999C14.7001 21.9999 16.9637 21.1044 18.6183 19.5772L15.3864 17.0681C14.491 17.6681 13.3455 18.0226 12.0001 18.0226C9.39554 18.0226 7.19099 16.2635 6.40463 13.8999H3.06372V16.4908C4.70918 19.759 8.09099 21.9999 12.0001 21.9999Z" fill="#34A853" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.40455 13.8999C6.20455 13.2999 6.09091 12.659 6.09091 11.9999C6.09091 11.3409 6.20455 10.6999 6.40455 10.0999V7.50903H3.06364C2.38636 8.85903 2 10.3863 2 11.9999C2 13.6136 2.38636 15.1409 3.06364 16.4909L6.40455 13.8999Z" fill="#FBBC05" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 5.97727C13.4683 5.97727 14.7864 6.48182 15.8228 7.47273L18.691 4.60455C16.9592 2.99091 14.6955 2 12.0001 2C8.09099 2 4.70918 4.24091 3.06372 7.50909L6.40463 10.1C7.19099 7.73636 9.39554 5.97727 12.0001 5.97727Z" fill="#EA4335" />
                </svg>


                <input type="button" value="" />
                <span>Continue with Google</span>
            </div>


            <div className='form-login-with form-login-with-more-buttoms'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="white" />
                    <path d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.308 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.125V12H16.336L15.893 14.89H13.563V21.878C18.343 21.128 22 16.991 22 12Z" fill="#1877F2" />
                </svg>


                <input type="button" value="" />
                <span>Continue with Facebook</span>
            </div>


            <div className='form-login-with form-login-with-more-buttoms'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.195 4.513C15.873 3.69 16.351 2.567 16.351 1.433C16.351 1.278 16.341 1.123 16.318 1C15.206 1.044 13.872 1.734 13.083 2.668C12.449 3.379 11.871 4.513 11.871 5.647C11.871 5.825 11.905 5.991 11.916 6.047C11.982 6.058 12.094 6.08 12.216 6.08C13.206 6.08 14.45 5.413 15.195 4.513ZM15.973 6.313C14.317 6.313 12.961 7.325 12.093 7.325C11.171 7.325 9.97 6.38 8.525 6.38C5.779 6.38 3 8.648 3 12.918C3 15.586 4.023 18.398 5.301 20.211C6.391 21.744 7.347 23 8.725 23C10.081 23 10.682 22.1 12.371 22.1C14.083 22.1 14.472 22.978 15.973 22.978C17.463 22.978 18.453 21.61 19.397 20.265C20.442 18.72 20.887 17.219 20.897 17.142C20.809 17.119 17.963 15.952 17.963 12.695C17.963 9.871 20.198 8.604 20.331 8.504C18.852 6.381 16.596 6.314 15.973 6.314V6.313Z" fill="white" />
                </svg>



                <input type="button" value="" />
                <span>Continue with Apple</span>
            </div>

            {showPhone && (
                <div className='form-login-with form-login-with-more-buttoms form-login-with-phone-number'>
                    <input type="button" value="" />
                    <span>Continue with phone number</span>
                </div>
            )}



        </div>
    );
}

export default OtherFormatLogin;