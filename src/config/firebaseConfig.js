// /src/config/firebaseConfig.js
require("dotenv").config();
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
//const { getAnalytics } = require("firebase/analytics");

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(firebaseApp);
//const analytics = getAnalytics(firebaseApp);

module.exports = { auth };
