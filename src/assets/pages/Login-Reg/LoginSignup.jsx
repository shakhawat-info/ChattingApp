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

// metarial tailwind
import { button, IconButton } from "@material-tailwind/react";


const LoginSignup = () => {

    let [PassShowHide , setPassShowHide] = useState(true)

    let PasshowHide = ()=>{
        if(PassShowHide){
            setPassShowHide(false)
        }
        else{
            
            setPassShowHide(true)
        }
    }

    let [ConfirmPass , setConfirmPass] = useState(true) ;

    let confirmPassword = ()=>{
      if(ConfirmPass){
        setConfirmPass(false)
      }
      else{
        setConfirmPass(true)

      }
    }


    // login show hide option 
    let [showLoginPage , setShowLoginPage] = useState(true);

    let loginPageshow = ()=>{
      setShowLoginPage(true);
    }
    let signupShow = ()=>{
      setShowLoginPage(false);
    }
  return (
    <>
    {
      showLoginPage ?
        <div className="p-5 bg-bodybg ">
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
              {
                PassShowHide ?
                <input type="text" placeholder="Password" className=" sign-InUp " />
                :
                <input type="password" placeholder="Password" className=" sign-InUp " />
              }
              <button type="button" onClick={PasshowHide} className="absolute top-0 right-[10px]  p-3 ">
                {
                    PassShowHide ?
                    <GoEye className="text-clrthird text-[23px]" />
                    :
                    <GoEyeClosed className="text-clrthird text-[23px]" />
                }
              </button>
            </div>
          </form>
          <h4 className="font-aldrich text-brand mt-3 ml-auto text-[18px] link hover:after:w-full w-fit">Forgot Password?</h4>
          <div className="flex justify-between mt-12">
            <span className="font-aldrich text-primarytxt text-[24px] font-semibold capitalize ">sign in</span>
            <button type="button" className="w-[50px] h-[50px] grid place-items-center bg-brand text-[25px] rounded-full text-primarytxt " ><BiLogInCircle /></button>
            {/* <IconButton className="w-[100px] h-[100px] grid place-items-center bg-brand text-[20px] rounded-full text-primarytxt ">
              <BiLogInCircle />
            </IconButton> */}
          </div>
          <div className="mt-20">
            <h5 className="font-aldrich text-clrthird text-xl text-center   ">sign in with</h5>
            <ul className="flex justify-center gap-x-10 mt-10  ">
                <li className="signInwith"><FcGoogle /></li>
                <li className="signInwith text-[#1564ef]"><FaFacebookF /></li>
                <li className="signInwith text-[#fff] "><FaApple /></li>
                <li className="signInwith text-brand "><CiMail /></li>
            </ul>
          </div>
          <h3 className="text-center font-ubuntu text-clrthird font-bold mt-10  ">You don't have an account ? Please <span className="text-brand link hover:after:w-full   " onClick={signupShow}>create</span> an account</h3>
        </div>
        :
        <>
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
            {
              PassShowHide ?
              <input type="text" placeholder="Password" className=" sign-InUp " />
              :
              <input type="password" placeholder="Password" className=" sign-InUp " />
            }
            <button type="button" onClick={PasshowHide} className="absolute top-0 right-[10px]  p-3 ">
              {
                  PassShowHide ?
                  <GoEye className="text-clrthird text-[23px]" />
                  :
                  <GoEyeClosed className="text-clrthird text-[23px]" />
              }
            </button>
          </div>
          <div className="relative">
            <MdLockPerson className="boxIcon  " />
            {
              ConfirmPass ? 
              <input type="text" placeholder="Confirm password" className=" sign-InUp " />
              :
              <input type="password" placeholder="Confirm password" className=" sign-InUp " />
            }
            <button type="button" onClick={confirmPassword} className="absolute top-0 right-[10px]  p-3 ">
              {
                ConfirmPass ?
                <GoEye className="text-clrthird text-[23px]" />
                :
                <GoEyeClosed className="text-clrthird text-[23px]" />
              }
            </button>
          </div>
        </form>
        <h4 className="font-aldrich text-clrthird mt-3 text-[18px] ">By clicking the <span className="link hover:after:w-full ">Register</span> button, you agree to the <span className="link hover:after:w-full ">Terms of Use</span> and <span className="link hover:after:w-full ">Privacy Policy</span> </h4>
        <div className="flex justify-between mt-12">
          <span className="font-aldrich text-primarytxt text-[24px] font-semibold capitalize ">register</span>
          <button type="button" className="w-[50px] h-[50px] grid place-items-center bg-brand text-[25px] rounded-full text-primarytxt " ><BiLogInCircle /></button>
          {/* <IconButton className="w-[100px] h-[100px] grid place-items-center bg-brand text-[20px] rounded-full text-primarytxt ">
            <BiLogInCircle />
          </IconButton> */}
        </div>
        <div className="mt-20">
          <h5 className="font-aldrich text-clrthird text-xl text-center   ">sign up with</h5>
          <ul className="flex justify-center gap-x-10 mt-10  ">
              <li className="signInwith"><FcGoogle /></li>
              <li className="signInwith text-[#1564ef]"><FaFacebookF /></li>
              <li className="signInwith text-[#fff] "><FaApple /></li>
              <li className="signInwith text-brand "><CiMail /></li>
          </ul>
        </div>
        <h3 className="text-center font-ubuntu text-clrthird font-bold mt-10  ">Do you have an account already? Please <span className="text-brand link hover:after:w-full " onClick={loginPageshow}>login</span></h3>
      </div>
        </>
    }
    </>
  );
};


export default LoginSignup