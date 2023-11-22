import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIRE_STORE_API,
  authDomain: "mecmatrimony-ea76b.firebaseapp.com",
  projectId: "mecmatrimony-ea76b",
  storageBucket: "mecmatrimony-ea76b.appspot.com",
  messagingSenderId: "660510911345",
  appId: "1:660510911345:web:006582bdf43994129424d0"
};

export const app = initializeApp(firebaseConfig);