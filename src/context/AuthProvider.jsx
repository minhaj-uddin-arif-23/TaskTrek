
import React, { createContext, useContext, useEffect, useState } from 'react'

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
const provider = new GoogleAuthProvider();
import auth from '../firebase/_firebase_init'
export const AuthContexts = createContext()
export default function AuthProvider({children}) {

    const [user,setUser]= useState(null)
    const [loading,setLoading] = useState(true)

  const google =()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }
  const signout = () => {
    setLoading(true)
    return signOut(auth)
  }
  const userInfo = {
    google,
    loading,user,signout
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
      setUser(currentUser)
      setLoading(false)
    
    })
    return  () => {
      unsubscribe();
    }
  },[])

  return (
    <AuthContexts.Provider value={userInfo}>
      {children}
    </AuthContexts.Provider>
  )
}

