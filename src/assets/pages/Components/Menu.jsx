import React from 'react'


// icons
import { GoHome } from "react-icons/go";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineSave } from "react-icons/ai";
import { CiGift } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { TfiClose } from "react-icons/tfi";
import { PiMessengerLogoThin } from "react-icons/pi";



const Menu = (props) => {

  return (
    <div className='py-5 px-2 bg-primarytxt h-screen  lg:w-full w-1/2 overflow-y-scroll animate-showMenu absolute top-0 left-0 shadow-[rgba(0,0,0,0.1)_2.4px_0px_0px] '>
      <button type='button' onClick={props.hide} className='absolute top-0 right-0 py-2 px-5  text-primarytxt rounded-bl-[10px]   '><TfiClose className='menuListIcon' /></button>
        <ul className='menuListBox border-b-[1px] border-b-solid border-b-bodybg/10 pb-3 mt-4   '>
            <li className='menulist'><GoHome className='menuListIcon'/><span>news feed</span></li>
            <li className='menulist'><RiUserLine className='menuListIcon' /><span>profile</span></li>
        </ul>
        <ul className='menuListBox mt-5 gap-y-5'>
            <li className="menulist"><PiMessengerLogoThin className='menuListIcon'/><span>Message</span></li>
            <li className="menulist" onClick={props.frndRequest}><AiOutlineUsergroupAdd className='menuListIcon' /><span>friend requests</span></li>
            <li className="menulist"><IoVideocamOutline className='menuListIcon'/><span>video</span></li>
            <li className="menulist"><GrGroup className='menuListIcon'/><span>groups</span></li>
            <li className='menulist'><AiOutlineSave className='menuListIcon' /><span>saved post</span></li>
            <li className="menulist"><CiGift className='menuListIcon' /><span>birthdays</span></li>
            <li className="menulist"><MdOutlineProductionQuantityLimits className='menuListIcon' /><span>marketplace</span></li>
            <li className="menulist"><BsCalendar4Week className='menuListIcon'/><span>events</span></li>
            <li className="menulist"><span></span></li>
            <li className="menulist"><span></span></li>
        </ul>
    </div>
  )
}

export default Menu