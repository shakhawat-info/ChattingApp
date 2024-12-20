import React, { useState } from "react";

// icons
import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { BiLogInCircle } from "react-icons/bi";
import { BiMessageSquareError } from "react-icons/bi";

// sign in/up with icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

// images
import loginsignupIMG2 from "../images/cting.jpg";
import { Link } from "react-router";

const Login = () => {
  // Name Function
  let [email, setEmail] = useState("");
  let [mailerr, setMailerr] = useState(false);

  let username = (e) => {
    setEmail(e.target.value);
    setMailerr(false);
  };

  // Password Function

  // pass show/hide
  let [PassShowHide, setPassShowHide] = useState(true);

  let PasshowHide = () => {
    if (PassShowHide) {
      setPassShowHide(false);
    } else {
      setPassShowHide(true);
    }
  };

  let [password , setPassword] = useState('');
  let [passerror , setPasserror] = useState(false);
  let passwordFn = (e)=>{
    setPassword(e.target.value);
    setPasserror(false);
  }

  // login/signup Form Submition
  let FormSubmit = (event) => {
    event.preventDefault();
    console.log("form submited");
  };

  // Login function
  let Login = () => {
    if (!email) {
      setMailerr(true);
    }
    if(!password){
      setPasserror(true)
    }
  };
  return (
    <>
      <section className="overflow-x-hidden absolute top-0 right-0 w-full animate-showLogin">
        <div className="container">
          <div className=" flex justify-between h-screen md:px-[10px] px-0 lg:flex-row-reverse ">
            <div id="stars-container md:hidden">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </div>
            <div className="lg:w-3/5 sm:w-2/5   flex-col justify-center items-center hidden md:flex ">
              <img
                src={loginsignupIMG2}
                alt="loginsignupIMG"
                className="w-[60%] mx-auto rounded-md "
              />
              <h1 className="font-aldrich text-primarytxt md:text-bodybg font-black text-center md:text-xl text-3xl md:mt-5 mt-[50px]  ">
                Welcome to the <span className="text-brand">'Ochigram'</span> (professional community).
              </h1>
              <p className="font-ubuntu text-primarytxt md:text-bodybg text-md md:text-sm text-center font-semibold mt-2  ">
                Enjoy your life with your family and friends. Thank you for
                choosing us
              </p>
            </div>
            <div className="md:w-3/5 w-full bg-[rgba(29,29,29,0.99)] md:bg-transparent h-screen overflow-y-scroll md:shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
              <div className="h-full flex flex-col justify-around animate-showLogin ">
                <div className="p-5">
                  <h2 className="font-aldrich capitalize font-bold text-[36px] text-primarytxt md:text-bodybg   ">
                    welcome back!
                  </h2>
                  <form
                    action="#"
                    className="flex flex-col gap-y-8 mt-9  "
                    onSubmit={FormSubmit}
                  >
                    <div className="relative   ">
                      <FaUser className={`boxIcon ${mailerr && 'text-brand'}`} />
                      <input
                        onChange={username}
                        type="text"
                        placeholder="Username or Email"
                        className={`sign-InUp ${mailerr && 'placeholder:text-brand'}`}
                      />
                      {mailerr && <p className="flex items-center gap-x-1 text-brand font-ubuntu text-[12px]  "><span>Username/E-mail is required</span><BiMessageSquareError /></p>}
                    </div>
                    <div className="relative">
                      <MdLockPerson className={`boxIcon ${passerror && 'text-brand'}`} />
                      {PassShowHide ? (
                        <input
                        onChange={passwordFn}
                          type="text"
                          placeholder="Password"
                          className={`sign-InUp ${passerror && 'placeholder:text-brand '}`}
                        />
                      ) : (
                        <input
                        onChange={passwordFn}
                          type="password"
                          placeholder="Password"
                          className={`sign-InUp ${passerror && 'placeholder:text-brand '}`}
                        />
                      )}
                      {passerror && <p className="flex items-center gap-x-1 text-brand font-ubuntu text-[12px]  "><span>Password is required</span><BiMessageSquareError /></p>}
                      <button
                        type="button"
                        onClick={PasshowHide}
                        className="absolute top-0 right-[10px]  p-3 "
                      >
                        {PassShowHide ? (
                          <GoEye className={`text-clrthird text-[23px] ${passerror && 'text-brand'}`} />
                        ) : (
                          <GoEyeClosed className={`text-clrthird text-[23px] ${passerror && 'text-brand'}`} />
                        )}
                      </button>
                    </div>
                    <h4 className="font-aldrich text-brand mt-[-20px] ml-auto text-[18px] link hover:after:w-full w-fit after:bottom-[5px] ">
                      Forgot Password?
                    </h4>
                    <div className="flex items-center justify-between ">
                      <span className="font-aldrich text-primarytxt md:text-bodybg text-[24px] font-semibold capitalize ">
                        sign in
                      </span>
                      <button
                        onClick={Login}
                        type="submit"
                        className="w-[50px] h-[50px] grid place-items-center bg-brand text-[25px] rounded-full text-primarytxt "
                      >
                        <BiLogInCircle />
                      </button>
                      {/* <IconButton className="w-[100px] h-[100px] grid place-items-center bg-brand text-[20px] rounded-full text-primarytxt ">
              <BiLogInCircle />
            </IconButton> */}
                    </div>
                  </form>
                </div>
                <div className="">
                  <h5 className="font-aldrich text-clrthird  text-xl text-center   ">
                    sign in with
                  </h5>
                  <ul className="flex justify-center gap-x-10 mt-10  ">
                    <li className="signInwith">
                      <FcGoogle />
                    </li>
                    <li className="signInwith text-[#1564ef]">
                      <FaFacebookF />
                    </li>
                    <li className="signInwith text-[#fff] ">
                      <FaApple />
                    </li>
                    <li className="signInwith text-brand ">
                      <CiMail />
                    </li>
                  </ul>
                  <h3 className="text-center font-ubuntu text-clrthird font-bold mt-10  ">
                    You don't have any account ? Please{" "}
                    <Link
                      to="/Signup"
                      className="text-brand link hover:after:w-full   "
                    >
                      {" "}
                      create{" "}
                    </Link>{" "}
                    an account
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
