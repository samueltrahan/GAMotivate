import React, {useState} from 'react';
import './SignUpLandingPage.css';
import SignUpForm from '../../components/SignupForm/SignupForm';
import Logo from '../../Assets/galogo.png'

export default function SignUpLandingPage({history, handleSignupOrLogin}) {
    return (
        <div className="sign-up-page">
            <div className="sign-up-logo">
                <img alt="" src={Logo}></img>
            </div>
            <div className="sign-up-form">
                <SignUpForm 
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
                />
            </div>
        </div>
    )
}
