import { initializeApp } from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyAK6-AIdSy5sag8SABgG6x9w_XN64vJAD0 ',
    authDomain: 'furnitureshop-bb81e.firebaseapp.com',
    projectId: 'furnitureshop-bb81e',
    storageBucket: 'furnitureshop-bb81e.appspot.com',
    messagingSenderId: '531349525131',
    appId: '1:715881305662:web:bb53fd1c5626006127636f',
    measurementId: 'G-FCKVSTJ1C4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};