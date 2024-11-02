import './PageSingUp.css';
import '../LoginForm/LoginForm.css';
import './PageSingUpCreate.css'
import './PageSingUpPhone.css'
import React, { useEffect, useRef, useState } from 'react';



export function PageSingUpPhone() {
    const REGEXT = /((.+)@([a-z|0-9]+\.[a-z]+))/;
    const REGEXT_NUMBERS = /([^0-9]+)/g;
    const COLOR_BORDER_TRUE = '#727272';
    const COLOR_BORDER_FALSE = '#ed2c3f';
    const MESSAGE_EMPTY = 'Enter your phone number';
    const MESSAGE_ONLY_NUMBER = 'You can only enter numbers.';
    const refIputMail = useRef<HTMLInputElement>(null);
    const [isCorrecMail, setIsCorrectEmail] = useState(true);
    const [colorBorder, setColorBorder] = useState(COLOR_BORDER_TRUE);
    const [messageError, setMessageError ] = useState('');

    const validateNumber = () => {
        const valueInput = refIputMail.current?.value || '';
        //console.log(REGEXT_NUMBERS.test(valueInput));
        if (REGEXT_NUMBERS.test(valueInput)) {
            setColorBorder(COLOR_BORDER_FALSE);
            setIsCorrectEmail(false);
            setMessageError(MESSAGE_ONLY_NUMBER);
        } else {
            setColorBorder(COLOR_BORDER_TRUE);
            setIsCorrectEmail(true);
        }
    }

    /*const submtHandle = () => {
        validateEmailStructure();
        if (isCorrecMail) {
            alert('correct mal');
        }

    }*/

    return (
        <div className='form-singup' style={{ color: '#ffffff', backgroundColor: '#121212' }}>
            <div>

                <div>
                    <span className='form-login-title-input'>Enter a phone number</span>
                    <div className='form-login-password-input form-login-password-input-data form-login-password-input-phone' >
                        <div className='form-login-password-inputs-data-select-conteiner form-login-password-inputs-data-select-conteiner-phone'>
                            <select className='form-login-password-inputs-data form-login-password-inputs-data-select form-login-password-inputs-phone-select'>
                                <option value="">+20</option>
                                <option value="1">+27</option>
                                <option value="2">+51</option>
                                <option value="3">+52</option>
                                <option value="4">+55</option>
                                <option value="5">+56</option>
                                <option value="6">+57</option>
                                <option value="7">+62</option>
                                <option value="8">+66</option>
                                <option value="9">+84</option>
                                <option value="10">+91</option>
                                <option value="11">+212</option>
                                <option value="12">+213</option>
                            </select>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"><path d="M2.793 8.043a1 1 0 0 1 1.414 0L12 15.836l7.793-7.793a1 1 0 1 1 1.414 1.414L12 18.664 2.793 9.457a1 1 0 0 1 0-1.414z"></path></svg>
                        </div>
                        <input className='form-login-password-inputs-data form-login-password-inputs-phone' placeholder='phone number' style={{borderColor: colorBorder}} onChange={validateNumber} ref={refIputMail}></input>
                        <div></div>
                        {
                        !isCorrecMail && (
                            <div className='form-login-message-error-inputs-fill-desactive'>

                                <>
                                    <svg data-encore-id="icon" role="img" aria-label="Error:" aria-hidden="false" viewBox="0 0 24 24"><title>Error:</title><path d="M11 18v-2h2v2h-2zm0-4V6h2v8h-2z"></path><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path></svg>
                                    <span>You can only enter numbers.</span>
                                </>

                            </div>
                        )
                    }
                    </div>

                </div>

                <div className='form-conteiner-login-button-submit login-button-submit-forgot form-conteiner-button'>
                    <input className='form-login-button-submit' type="submit" value='Next'  />
                </div>

            </div>
        </div>
    );
}

export default PageSingUpPhone;