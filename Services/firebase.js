var firebaseConfig = {
    apiKey: "AIzaSyD3ZRb0HNIzKsXIkFnHw76_MzuL-s4_s8s",
    authDomain: "open-chat-room.firebaseapp.com",
    databaseURL: "https://open-chat-room.firebaseio.com",
    projectId: "open-chat-room",
    storageBucket: "open-chat-room.appspot.com",
    messagingSenderId: "827536818421",
    appId: "1:827536818421:web:802a8ad3408f15119685bc",
    measurementId: "G-Y5S23JWXS6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database
