import React from "react";

// Icons
import { IoMdArrowBack } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsPatchPlus } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { BiSolidVideos } from "react-icons/bi";
import { PiMessengerLogoThin } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { RiStore2Line } from "react-icons/ri";
import { ImFlag } from "react-icons/im";
import { CiBookmarkCheck } from "react-icons/ci";
import { RiMemoriesFill } from "react-icons/ri";
import { BsCalendar4Event } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { FaEarthEurope } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

// Images
import profile from '../../images/profile.jpg';

const Menu = ({ memu }) => {
  return (
    <div className={`absolute lg:top-0 top-[-12%] z-[2]  lg:w-[25%] w-full bg-[#f3f4f5] mt-1  ${memu ? "lg:animate-showMenu animate-showMenuSM right-0" : "lg:animate-hideMenu animate-hideMenuSM lg:right-[-30%] right-[-110%] "}  `}>
      <div className="flex flex-col gap-y-2 p-2">
        <div className="flex justify-between ">
          <h3 className="flex items-center gap-x-2 border-l font-aldrich font-semibold text-lg cursor-pointer  ">
            <IoMdArrowBack />
            <span>Menu</span>
          </h3>
          <button type="button" className="text-xl  ">
            <BsSearch />
          </button>
        </div>
        <div className="flex flex-col mt-3  menuBox items-start ">
          <div className="flex justify-between items-center w-full pb-1">
            <img src={profile} alt="profile" className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer " />
            <IoIosArrowDropdown className="text-3xl cursor-pointer" />
          </div>
          <div className="border-t pt-1">
            <button type="button" className="flex gap-x-2 items-center menutxt   "   ><BsPatchPlus className="text-xl" /> <span>Create another profile</span> </button>
          </div>
        </div>
        <div className="menuBox ">
          <div className="flex justify-between w-full ">
            <div className="flex items-center gap-x-2  ">
              <div className="flex">
                <img src={profile} alt="profile" className="w-[20px] h-[20px] rounded-full   "/>
                <img src={profile} alt="profile" className="w-[20px] h-[20px] rounded-full   "/>
              </div>
              <span className="menutxt">Switch account</span>
            </div>
            <IoIosArrowDropdown className="text-3xl text-clrthird" />
          </div>
        </div>
        <div className="menuBox items-center gap-x-2 ">
          <FcLike />
          <span className="menutxt">Invite friends</span>
        </div>
        <div className="grid grid-cols-gridMenu gap-2">
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< BiSolidVideos className="text-xl text-[#e37568] " /><span>reels</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< PiMessengerLogoThin className="text-xl text-[#4967f4] " /><span>messenger</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< MdGroups className="text-xl text-[#45a7ee] " /><span>groups</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< PiVideoLight className="text-xl text-[#72BAA9]" /><span>video</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< IoVideocamOutline className="text-xl text-brand " /><span>live</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< RiStore2Line className="text-xl text-[#1eaa2e]" /><span>marketplace</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< ImFlag className="text-xl text-[#a96216] " /><span>pages</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< CiBookmarkCheck className="text-xl text-[#3E5879] " /><span>saved</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< RiMemoriesFill className="text-xl text-brand " /><span>memories</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< BsCalendar4Event className="text-xl text-brand/60 " /><span>events</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< GoVerified className="text-xl text-[#436850] " /><span>varified</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< FaEarthEurope className="text-xl text-[#1ab14f] " /><span>public</span></div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">< CiInstagram className="text-xl text-brand " /><span>instagram lite</span></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
