import auth, { googleProvider } from "@/firebase.config/firebaseAuth";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleUser = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
            // console.log(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const userInfo = {
        user,
        googleUser,
        userLogOut,
        loading,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;