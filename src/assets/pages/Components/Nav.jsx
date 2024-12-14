import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../images/logo.png"
import profile from "../../images/profile.jpg"
const Nav = () => {
  return (
    <nav className='py-4 px-5 shadow-[rgba(33,35,38,0.1)_0px_10px_10px_-10px]'>
        <div className="flex justify-between">
            <div className="w-1/2 flex gap-x-5 items-center  ">
            <button type='button' className='text-2xl text-brand   '><FaBarsStaggered /></button>
            <img src={logo} alt="logo" className='w-[50px]'/>
            <form action="#" className='w-3/5 bg-brand/10 rounded-[20px] '>
                <input type="search" placeholder='Search' className='w-full bg-transparent py-[5px] px-2 outline-none   '/>
            </form>
            </div>
            <div className="w-[15%] bg-brand/10 rounded-[20px] flex items-center gap-x-3   ">
              <img src={profile} alt="profile" className='w-[50px] rounded-full    '/>
              <span>Md. Shakhawat Hossain</span>
            </div>
        </div>
    </nav>
  )
}

export default Nav