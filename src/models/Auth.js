// src/models/AuthModel.js
import auth from '@react-native-firebase/auth';

class AuthModel {
    async signUp(email, password) {
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            await userCredential.user.sendEmailVerification();
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async signIn(email, password) {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

export default new AuthModel();
