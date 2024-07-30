import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../../Firebase/firebase.config";


export const AuthContext= createContext()

const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    

 const createUser= (email,password) =>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }








    useEffect(()=>{

        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
          setLoading(false)
        })

        return ()=>{
            return unsubscribe()
        }
    },[])






const authInfo={
    loading,
    user,
    createUser
}

    return  <AuthContext.Provider value={authInfo}>
         {children}
    </AuthContext.Provider>
};


AuthProvider.propTypes={
    children:PropTypes.node,
}

export default AuthProvider;