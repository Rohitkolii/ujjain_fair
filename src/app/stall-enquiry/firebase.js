"use client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Ozz3i5F0-NFqcSrNhqFZrLuJEkzGQxI",
  authDomain: "herbal-fair.firebaseapp.com",
  projectId: "herbal-fair",
  storageBucket: "herbal-fair.firebasestorage.app",
  messagingSenderId: "549036765974",
  appId: "1:549036765974:web:92e466cad8d63b52b01637",
  measurementId: "G-JNX4WJ3ZN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

