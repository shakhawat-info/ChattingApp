import React, { useState } from "react";

// icons
import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { BiLogInCircle } from "react-icons/bi";

// sign in/up with icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiNamecheap } from "react-icons/si";
import { IoCalendarNumberOutline } from "react-icons/io5";

// images
// import loginsignupIMG from "../images/chatting.jpg";
import loginsignupIMG2 from "../../images/cting.jpg";
import { Link } from "react-router";

// metarial tailwind

const Signup = () => {

  // Password Show/Hide 
  let [PassShowHide, setPassShowHide] = useState(true);

  let PasshowHide = () => {
    if (PassShowHide) {
      setPassShowHide(false);
    } else {
      setPassShowHide(true);
    }
  };


  // Confirm Password Show/Hide 
  let [ConfirmPass, setConfirmPass] = useState(true);

  let confirmPassword = () => {
    if (ConfirmPass) {
      setConfirmPass(false);
    } else {
      setConfirmPass(true);
    }
  };



  // login/signup Form Submition

  let FormSubmit = (event)=>{
    event.preventDefault();
    console.log('form submited');
  }


  return (
    <>
    <section className="overflow-x-hidden relative">
    <div className="container">

      <div className=" flex justify-between h-screen md:px-[10px] px-0 lg:flex-row-reverse " >
        <div id="stars-container md:hidden">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className="lg:w-3/5 sm:w-2/5   flex-col justify-center items-center hidden md:flex ">
          <img src={loginsignupIMG2} alt="loginsignupIMG" className="w-[60%] mx-auto rounded-md " />
          <h1 className="font-aldrich text-primarytxt md:text-bodybg font-black text-center md:text-xl text-3xl md:mt-5 mt-[50px]  ">Welcome to the professional community.</h1>
          <p className="font-ubuntu text-primarytxt md:text-bodybg text-md md:text-sm text-center font-semibold mt-2  ">Enjoy your life with your family and friends. Thank you for choosing us</p>
        </div>
        <div className="md:w-3/5 w-full bg-[rgba(29,29,29,0.99)] md:bg-transparent h-screen overflow-y-scroll md:shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
            <div className="h-full flex flex-col justify-around animate-showReg">
            <div className="p-5  ">
              <h2 className="font-aldrich font-bold text-[36px] text-primarytxt md:text-bodybg  ">
                Create an account!
              </h2>
              <form action="#" className="flex flex-col gap-y-8 mt-9  " onSubmit={FormSubmit}>
                <div className="relative   ">
                  <SiNamecheap  className="boxIcon   "/>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className=" sign-InUp "
                    required="required"
                  />
                </div>
                <div className="relative   ">
                  <FaUser className="boxIcon   " />
                  <input
                    type="email"
                    placeholder="Username or Email"
                    className=" sign-InUp "
                    required="required"
                  />
                </div>
                <div className="relative   ">
                  <IoCalendarNumberOutline className="boxIcon"/>
                  <input
                    type="date"
                    placeholder="Username or Email"
                    className=" sign-InUp "
                    required="required"
                  />
                </div>
                <div className="relative">
                  <MdLockPerson className="boxIcon  " />
                  {PassShowHide ? (
                    <input
                      type="text"
                      placeholder="Password"
                      className=" sign-InUp "
                      required="required"
                    />
                  ) : (
                    <input
                      type="password"
                      placeholder="Password"
                      className=" sign-InUp "
                      required="required"
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
                      required="required"
                    />
                  ) : (
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className=" sign-InUp "
                      required="required"
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
              <h4 className="font-aldrich text-clrthird mt-[-20px] text-[18px] ">
                By clicking the{" "}
                <span className="link hover:after:w-full ">Register</span>{" "}
                button, you agree to the{" "}
                <span className="link hover:after:w-full ">Terms of Use</span>{" "}
                and{" "}
                <span className="link hover:after:w-full ">Privacy Policy</span>{" "}
              </h4>
              <div className="flex justify-between ">
                <span className="font-aldrich text-primarytxt md:text-bodybg text-[24px] font-semibold capitalize ">
                  register
                </span>
                <button
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
                <Link to="/Login"
                  className="text-brand link hover:after:w-full "
                >
                  login
                </Link>
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

export default Signup;
