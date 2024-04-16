// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAJl51IC5KDyrWl99QNC5w-lZ1pfMWCW4Y",
//   authDomain: "haven-home-917f8.firebaseapp.com",
//   projectId: "haven-home-917f8",
//   storageBucket: "haven-home-917f8.appspot.com",
//   messagingSenderId: "636420106958",
//   appId: "1:636420106958:web:6f00bc6ceb13bdbf243e9f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// export default auth;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJl51IC5KDyrWl99QNC5w-lZ1pfMWCW4Y",
  authDomain: "haven-home-917f8.firebaseapp.com",
  projectId: "haven-home-917f8",
  storageBucket: "haven-home-917f8.appspot.com",
  messagingSenderId: "636420106958",
  appId: "1:636420106958:web:6f00bc6ceb13bdbf243e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;