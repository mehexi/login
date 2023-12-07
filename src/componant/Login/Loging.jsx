/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from "firebase/auth";
import { app } from "../../App";
import { ToastContainer, toast } from "react-toastify";

const Loging = () => {
  const [showPass, setShowPass] = useState(true);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const [error, setError] = useState(false);
  const handleError = () => {
    setError(!error);
  };

  const [resetPass, setResetPass] = useState(false);
  const handleResetError = () => {
    setResetPass(!resetPass);
  };

  const auth = getAuth(app);

  const handleSignIn = (e) => {
    event.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;
        console.log(user);
        toast.success(`welcome ${user.displayName.split("_").join(" ")}`);
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
        handleError();
      });
  };

  const handleResetPass = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    // console.log(email);
      sendPasswordResetEmail(auth, email)
          .then((message) => {
              toast.success("Password reset email has been sent");
          })
          .catch(error => {
               handleResetError()
          })
    
  };

  return (
    <form onSubmit={handleSignIn} className="w-[50%] flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">Sign in</h1>
        <span className={`${error ? "" : "hidden"} text-red-600`}>
          Email or Password invalid
        </span>
      </div>
      <input
        id="email"
        type="email"
        placeholder={resetPass? 'enter your email':'email'}
        name="email"
        className={`border-b-2 px-6 py-3 w-full text-xl focus:outline-none focus:border-b-2 focus:border-green-400 ${resetPass?'border-red-400 placeholder-red-400':''}`}
      />
      <div className="relative">
        <input
          type={showPass ? "password" : "text"}
          placeholder="password"
          name="password"
          className="border-b-2 px-6 py-3 w-full text-xl focus:outline-none focus:border-b-2 focus:border-green-400"
        />
        <Link onClick={handleShowPass} className="absolute top-1/2 right-3">
          {showPass ? (
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
          )}
        </Link>
      </div>
      <Link onClick={handleResetPass} className="ml-auto ">
        Forgot password?
      </Link>

      <button className="bg-green-300 w-full py-3 rounded-full">submit</button>
      <Link className="mx-auto" to={"/register"}>
        Register
      </Link>
      <ToastContainer />
    </form>
  );
};

export default Loging;
