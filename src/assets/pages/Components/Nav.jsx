import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle ,menuFalse} from '../../Redux/Features/MenuModal/MenuModalSlice';

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
import { RiUserCommunityFill } from "react-icons/ri";
import { useNavigate } from 'react-router';





const Nav = () => {
  // Redux 
let dispatch = useDispatch();
let [activenav , setActivenav] = useState('home')


  
  let menuVisiblity = ()=>{
    dispatch(toggle())
  }


  // navigation
  let navigate = useNavigate()

  // navigate to home
  let viewHome = ()=>{
    navigate('/')
    dispatch(menuFalse())
    setActivenav('home')
  }

  // navigate to friends
  let friendsView = ()=>{
    navigate('/friends')
    dispatch(menuFalse())
    setActivenav('friends')
  }

  // navigate to message
  let viewMessage =() =>{
    navigate('/message')
    dispatch(menuFalse())
    setActivenav('message')
  }

  // navigate to notifucation
  let viewNotification = ()=>{
    navigate('/notification')
    dispatch(menuFalse())
    setActivenav('notification')
  }

  // navigate to videos
  let viewVideos = ()=>{
    navigate('/videos')
    dispatch(menuFalse())
    setActivenav('video')
  }

  // navigate to groups
  let viewGroups = ()=>{
    navigate('/groups')
    dispatch(menuFalse())
    setActivenav('groups')
  }

  return (
    <nav className="lg:px-5 px-2 lg:py-3 py-2 shadow mb-1 w-full bg-primarytxt">
      <div className="container">
      <div className="flex justify-between items-center  ">
        <span onClick={()=> navigate('/')} className="font-aldrich lg:text-3xl text-lg font-black capitalize text-brand cursor-pointer  ">
          ochigram
        </span>
        <ul className="flex gap-x-3 ">
          <li className="topIcon hoverEfct relative">
            <BsPlusSquare />
          </li>
          <li className="topIcon hoverEfct relative">
            <BsSearch />
          </li>
          <li className="topIcon hoverEfct relative" onClick={menuVisiblity} >
            <CgMenuRight />
          </li>
        </ul>
      </div>
      <div className="flex justify-between w-full lg:absolute lg:top-[15px] lg:left-[50%] lg:translate-x-[-47%] lg:w-1/4 ">
        <div className=" w-full mt-2 lg:mt-0">
          <div className="w-full">
             <ul className="flex justify-between">        
              <li className={`NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden  ${activenav == 'home' ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 text-clrthird' }`} onClick={viewHome}><GoHome /></li>
              <li className={`NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden  ${activenav == 'friends' ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 text-clrthird' }`} onClick={friendsView}><GoPeople /></li>
              <li className={`NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden  ${activenav == 'message' ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 text-clrthird' }`} onClick={viewMessage}><PiMessengerLogoThin /></li>
              <li className={`NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden  ${activenav == 'notification' ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 text-clrthird' }`} onClick={viewNotification}><VscBell /></li>
              <li className={`NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden  ${activenav == 'video' ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 text-clrthird' }`} onClick={viewVideos}><PiVideoLight /></li>
              <li className={`NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden  ${activenav == 'groups' ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 text-clrthird' }`} onClick={viewGroups}><RiUserCommunityFill /></li>
             </ul>
           </div>
        </div>
      </div>
      </div>
  </nav>
  )
}

export default Nav