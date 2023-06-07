
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/Firebase";
import { createContext, useState } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const singIn = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }


    const userInfo = {
        user,
        singIn
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;