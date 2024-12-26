import React, { useContext } from 'react';
import { Data } from '../../../Context/Context';



// Icons
import { BsPlusSquare } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { PiMessengerLogoThin } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";
import { PiVideoLight } from "react-icons/pi";
import { RiStore2Line } from "react-icons/ri";
import { useNavigate } from 'react-router';


const Nav = () => {
  // context state
  let info = useContext(Data)

  // navigation
  let navigate = useNavigate()

  return (
    <nav className="lg:px-5 px-2 lg:py-3 py-2 shadow relative z-[1]">
      <div className="container">
      <div className="flex justify-between items-center  ">
        <span className="font-aldrich lg:text-3xl text-lg font-black capitalize text-brand   ">
          ochigram
        </span>
        <ul className="flex gap-x-3 ">
          <li className="topIcon hoverEfct relative">
            <BsPlusSquare />
          </li>
          <li className="topIcon hoverEfct relative">
            <BsSearch />
          </li>
          <li className="topIcon hoverEfct relative" onClick={info.MenuVisiblity} >
            <CgMenuRight />
          </li>
        </ul>
      </div>
      <div className="flex justify-between w-full lg:absolute lg:top-[15px] lg:left-[50%] lg:translate-x-[-47%] lg:w-1/4 ">
        <div className=" w-full mt-2 lg:mt-0">
          <div className="w-full">
             <ul className="flex justify-between">        
              <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden ' onClick={()=>navigate('/home')}><GoHome /></li>
              <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden ' onClick={()=>navigate('/friends')}><GoPeople /></li>
              <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden ' onClick={()=>navigate('/message')}><PiMessengerLogoThin /></li>
              <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden '><VscBell /></li>
              <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden '><PiVideoLight /></li>
              <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden '><RiStore2Line /></li>
             </ul>
           </div>
        </div>
      </div>
      </div>
  </nav>
  )
}

export default Nav