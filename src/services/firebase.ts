
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: 'AIzaSyAcSJfhf2mH_nVUA01G-Ox5jyLd2SaeV7o',
  authDomain: 'auth-f794e.firebaseapp.com',
  projectId: 'auth-f794e',
  storageBucket: 'auth-f794e.appspot.com',
  messagingSenderId: '332369310519',
  appId: '1:332369310519:web:53296806099b2bb7b0a0b2',
  measurementId: 'G-SNC9R25B02'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);