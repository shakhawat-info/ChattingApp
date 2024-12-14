import React, { useState } from "react";

// icons
import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { BiLogInCircle } from "react-icons/bi";

// sign in with icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

// images
import loginsignupIMG from "../images/chatting.jpg";

// metarial tailwind
import { button, IconButton } from "@material-tailwind/react";

const LoginSignup = () => {
  let [PassShowHide, setPassShowHide] = useState(true);

  let PasshowHide = () => {
    if (PassShowHide) {
      setPassShowHide(false);
    } else {
      setPassShowHide(true);
    }
  };

  let [ConfirmPass, setConfirmPass] = useState(true);

  let confirmPassword = () => {
    if (ConfirmPass) {
      setConfirmPass(false);
    } else {
      setConfirmPass(true);
    }
  };

  // login show hide option
  let [showLoginPage, setShowLoginPage] = useState(true);

  let loginPageshow = () => {
    setShowLoginPage(true);
  };
  let signupShow = () => {
    setShowLoginPage(false);
  };
  return (
    <>
    <section className="overflow-x-hidden relative">
    <div className="container">

      <div className=" flex justify-between h-screen md:px-[10px] px-0 " >
        <div id="stars-container">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className="lg:w-3/5 sm:w-2/5   flex-col justify-center items-center hidden md:flex">
          <img src={loginsignupIMG} alt="loginsignupIMG" className="w-[60%] mx-auto rounded-md " />
          <h1 className="font-aldrich text-primarytxt font-black text-center md:text-xl text-3xl md:mt-5 mt-[50px]  ">Welcome to the professional community.</h1>
          <p className="font-ubuntu text-primarytxt text-md md:text-sm text-center font-semibold mt-2  ">Enjoy your life with your family and friends. Thank you for choosing us</p>
        </div>
        <div className="md:w-3/5 w-full bg-[rgba(29,29,29,0.6)] h-screen overflow-y-scroll ">
          {showLoginPage ? (
            <div className="h-full flex flex-col justify-around  ">
              <div className="p-5">
                <h2 className="font-aldrich capitalize font-bold text-[36px] text-primarytxt  ">
                  welcome back!
                </h2>
                <form action="#" className="flex flex-col gap-y-8 mt-9  ">
                  <div className="relative   ">
                    <FaUser className="boxIcon   " />
                    <input
                      type="text"
                      placeholder="Username or Email"
                      className=" sign-InUp "
                    />
                  </div>
                  <div className="relative">
                    <MdLockPerson className="boxIcon  " />
                    {PassShowHide ? (
                      <input
                        type="text"
                        placeholder="Password"
                        className=" sign-InUp "
                      />
                    ) : (
                      <input
                        type="password"
                        placeholder="Password"
                        className=" sign-InUp "
                      />
                    )}
                    <button
                      type="button"
                      onClick={PasshowHide}
                      className="absolute top-0 right-[10px]  p-3 "
                    >
                      {PassShowHide ? (
                        <GoEye className="text-clrthird text-[23px]" />
                      ) : (
                        <GoEyeClosed className="text-clrthird text-[23px]" />
                      )}
                    </button>
                  </div>
                </form>
                <h4 className="font-aldrich text-brand mt-3 ml-auto text-[18px] link hover:after:w-full w-fit">
                  Forgot Password?
                </h4>
                <div className="flex justify-between mt-12">
                  <span className="font-aldrich text-primarytxt text-[24px] font-semibold capitalize ">
                    sign in
                  </span>
                  <button
                    type="button"
                    className="w-[50px] h-[50px] grid place-items-center bg-brand text-[25px] rounded-full text-primarytxt "
                  >
                    <BiLogInCircle />
                  </button>
                  {/* <IconButton className="w-[100px] h-[100px] grid place-items-center bg-brand text-[20px] rounded-full text-primarytxt ">
              <BiLogInCircle />
            </IconButton> */}
                </div>
              </div>
              <div className="">
                <h5 className="font-aldrich text-clrthird text-xl text-center   ">
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
                  <span
                    className="text-brand link hover:after:w-full   "
                    onClick={signupShow}
                  >
                    create
                  </span>{" "}
                  an account
                </h3>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-around">
            <div className="p-5 bg-bodybg ">
              <h2 className="font-aldrich font-bold text-[36px] text-primarytxt  ">
                Create an account!
              </h2>
              <form action="#" className="flex flex-col gap-y-8 mt-9  ">
                <div className="relative   ">
                  <FaUser className="boxIcon   " />
                  <input
                    type="text"
                    placeholder="Username or Email"
                    className=" sign-InUp "
                  />
                </div>
                <div className="relative">
                  <MdLockPerson className="boxIcon  " />
                  {PassShowHide ? (
                    <input
                      type="text"
                      placeholder="Password"
                      className=" sign-InUp "
                    />
                  ) : (
                    <input
                      type="password"
                      placeholder="Password"
                      className=" sign-InUp "
                    />
                  )}
                  <button
                    type="button"
                    onClick={PasshowHide}
                    className="absolute top-0 right-[10px]  p-3 "
                  >
                    {PassShowHide ? (
                      <GoEye className="text-clrthird text-[23px]" />
                    ) : (
                      <GoEyeClosed className="text-clrthird text-[23px]" />
                    )}
                  </button>
                </div>
                <div className="relative">
                  <MdLockPerson className="boxIcon  " />
                  {ConfirmPass ? (
                    <input
                      type="text"
                      placeholder="Confirm password"
                      className=" sign-InUp "
                    />
                  ) : (
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className=" sign-InUp "
                    />
                  )}
                  <button
                    type="button"
                    onClick={confirmPassword}
                    className="absolute top-0 right-[10px]  p-3 "
                  >
                    {ConfirmPass ? (
                      <GoEye className="text-clrthird text-[23px]" />
                    ) : (
                      <GoEyeClosed className="text-clrthird text-[23px]" />
                    )}
                  </button>
                </div>
              </form>
              <h4 className="font-aldrich text-clrthird mt-3 text-[18px] ">
                By clicking the{" "}
                <span className="link hover:after:w-full ">Register</span>{" "}
                button, you agree to the{" "}
                <span className="link hover:after:w-full ">Terms of Use</span>{" "}
                and{" "}
                <span className="link hover:after:w-full ">Privacy Policy</span>{" "}
              </h4>
              <div className="flex justify-between mt-12">
                <span className="font-aldrich text-primarytxt text-[24px] font-semibold capitalize ">
                  register
                </span>
                <button
                  type="button"
                  className="w-[50px] h-[50px] grid place-items-center bg-brand text-[25px] rounded-full text-primarytxt "
                >
                  <BiLogInCircle />
                </button>
                {/* <IconButton className="w-[100px] h-[100px] grid place-items-center bg-brand text-[20px] rounded-full text-primarytxt ">
            <BiLogInCircle />
          </IconButton> */}
              </div>

            </div>
            <div className="">
                <h5 className="font-aldrich text-clrthird text-xl text-center   ">
                  sign up with
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
              <h3 className="text-center font-ubuntu text-clrthird font-bold mt-10 ">
                Do you have an account already? Please{" "}
                <span
                  className="text-brand link hover:after:w-full "
                  onClick={loginPageshow}
                >
                  login
                </span>
              </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    </section>
    </>
  );
};

export default LoginSignup;
