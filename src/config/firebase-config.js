// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const API_KEY = process.env.REACT_APP_API_KEY;
// const AUTHDOMAIN = process.env.AUTHDOMAIN;
// const APPID = process.env.APPID;
// const MEASUREMENTID = process.env.MEASUREMENTID;
// const MESSAGINGSENDERID = process.env.MESSAGINGSENDERID;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyDHZ33JlBGEBP-0XPWJql2cxj9P3qeaMqY',
//   authDomain: 'languages-ac18f.firebaseapp.com',
// //   databaseURL: 'https://languages-ac18f-default-rtdb.firebaseio.com',
//   projectId: 'languages-ac18f',
//   storageBucket: 'languages-ac18f.appspot.com',
//   messagingSenderId: '911666529349',
//   appId: '1:911666529349:web:53cafaaa6f72e5dc948f2c',
//   measurementId: 'G-NJ4VMW64N9',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBxud0wY_fzbUBUZY_UjDnxlkgQE5IS1Rc',
  authDomain: 'learn-lingo-f345f.firebaseapp.com',
//   databaseURL:
//     'https://lingo-learn-1-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-f345f',
  storageBucket: 'learn-lingo-f345f.appspot.com',
  messagingSenderId: '926996038567',
  appId: '1:926996038567:web:2ce5452f484940ef50ac82',
  measurementId: 'G-SGHZ0XGFW2',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();













// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyB9zMI3qcjjxuZPUvnQT5wUBD-jcgNDTco',
//   authDomain: 'lingo-learn-1.firebaseapp.com',
//   databaseURL:
//     'https://lingo-learn-1-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'lingo-learn-1',
//   storageBucket: 'lingo-learn-1.appspot.com',
//   messagingSenderId: '790449956870',
//   appId: '1:790449956870:web:c94f207bebdd08e81a7b87',
//   measurementId: 'G-4BQDKFN26Z',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
