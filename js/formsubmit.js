// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLHwWNc9tvKO7BkxnER3mkoIuyidEGnrg",
  authDomain: "portfolio-1c8f0.firebaseapp.com",
  projectId: "portfolio-1c8f0",
  storageBucket: "portfolio-1c8f0.appspot.com",
  messagingSenderId: "603105055989",
  appId: "1:603105055989:web:5edcd271895b376e65a1bc",
  measurementId: "G-HP3KXL0MQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeData(){

    app.database().ref("User").set({
        firstname: document.getElementById('first_name').value,
        contact: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
        
    });
};