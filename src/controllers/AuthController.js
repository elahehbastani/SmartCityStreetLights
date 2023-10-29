// src/controllers/AuthController.js
import React from 'react';
import AuthModel from '../models/AuthModel';
import AuthView from '../views/AuthView';

function AuthController() {
    const signIn = (email, password) => {
        AuthModel.signIn(email, password)
            .then(response => {
                if (response.success) {
                    // Navigate to dashboard or control interface
                } else {
                    console.error(response.error);
                }
            });
    };

    const signUp = (email, password) => {
        AuthModel.signUp(email, password)
            .then(response => {
                if (response.success) {
                    // Notify user to verify email
                } else {
                    console.error(response.error);
                }
            });
    };

    return <AuthView onSignIn={signIn} onSignUp={signUp} />;
}

export default AuthController;
