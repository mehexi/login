/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Loging = () => {
  const [showPass, setShowPass] = useState(true);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    
      <form className="w-[50%] flex flex-col gap-8">
        <h1 className="font-semibold text-2xl px-6">Sign in</h1>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="border-b-2 px-6 py-3 w-full text-xl focus:outline-none focus:border-b-2 focus:border-green-400"
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
        <Link className="ml-auto ">Forgot password?</Link>
        <button className="bg-green-300 w-full py-3 rounded-full">
          submit
        </button>
        <Link className="mx-auto" to={"/register"}>
          Register
        </Link>
      </form>
    
  );
};

export default Loging;
