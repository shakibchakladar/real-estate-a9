
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext=createContext(null);
import { TwitterAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";


// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twiterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();




const FirebaseProvider = ({children}) => {
const [user,setUser]=useState(null)

const [loading,setLoading]=useState(true);
// console.log(loading);

  // create user
  const createUser=(email, password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
  }

  // update profile
 const updateUserProfile=(name,image)=>{
  updateProfile(auth.currentUser, {
    displayName: name,
     photoURL:image
  })
}

  // sign in user
  const signInUser=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google login
  const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  // github
  const gitHubLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  // twitter
  const twiter=()=>{
    setLoading(true)
    return signInWithPopup(auth,twiterProvider);
  }

  // facebook
  const facebookLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,facebookProvider);
  }
  // log out 
  const logOut=()=>{
    // setLoading(false)
    setUser(null)
    signOut(auth)
  }

  // observer
 useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      setLoading(false)
    }
  });
  return ()=>unsubscribe()
  
 },[])


  const allValues={
    createUser,
    signInUser,
    googleLogin,
    gitHubLogin,
    logOut,
    user,
    twiter,
    facebookLogin,
    loading
  }
  return (
   <AuthContext.Provider value={allValues}>
    {children}
   </AuthContext.Provider>
  );
};

export default FirebaseProvider;