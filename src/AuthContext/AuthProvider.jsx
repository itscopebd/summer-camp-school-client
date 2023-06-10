
import { GoogleAuthProvider,createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/Firebase";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // singin uwth google 

    const singIn = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userUpdate = (displayName, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photourl
        })
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)

            setLoading(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])

    const userInfo = {
        user,
        singIn,
        createUser,
        userLogin,
        userUpdate,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;