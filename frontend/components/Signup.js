import React from "react";
import styles from "../styles/Signup.module.css";
import { useState } from "react";

const Signup = ({ signup }) => {
  const [username, setUsername] = useState();
  const [profile, setProfile] = useState();

  const signupClicked = () => {
    console.log("SIGNING UPP DAWG");
    signup(username, profile);
  };

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.title}>Orbital Uplink to SpockTok</h1>
      <div className={styles.signupForm}>
        <div className={styles.inputField}>
          <div className={styles.inputTitle}>Username:</div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputField}>
          <div className={styles.inputTitle}>Profile Pic:</div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.loginButton} onClick={signupClicked}>
        Deploy
      </div>
    </div>
  );
};

export default Signup;
