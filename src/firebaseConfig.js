// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBrmyJrSR0ZjEcat0Kp4z-Ixux5hr7wI3w",
    authDomain: "todo-e4018.firebaseapp.com",
    projectId: "todo-e4018",
    storageBucket: "todo-e4018.firebasestorage.app",
    messagingSenderId: "1001043210257",
    appId: "1:1001043210257:web:9201f1f69ecd7a9ce081b0"
  };


// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Messaging
let messaging;
try {
  messaging = getMessaging(app);
} catch (error) {
  console.error("Failed to initialize messaging: ", error);
}


// Request permission to send notifications
export const requestNotificationPermission = async () => {
  if (!messaging) {
    console.error("Messaging is not initialized properly.");
    return;
  }
  try {
    // Register service worker
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
      scope: '/'
    });

    // Get the token
    const token = await getToken(messaging, { 
        vapidKey: "BARK1ZV9Jvfym8cUGgf5U9vpLnHtQMWKOcGYNCMsSWZmm81WMvxbLDVGMNeBhaSYmZD3-TpaRKoDbp-ndpEzsI4",
        serviceWorkerRegistration: registration
      });
    

    if (token) {
      console.log('FCM Token:', token);
      alert(`FCM Token: ${token}`);  // Displaying token in alert for easy copying
      return token;
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
  }
};

// Listen for messages when the app is running (Foreground messages)
if (messaging) {
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
  });
}

export default messaging;
