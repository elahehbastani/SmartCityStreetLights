// src/views/AuthView.js
import React from 'react';
import { View, TextInput, Button } from 'react-native';

function AuthView({ onSignIn, onSignUp }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Sign In" onPress={() => onSignIn(email, password)} />
            <Button title="Sign Up" onPress={() => onSignUp(email, password)} />
        </View>
    );
}

export default AuthView;
