import React, { useState } from "react";
import "./LoginForm.css";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiWebauthn } from "react-icons/si";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    validateEmail();
    validatePassword();

    const data = {
      email: email,
      password: password,
    };
    if (!emailError && !passwordError) {

      alert("Login Sucessful")
    }
    console.log(data);
   setEmail("")
   setPassword("")
  };
  
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 h-screen w-full  main-box">
      <div className=" leftside   w-90 h-70 hidden sm:block">
        <div className="cross"></div>
        <div className="content ">
          <h1 className="text-5xl font-bold   text-white pb-5">
            100% Uptime 😎
          </h1>
          <h3 className=" text-2xl font-bold w-72 text-slate-300 px-2 pb-1 ">
            Zero Infrastructure
          </h3>
          <span className=" text-2xl font-bold  text-slate-300 px-1">
            Management
          </span>
        </div>

        <div className="bottom text-white ">
          <p className="">
            <span>{<SiWebauthn size={20} />}</span>
            <span className="pl-3">aesthisia.com</span>
          </p>
          <div className="icon">
            <span>{<FaLinkedinIn size={20} />}</span>
            <span>{<FaFacebookF size={20} />}</span>
            <span>{<FiInstagram size={20} />}</span>
          </div>
        </div>
      </div>

      <div className="form-con bg-white-300">
        <div className="pief"></div>
        <form className="max-w[400px]  px-8 rounded-lg" onSubmit={handleSubmit}>
          <h1 className="text-5xl font-semibold text-black-600 w-30">
            Welcome <span className="back">Back!</span>
          </h1>
          <p className="text-slate-800 text-center text-xl py-3">
            Glad to see you, Again{" "}
          </p>
          <div className=" rounded-lg  my-5 w-70">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              className="w-80 p-2 text-xl font-semibold rounded-md border-color-gary outline-none"
              required
            />
               {emailError && <div className="error">{emailError}</div>}
          </div>
          <div>
            <input
              type="Password"
              placeholder="Enter your Password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
              className="w-80 p-2 text-xl font-semibold rounded-md border-none outline-none"
              required
            />
               {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <p className="float-right text-md text-slate-800 px-6 py-2">
            forgot Password?
          </p>

          <div>
            <input
              type="submit"
              value="Log in"
              className="w-80 p-2 text-2xl  text-center mt-6 text-white font-semibold rounded-md border-none outline-none bg-black"
            />
          </div>
        </form>
        <p className="pt-7 text-slate-800 text-md">
          Don't have an account yet? <span className="back pl-3">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
