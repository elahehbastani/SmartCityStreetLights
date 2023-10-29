# Smart City Street Lights Mobile Application

This repository contains the source code for the Smart City Street Lights Mobile Application. The application aims to provide a user-centric interface for managing and monitoring street lights in a smart city environment, ensuring energy efficiency and proactive maintenance.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Run](#how-to-run)
- [License](#license)

## Features
- **User Authentication**: Users can create an account, log in, and manage their profile.
- **Street Light Control**: Users can view all connected street lights, access detailed information about individual lights, adjust their brightness, and set schedules for their operation.
- **Notifications**: Stay updated with the status of street lights and receive alerts about any anomalies.
- **Feedback & Support**: Users can provide feedback and seek support directly through the application.

## Technologies Used
- **React Native**: A framework for building native apps using React.
- **Firebase**: Cloud Firestore for real-time data synchronization and Firebase Authentication for user authentication.
- **Expo CLI**: A command line interface for developing, building, and publishing React Native projects.
- **Visual Studio Code**: Source code editor for editing and debugging the code.

## Getting Started
1. Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/SmartCityStreetLights.git
```
2. Change the directory to the project folder:
```bash
cd SmartCityStreetLights
```
3. Install the required dependencies:
```bash
npm install
```
4. Set up Firebase:
   - Create a Firebase project and configure the Firebase settings in `firebaseConfig.js`.
   - Import the Firebase configuration object from Firebase Console and replace the placeholder in `firebaseConfig.js`.
```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};
```
5. Populate the Firebase Realtime Database with initial data (see `firebaseSetup.js` for a script to set up your database).

## How to Run
1. Start the Expo CLI:
```bash
expo start
```
2. Open the Expo app on your phone and scan the QR code, or run on an emulator.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
```

Make sure to replace placeholders like `your-username`, `your-api-key`, `your-auth-domain`, `your-project-id`, `your-storage-bucket`, `your-messaging-sender-id`, `your-app-id` with actual values.
