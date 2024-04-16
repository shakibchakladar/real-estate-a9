
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext=createContext(null);
import { TwitterAuthProvider } from "firebase/auth";


// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twiterProvider = new TwitterAuthProvider();



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

  // github
  const gitHubLogin=()=>{
    return signInWithPopup(auth, githubProvider)
  }

  // twitter
  const twiter=()=>{
    return signInWithPopup(auth,twiterProvider);
  }
  // log out 
  const logOut=()=>{
    setUser(null)
    signOut(auth)
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
    googleLogin,
    gitHubLogin,
    logOut,
    user,
    twiter
  }
  return (
   <AuthContext.Provider value={allValues}>
    {children}
   </AuthContext.Provider>
  );
};

export default FirebaseProvider;