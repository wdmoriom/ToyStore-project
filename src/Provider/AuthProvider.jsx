import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';
 export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,  signOut } from "firebase/auth";

const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    console.log(user)

    const createUser = (email, password)=>{

        return createUserWithEmailAndPassword(auth, email , password);
    }
  const signIn = (email,password) => {
   return signInWithEmailAndPassword(auth,email,password)
  }

    const logout = ()=>{
        return signOut(auth);
    }

    useEffect(() =>{
   const unsubscribe =  onAuthStateChanged(auth ,( currentUser) => {
            setUser(currentUser)
        })

        return() => {
            unsubscribe()
        }
    },[])

  
    const authdata = {
        user,
       setUser,
       createUser,
       logout,
       signIn,
    }
    return <AuthContext value={authdata}>{children}</AuthContext>
};

export default AuthProvider;