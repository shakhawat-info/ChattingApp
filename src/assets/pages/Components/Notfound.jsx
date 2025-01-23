import React from 'react'
import { Link } from "react-router";


// video
import galexy from '../../videos/galexy.mp4'
import error404 from '../../images/error404.png'
import { useSelector } from 'react-redux';

const Notfound = () => {
  // user Information
  let userinfo = useSelector((state)=>state.userInfo.value)
  console.log(userinfo);
  
  return (
    <div className='h-screen w-full grid place-items-center relative  '>
      <img src={error404} alt="error" className='absolute top-[12%] lg:top-0 left-[50%] z-10 translate-x-[-50%] w-[90%] lg:w-fit    '/>
        <video src={galexy}  autoPlay loop muted playsInline  className=' fixed top-0 left-0 w-full h-screen object-cover  '></video>
        <div className="absolute top-0 left-0 z-[1] w-full h-screen flex flex-col lg:justify-center items-center mt-[80px] ">
          <h2 className='font-aldrich font-bold text-2xl text-primarytxt  '>Hi , <span className='text-brand'>{userinfo?.user.displayName}</span></h2>
          <h3 className='font-aldrich text-primarytxt font-medium text-[18px] text-center  '>Your location is out of our planet and you are alone here. Please , come back to <Link to={-1} className='text-brand'>our planet</Link>.</h3>
          <Link to={-1} className='px-10 py-2 bg-brand text-primarytxt font-semibold rounded-md lg:mt-2 mt-[400px] '>Go Back</Link>
        </div>
    </div>
  )
}

export default Notfound