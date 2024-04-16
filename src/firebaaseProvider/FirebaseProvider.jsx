
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";

// import { GoogleAuthProvider } from "firebase/auth/cordova";
// import { GoogleAuthProvider } from "firebase/auth/cordova";
export const AuthContext=createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();


const FirebaseProvider = ({children}) => {
const [user,setUser]=useState(null)
console.log(user);

  // create user
  const createUser=(email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
  }
  // sign in user
  const signInUser=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google login
  const googleLogin=()=>{
    return signInWithPopup(auth, googleProvider);
  }

  // observer
 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    }
  });
  
 },[])


  const allValues={
    createUser,
    signInUser,
    googleLogin
  }
  return (
   <AuthContext.Provider value={allValues}>
    {children}
   </AuthContext.Provider>
  );
};

export default FirebaseProvider;