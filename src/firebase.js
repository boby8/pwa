import { initializeApp } from 'firebase/app';

const firebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyACPDL-AFO5Iw0iyhq2Jn1u__SK_d0gPBc",
        authDomain: "pwa-app-5f835.firebaseapp.com",
        projectId: "pwa-app-5f835",
        storageBucket: "pwa-app-5f835.appspot.com",
        messagingSenderId: "884850917161",
        appId: "1:884850917161:web:5d450763ea094589638138"
      };
      
      // Initialize Firebase
        initializeApp(firebaseConfig);
}


export default firebase