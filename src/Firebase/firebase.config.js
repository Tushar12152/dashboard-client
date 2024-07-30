// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxjH72GUytLGpM4GENj4zUKQX9Y9hg_Dk",
  authDomain: "dashboard-management-c7ead.firebaseapp.com",
  projectId: "dashboard-management-c7ead",
  storageBucket: "dashboard-management-c7ead.appspot.com",
  messagingSenderId: "133597052153",
  appId: "1:133597052153:web:9424663e9e2b076a073628",
  measurementId: "G-7BQ52SJQ8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);


export default auth;