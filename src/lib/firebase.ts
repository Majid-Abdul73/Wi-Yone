import { initializeApp } from 'firebase/app';
import { getFirestore, enableNetwork } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Configuration - environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services with optimization
export const db = getFirestore(app);
export const auth = getAuth(app);

// Only initialize analytics in production
export const analytics = typeof window !== 'undefined' && import.meta.env.PROD 
  ? getAnalytics(app) 
  : null;

// Enable offline persistence
if (typeof window !== 'undefined') {
  enableNetwork(db).catch(console.error);
}

export default app;