import React, { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "./Firebase";
import styles from "./signup.module.css"
import { Button, TextField, Box, colors } from "@mui/material";
import Footer from "../Component/Footer";
// export const auth = firebase.auth();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const help = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(userCredential.email);
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(error);
      });
  };

  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        setName(res.user.displayName);
      })
      .then((err) => console.log(err));
  };

  console.log(name);

  return (
    <div className={styles.SignupComponent} >
      <Box className={styles.SignupForm}  onSubmit={(e) => handleSubmit(e)}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={!help && "Incorrect Name" }
        />
        <br/>
        <br/>
        <TextField
          id="standard-password-input"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <Button variant="contained" sx={{ bgcolor: 'green', width: 40, height: 30 ,marginTop:2 ,marginBottom:1}} gap={2} align="center" > Submit </Button>
      </Box>
      <button onClick={handleGoogleAuth}>Google</button>
      <Button>Hello</Button>
      <Footer/>
    </div>
  );
};

export default Signup;
