import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext } from "react";
import { app, firebaseConfig } from "../Hooks/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const provider = new GoogleAuthProvider();

const auth = getAuth(app)

export const AuthContext = createContext()

console.log(firebaseConfig);

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)

        });
        console.log(auth);
        return () => unsubscribe();
    }, []);



    const signUp = (name, email, password, url) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    const googleSignUp = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // const data = {
                //     name: user.displayName,
                //     email: user.email,
                //     url: user.photoURL,
                //     role: 'member'
                // }
                // fetch('http://localhost:5000/users', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(data),
                // }).then(response => {
                //     if (!response.ok) {
                //         throw new Error(`HTTP error! Status: ${response.status}`);
                //     }
                //     return response.json()
                // })
                //     .then(responseData => {
                //         // Swal.fire({
                //         //     position: "top-end",
                //         //     icon: "success",
                //         //     title: "You have signed up successfully",
                //         //     showConfirmButton: false,
                //         //     timer: 1500
                //         // })
                //         console.log(responseData);
                //     })
                //     .catch(error => {
                //         console.error('Error:', error);
                //     });
                setCurrentUser(user)
                setLoading(false)

                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error);
                // ...
            });
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setCurrentUser(null)
            useNavigate('/')
        }).catch((error) => {
            console.log(error);
        })
    }

    const obj = {
        currentUser,
        setCurrentUser,
        setLoading,
        signUp,
        googleSignUp,
        logIn,
        logOut,
        loading,
        updateUser
    }

    return (
        <AuthContext.Provider value={obj}>
            {loading ? <Loading /> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider