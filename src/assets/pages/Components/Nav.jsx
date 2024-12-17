import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../images/logo.png"
import profile from "../../images/profile.jpg"

// utility


const Nav = (props) => {

  return (
    <nav className='lg:py-4 py-1 lg:px-5 px-2 shadow-[rgba(33,35,38,0.1)_0px_10px_10px_-10px]'>
        <div className="flex justify-between">
            <div className="lg:w-1/2 w-[70%] flex gap-x-5 items-center  ">
            <button type='button' className='text-2xl text-brand ' onClick={props.show} ><FaBarsStaggered /></button>
            <img src={logo} alt="logo" className='w-[50px]'/>
            <form action="#" className='lg:w-3/5 w-[70%] bg-clrthird/10 rounded-[20px] '>
                <input type="search" placeholder='Search' className='w-full bg-transparent py-[5px] px-2 outline-none   '/>
            </form>
            </div>
            <div className="lg:w-[15%]  lg:bg-clrthird/10 rounded-[20px] flex items-center gap-x-3   ">
              <img src={profile} alt="profile" className='lg:w-[50px] w-[40px] h-[40px] rounded-full    '/>
              <span className='lg:inline-block hidden'>Md. Shakhawat Hossain</span>
            </div>
        </div>
    </nav>
  )
}

export default Nav