import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, GithubAuthProvider, updateProfile  } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider ();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoUrl) => {
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
          })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loading,
        logOut,
        signIn,
        googleLogin,
        githubLogin,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;