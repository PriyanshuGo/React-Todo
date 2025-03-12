// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging.js');


// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrmyJrSR0ZjEcat0Kp4z-Ixux5hr7wI3w",
    authDomain: "todo-e4018.firebaseapp.com",
    projectId: "todo-e4018",
    storageBucket: "todo-e4018.firebasestorage.app",
    messagingSenderId: "1001043210257",
    appId: "1:1001043210257:web:9201f1f69ecd7a9ce081b0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
