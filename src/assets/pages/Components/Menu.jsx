import React from "react";

// Icons
import { IoMdArrowBack } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsPatchPlus } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

// Images
import profile from '../../images/profile.jpg';

const Menu = ({ memu }) => {
  return (
    <div className={`absolute top-0  w-[25%] bg-[#f3f4f5] mt-1  ${memu ? "animate-showMenu right-0" : "animate-hideMenu right-[-30%]"}  `}>
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
        <div className="flex flex-col mt-5  menuBox ">
          <div className="flex justify-between items-center w-full pb-1">
            <img src={profile} alt="profile" className="w-[40px] h-[40px] rounded-full object-cover  " />
            <IoIosArrowDropdown className="text-3xl" />
          </div>
          <div className="border-t pt-1">
            <button type="button" className="flex gap-x-2 items-center menutxt   "   ><BsPatchPlus className="text-xl" /> <span>Create another profile</span> </button>
          </div>
        </div>
        <div className="menuBox flex">
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
        <div className="menuBox flex items-center gap-x-2 ">
          <FcLike />
          <span className="menutxt">Invite friends</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
