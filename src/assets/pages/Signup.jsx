import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Link, useNavigate } from "react-router";



// icons
import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { BiLogInCircle } from "react-icons/bi";
import { BiMessageSquareError } from "react-icons/bi";
import { IoCheckmarkDone } from "react-icons/io5";

// sign in/up with icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiNamecheap } from "react-icons/si";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoAlert } from "react-icons/go";
import { TbAlertHexagon } from "react-icons/tb";

// images
import loginsignupIMG2 from "../images/cting.jpg";


const Signup = () => {
  let navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  

  // Name
  let [name, setName] = useState("");
  let [nameerr, setNameerr] = useState(false);
  let nameFunc = (e) => {
    setNameerr(false);
    setName(e.target.value);
  };
  // Username
  let [email, setEmail] = useState("");
  let [mailerr, setMailerr] = useState(false);

  let mailFunc = (e) => {
    setMailerr(false);
    setEmail(e.target.value);
  };
  // Birth Date
  let [birth, setBirth] = useState("");
  let [birtherr, setBirtherr] = useState(false);
  let birthFunc = (e) => {
    setBirtherr(false);
    setBirth(e.target.value);
  };

  // Password Show/Hide
  let [PassShowHide, setPassShowHide] = useState(true);

  let PasshowHide = () => {
    if (PassShowHide) {
      setPassShowHide(false);
    } else {
      setPassShowHide(true);
    }
  };

  let [passVal, setPassVal] = useState("");
  let [passerr, setPasserr] = useState(false);
  let passFunc = (e) => {
    setPasserr(false);
    setPassVal(e.target.value);
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

  let [confpassVal, setConfpassVal] = useState("");
  let [confirmpasserr, setConfirmpasserr] = useState(false);

  let confirmPassFunc = (e) => {
    setConfirmpasserr(false);
    setConfpassVal(e.target.value);
  };

  // signup Form Submition

  let FormSubmit = (event) => {
    event.preventDefault();
    // console.log('form submited');
  };

  // Form values
  let [err , setErr] = useState(null);
  useEffect(()=>{
    setTimeout(()=>{

    } , 2000)

  },[])
  
 
  let [created, setCreated] = useState("");
  // SignupSubmit Function
  let SignupSubmit = () => {
    if (!name) {
      setNameerr(true);
    }

    if (!email) {
      setMailerr(true);
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setMailerr(false);
    }

    if (!birth) {
      setBirtherr(true);
    }

    if (!passVal) {
      setPasserr(true);
    } else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(passVal)) {
      setPasserr(false);
    }

    if (!confpassVal || passVal !== confpassVal) {
      setConfirmpasserr(true);
    }
    if (name && email && birth && passVal && confpassVal) {
      createUserWithEmailAndPassword(auth, email, passVal)
        .then((userCredential) => {
          // Update Profile
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "https://ibb.co.com/yQGMQF7",
          }).then(() => {
              // send Email
              sendEmailVerification(auth.currentUser).then(() => {
                // Send Signup data to Firebase Realtime database
                set(ref(db, 'users/' + user.uid), {
                  displayName: name,
                  email: email,
                  Birth: birth ,
                  photoURL : "https://picsum.photos/200"
                }).then(()=>{
                  setCreated('Account created Successfull')
                  navigate('/')
                }).catch(()=>{
                  setCreated('Account creation error!')
                })
              });
            }).catch((error) => {
              // An error occurred
              setErr(error)
              setTimeout(()=>{
                setErr(null)
              } , 4000)
            });

          // ...
          console.log(user);
        }).catch((error) => {
          const errorMessage = error.message;
          // An error occurred
          setErr(error.code)
          setTimeout(()=>{
            setErr(null)
          } , 4000)
        });
    }
  };
  return (
    <>
      <section className="overflow-x-hidden absolute top-0 left-0 w-full animate-showReg">
        <div className={` ${err ? 'scale-100' : 'scale-0'} duration-[.4s]    h-auto w-fit pb-5 px-10 bg-[#f9e4e1] text-center rounded-md border-red-500 border-[1px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2]  font-aldrich `}>
          <TbAlertHexagon className='absolute top-[-22px] left-[50%] translate-x-[-50%] text-[40px] text-red-500   '/>
          <h2 className='flex items-center gap-2 text-xl mt-7 font-medium '><span>Something went wrong</span> <GoAlert /></h2>
          <p className="mt-2">{err}</p>
        </div>
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
              <h1 className="font-aldrich lg:text-bgsecondery text-primarytxt md:text-bodybg font-black text-center md:text-xl text-3xl md:mt-5 mt-[50px]  ">
                Welcome to the <span className="text-brand">'Ochigram'</span>{" "}
                (professional community).
              </h1>
              <p className="font-ubuntu lg:text-bgsecondery text-primarytxt md:text-bodybg text-md md:text-sm text-center font-semibold mt-2  ">
                Enjoy your life with your family and friends. Thank you for
                choosing us
              </p>
            </div>
            <div className="md:w-3/5 w-full bg-[rgba(29,29,29,0.99)] md:bg-transparent h-screen overflow-y-scroll md:shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
              <div className="h-full flex flex-col justify-around ">
                <div className="p-5  ">
                  <h2 className="font-aldrich font-bold text-[36px] text-primarytxt md:text-bodybg  ">
                    Create an account!
                  </h2>
                  <form
                    action="#"
                    className="flex flex-col gap-y-8 mt-9  "
                    onSubmit={FormSubmit}
                  >
                    <div className="relative   ">
                      <SiNamecheap
                        className={`boxIcon ${nameerr && "text-red-600"}`}
                      />
                      <input
                        onChange={nameFunc}
                        type="text"
                        placeholder="Full Name"
                        className={`sign-InUp ${
                          nameerr && "placeholder:text-red-600"
                        }`}
                      />
                      {nameerr && (
                        <p className="flex items-center gap-x-1 text-brand font-ubuntu text-[12px]  ">
                          <span>Name is required</span>
                          <BiMessageSquareError />
                        </p>
                      )}
                    </div>
                    <div className="relative   ">
                      <FaUser
                        className={`boxIcon  ${mailerr && "text-red-600"}`}
                      />
                      <input
                        onChange={mailFunc}
                        type="email"
                        placeholder="Email"
                        className={`sign-InUp ${
                          mailerr && "placeholder:text-red-600"
                        }`}
                      />
                      {mailerr && (
                        <p className="flex items-center gap-x-1 text-brand font-ubuntu text-[12px]  ">
                          <span>E-mail is required</span>
                          <BiMessageSquareError />
                        </p>
                      )}
                    </div>
                    <div className="relative   ">
                      <IoCalendarNumberOutline
                        className={`boxIcon ${birtherr && "text-red-600 "}`}
                      />
                      <input
                        onChange={birthFunc}
                        type="date"
                        placeholder="Enter your birth date"
                        className=" sign-InUp "
                      />
                      {birtherr && (
                        <p className="flex items-center gap-x-1 text-brand font-ubuntu text-[12px]  ">
                          <span>Birth date is required</span>
                          <BiMessageSquareError />
                        </p>
                      )}
                    </div>
                    <div className="relative">
                      <MdLockPerson
                        className={`boxIcon ${passerr && "text-red-600"}`}
                      />
                      {PassShowHide ? (
                        <input
                          onChange={passFunc}
                          type="text"
                          placeholder="Password"
                          className={`sign-InUp ${
                            passerr && "placeholder:text-red-600"
                          }`}
                        />
                      ) : (
                        <input
                          onChange={passFunc}
                          type="password"
                          placeholder="Password"
                          className={`sign-InUp ${
                            passerr && "placeholder:text-red-600"
                          }`}
                        />
                      )}
                      <button
                        type="button"
                        onClick={PasshowHide}
                        className="absolute top-0 right-[10px]  p-3 "
                      >
                        {PassShowHide ? (
                          <GoEye
                            className={`text-clrthird text-[23px] ${
                              passerr && "text-red-600"
                            }`}
                          />
                        ) : (
                          <GoEyeClosed
                            className={`text-clrthird text-[23px] ${
                              passerr && "text-red-600"
                            }`}
                          />
                        )}
                      </button>
                      {passerr && (
                        <p className="flex items-center gap-x-1 text-brand font-ubuntu text-[12px]  ">
                          <span>Password is required</span>
                          <BiMessageSquareError />
                        </p>
                      )}
                    </div>
                    <div className="relative">
                      <MdLockPerson
                        className={`boxIcon ${confirmpasserr && "text-brand"}`}
                      />
                      {ConfirmPass ? (
                        <input
                          onChange={confirmPassFunc}
                          type="text"
                          placeholder="Confirm password"
                          className={`sign-InUp ${
                            confirmpasserr && "placeholder:text-brand"
                          }`}
                        />
                      ) : (
                        <input
                          onChange={confirmPassFunc}
                          type="password"
                          placeholder="Confirm password"
                          className={`sign-InUp ${
                            confirmpasserr && "placeholder:text-brand"
                          }`}
                        />
                      )}
                      {confirmpasserr && (
                        <p className="flex items-center gap-x-1 text-brand font-ubuntu text-[12px]  ">
                          <span>Password Confirmation is required</span>
                          <BiMessageSquareError />
                        </p>
                      )}
                      <button
                        type="button"
                        onClick={confirmPassword}
                        className="absolute top-0 right-[10px]  p-3 "
                      >
                        {ConfirmPass ? (
                          <GoEye className={`text-clrthird text-[23px]`} />
                        ) : (
                          <GoEyeClosed
                            className={`text-clrthird text-[23px]`}
                          />
                        )}
                      </button>
                    </div>
                    <h5 className="text-green-500 flex items-center gap-x-1 font-ubuntu ">
                      {created}{" "}
                    </h5>
                    <h4 className="font-aldrich text-clrthird mt-[-20px] text-[18px] ">
                      By clicking the{" "}
                      <span className="link hover:after:w-full ">Register</span>{" "}
                      button, you agree to the{" "}
                      <span className="link hover:after:w-full ">
                        Terms of Use
                      </span>{" "}
                      and{" "}
                      <span className="link hover:after:w-full ">
                        Privacy Policy
                      </span>{" "}
                    </h4>
                    <div className="flex justify-between ">
                      <span className="font-aldrich text-primarytxt md:text-bodybg text-[24px] font-semibold capitalize ">
                        register
                      </span>
                      <button
                        onClick={SignupSubmit}
                        type="submit"
                        className="w-[50px] h-[50px] grid place-items-center bg-brand text-[25px] rounded-full text-primarytxt "
                      >
                        <BiLogInCircle />
                      </button>
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
                    <Link
                      to="/"
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
