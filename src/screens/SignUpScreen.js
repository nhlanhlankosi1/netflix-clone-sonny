import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    //prevent the page from reloading when the submit button is clicked
    e.preventDefault();

    //Get the user's email and password from the text fields
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    //Create the user on Firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {})
      .catch((e) => {
        alert(e.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(`Signed in as ${authUser.user.email}`);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span className="signUpScreen_link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
