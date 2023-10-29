// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzbY_osqqEAxPQxBa1ByiSwjHRrcLkxuw",
    authDomain: "smartstreetlights-7fb0a.firebaseapp.com",
    projectId: "smartstreetlights-7fb0a",
    storageBucket: "smartstreetlights-7fb0a.appspot.com",
    messagingSenderId: "635323708895",
    appId: "1:635323708895:web:6cdbb7959ec6117342406a"
};

const app = initializeApp(firebaseConfig);
// Reference to your database
const db = firebase.database();

// Function to setup your database structure and initial data
const setupDatabase = () => {
    // Users data
    const usersData = {
        userId1: {
            email: "user1@example.com",
            password: "hashed_password1",
            username: "user1"
        },
        userId2: {
            email: "user2@example.com",
            password: "hashed_password2",
            username: "user2"
        },
    };

    // Streetlights data
    const streetlightsData = {
        streetlightId1: {
            location: { latitude: 40.712776, longitude: -74.005974 },
            status: "ON",
            brightness: 80,
            lastUpdated: "2023-10-23T18:25:43.511Z"
        },
        streetlightId2: {
            location: { latitude: 40.712776, longitude: -74.005974 },
            status: "OFF",
            brightness: 0,
            lastUpdated: "2023-10-23T18:25:43.511Z"
        },
    };

    // Notifications data
    const notificationsData = {
        notificationId1: {
            userId: "userId1",
            message: "Streetlight streetlightId1 is malfunctioning.",
            timestamp: "2023-10-23T18:25:43.511Z"
        },
        notificationId2: {
            userId: "userId2",
            message: "Streetlight streetlightId2 has been repaired.",
            timestamp: "2023-10-23T18:25:43.511Z"
        },
    };

    // Set data in Firebase
    db.ref('SmartStreetLights/users').set(usersData);
    db.ref('SmartStreetLights/streetlights').set(streetlightsData);
    db.ref('SmartStreetLights/notifications').set(notificationsData);
};

export { app, db };