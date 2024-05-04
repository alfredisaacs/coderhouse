import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjcsxZqi_zrul1oFtb-tH8-4JrcmGqujw",
  authDomain: "tiendacoder-fcf13.firebaseapp.com",
  projectId: "tiendacoder-fcf13",
  storageBucket: "tiendacoder-fcf13.appspot.com",
  messagingSenderId: "820763751636",
  appId: "1:820763751636:web:6c71953dc0088d417f7741"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);