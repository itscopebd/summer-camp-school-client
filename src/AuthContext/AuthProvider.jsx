
import { GoogleAuthProvider,createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/Firebase";
import { createContext, useState } from "react";


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


const createUser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}

    const userInfo = {
        user,
        singIn,
        createUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;