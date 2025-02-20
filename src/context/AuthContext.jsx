import React, { createContext, useContext, useEffect, useState } from 'react'

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
const provider = new GoogleAuthProvider();

const AuthContext = createContext()
export default function AuthContext({children}) {

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
    <AuthContext.provider value={userInfo}>
      {children}
    </AuthContext.provider>
  )
}
