import React, { createContext, useContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const provider = new GoogleAuthProvider();
import auth from "../firebase/_firebase_init";
import axios from "axios";
import usePublic from "../hook/usePublic";
import Swal from "sweetalert2";
export const AuthContexts = createContext();
export default function AuthProvider({ children }) {
  const axiosPublic = usePublic();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const signout = () => {
    setLoading(true);
    return signOut(auth);
  };
  
  const updateUserInfo = (name,photo) => {
    return updateProfile(auth.currentUser,{
      displayName:name,
      photURL:photo
    }
      );
  };
  const userInfo = {
    google,
    loading,
    user,
    signout,
    updateUserInfo
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Send user data to the server to add it to the database
        try {
          const response = await axios.post(
            `https://task-trek-server-two.vercel.app/user/${currentUser?.email}`,
            {
              email: currentUser?.email,
              name: currentUser?.displayName,
              uid: currentUser?.uid,
            }
          );

          // Get token from the server and store it in localStorage
          const userInfo = { email: currentUser?.email };
          axiosPublic.post("/jwt", userInfo).then((res) => {
            if (res.data?.token) {
              localStorage.setItem("Access-token", res.data.token);
              setLoading(false);
            }
          });
          // Swal.fire({
          //   title: "Success!",
          //   text: "User added to the database successfully.",
          //   icon: "success",
          //   confirmButtonText: "OK",
          // });
        } catch (error) {
          // Swal.fire({
          //   title: "Error!",
          //   text: "There was an issue adding the user.",
          //   icon: "error",
          //   confirmButtonText: "OK",
          // });
          setLoading(false);
        }
      } else {
        setLoading(false);
        localStorage.removeItem("Access-token"); // Remove token if no user
        setUser(null); // Clear user state if no user is logged in
      }
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  return (
    <AuthContexts.Provider value={userInfo}>{children}</AuthContexts.Provider>
  );
}
