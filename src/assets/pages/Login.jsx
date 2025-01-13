import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider , FacebookAuthProvider} from "firebase/auth";
import { getDatabase, ref, set , push } from "firebase/database";

import { Link , Navigate, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userinfo } from "../Redux/Features/User/UserSlice";


// icons
import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { BiLogInCircle } from "react-icons/bi";
import { BiMessageSquareError } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { GoAlert } from "react-icons/go";
import { TbAlertHexagon } from "react-icons/tb";

// sign in/up with icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

// images
import loginsignupIMG2 from "../images/cting.jpg";



const Login = () => {
  // Database
  const db = getDatabase();
  const auth = getAuth();
  // console.log(auth);
  
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  let [err , setErr] = useState(null)

  // Navigation
  let navigate = useNavigate()


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
  };

  // Login function
  let Login = () => {
    if (!email) {
      setMailerr(true);
    }
    if(!password){
      setPasserror(true)
    }
    if(email && password){
      signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         
         console.log(user);

         localStorage.setItem("userinfo" , JSON.stringify(user));
         
         dispatch(userinfo({user}));
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
        //  console.log(errorCode);
        setErr(errorCode)
       });
    }
  };

  // Google Login
  let GoogleLogin = ()=>{
    
  signInWithPopup(auth, provider)
  .then((result) => {
  console.log(result.user)
// DataBase Setting
   set(ref(db, 'users/' + result.user.uid) , {
     displayName: result.user.displayName,
     email: result.user.email,
     creationTime: result.user.metadata.creationTime,
     userName: result.user.metadata.createdAt,
     photoURL: result.user.photoURL,
   });
  //  localstorage setting
   localStorage.setItem("userinfo" , JSON.stringify({user: result.user , creationTime: result.user.metadata.creationTime , userName: result.user.metadata.createdAt}));

  //  redux userdata setting
  dispatch(userinfo({user: result.user , creationTime: result.user.metadata.creationTime , userName: result.user.metadata.createdAt}))

    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode);
    setErr(errorCode)
  });
    
  }
  
  
  // Facebook Login
  const FBprovider = new FacebookAuthProvider();

  let FacebookLogin = ()=>{
    signInWithPopup(auth, FBprovider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);
    
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    console.log(error);
    
    // ...
  });
  }
  return (
    <>
      <section className="overflow-x-hidden absolute top-0 right-0 w-full animate-showLogin  bg-[rgba(29,29,29,0.99)] md:bg-transparent">
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
              <h1 className="font-aldrich text-PrimaryDark font-black text-center md:text-xl text-3xl md:mt-5 mt-[50px]  ">
                Welcome to the <span className="text-brand">'Ochigram'</span> (professional community).
              </h1>
              <p className="font-ubuntu text-SeconderyDark  text-md md:text-sm text-center font-semibold mt-2  ">
                Enjoy your life with your family and friends. Thank you for
                choosing us
              </p>
            </div>
            <div className="md:w-3/5 w-full  h-screen overflow-y-scroll md:shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
              <div className="h-full flex flex-col justify-around animate-showLogin ">
                <div className="p-5">
                  <h2 className="font-aldrich capitalize font-bold text-[36px] lg:text-PrimaryDark text-primarytxt    ">
                    welcome back!
                  </h2>
                  <form
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
                      <span className="font-aldrich text-primarytxt lg:text-PrimaryDark text-[24px] font-semibold capitalize ">
                        sign in
                      </span>
                      <button
                        onClick={Login}
                        type="submit"
                        className="w-[50px] h-[50px] grid place-items-center bg-brand text-[25px] rounded-full text-primarytxt "
                      >
                        <BiLogInCircle />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="">
                  <h5 className="font-aldrich text-clrthird  text-xl text-center   ">
                    sign in with
                  </h5>
                  <ul className="flex justify-center gap-x-10 mt-10  ">
                    <li className="signInwith" onClick={GoogleLogin}>
                      <FcGoogle />
                    </li>
                    <li className="signInwith text-[#1564ef]" onClick={FacebookLogin}>
                      <FaFacebookF />
                    </li>
                    <li className="signInwith text-[#fff] ">
                      <FiGithub />
                    </li>
                    <li className="signInwith text-brand ">
                      <IoCallOutline />
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
