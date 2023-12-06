/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { app } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const auth = getAuth(app);
  const rePassRef = useRef(null);
  const [matchPass, setMatchPass] = useState(true);
  const [agree, setAgree] = useState(false);

  const notify = () => toast("Wow so easy!");

  const handleAgree = () => {
    setAgree(!agree);
  };

  const handleUser = (e) => {
    event.preventDefault();

    const email = e.target.email.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const name = firstName + "_" + lastName;

    const pass = e.target.password.value;
    const rePass = e.target.rePassword.value;

    if (pass === rePass) {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name
          });
          toast.success("Register Succesfull");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      rePassRef.current.value = "";
      setMatchPass(false);
      console.log("i");
      return;
    }
  };

  return (
    <form onSubmit={handleUser} className="w-[50%] flex flex-col gap-8">
      <div className="flex justify-between items-end px-6">
        <h1 className="font-semibold text-2xl">Sign Up</h1>
      </div>
      <div className="flex w-full gap-3">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="border-b-2 px-6 py-3 w-2/4 text-xl focus:outline-none focus:border-b-2 focus:border-green-400"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="border-b-2 px-6 py-3 w-2/4 text-xl focus:outline-none focus:border-b-2 focus:border-green-400"
          required
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className="border-b-2 px-6 py-3 w-full  text-xl focus:outline-none focus:border-b-2 focus:border-green-400"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="border-b-2 px-6 py-3 w-full  text-xl focus:outline-none focus:border-b-2 focus:border-green-400"
      />
      <input
        type="password"
        placeholder="Re type Password"
        name="rePassword"
        ref={rePassRef}
        className={`border-b-2 px-6 py-3 w-full  text-xl focus:outline-none focus:border-b-2 focus:border-green-400 ${
          matchPass ? "" : "border-red-400"
        }`}
      />
      <div className="flex gap-3 px-6">
        <input
          onChange={handleAgree}
          required
          type="checkbox"
          name=""
          id=""
          className={`${agree ? "" : "text-red-600"}`}
        />{" "}
        <span>
          i accept the{" "}
          <span className="text-green-500 underline">terms and service</span>
        </span>
      </div>
      <button className="bg-green-300 w-full py-3 rounded-full">
        Register
      </button>
      <div className="flex justify-center">
        <Link to={"/"}>Already Have an Account </Link>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
};

export default Register;
