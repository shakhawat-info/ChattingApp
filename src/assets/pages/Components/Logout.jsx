import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalLogout } from '../../Redux/Features/Logout/LogoutSlice';
import { toggle } from '../../Redux/Features/MenuModal/MenuModalSlice';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { userinfo } from '../../Redux/Features/User/UserSlice';

const Logout = () => {
  
  const auth = getAuth();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  
  
  let logOutFinished = ()=>{
    localStorage.removeItem("userinfo");
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful');
      dispatch(modalLogout(false))
      dispatch(toggle(false))
      navigate('/')
      dispatch(userinfo(null))
      
    }).catch((error) => {
      // An error happened.
      console.log(error);
      
    });
  }

  


  return (
    <div className='h-full bg-clrthird/70 absolute top-0 left-0 w-full z-[9999] grid place-items-center '>
      <div className="px-3 bg-primarytxt rounded-md w-[90%] py-5     ">
        <h3 className='font-aldrich font-medium    '>Are you sure to Log Out?</h3>
        <div className="flex justify-between mt-4">
          <button type='button' className='p-2 w-[40%] bg-clrthird/30 rounded-md font-ubuntu font-medium  ' onClick={()=> dispatch(modalLogout(false))} >No</button>
          <button type='button' className='p-2 w-[40%] bg-brand rounded-md font-ubuntu font-medium text-primarytxt ' onClick={logOutFinished} >Yes</button>
        </div>
      </div>
    </div>
  )
}

export default Logout