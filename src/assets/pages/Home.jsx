import React, { useState } from "react";

// Icons
import { BsPlusSquare } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { BsRepeat } from "react-icons/bs";

// components
import Navbtm from "./Components/Navbtm";
import Menu from "./Components/Menu";


// Images
import profile from '../images/profile.jpg'
const Home = () => {

    // Menu function
    let [menuShow , setMenuShow] = useState(false)
    let ShowMenu = ()=>{
        setMenuShow(true)
    }
  return (
    <>
    <nav className="px-5 py-3 shadow">
      <div className="flex justify-between items-center pb-2 border-b  ">
        <span className="font-aldrich text-3xl font-black capitalize text-brand   ">
          ochigram
        </span>
        <ul className="flex gap-x-3 ">
          <li className="topIcon">
            <BsPlusSquare />
          </li>
          <li className="topIcon">
            <BsSearch />
          </li>
          <li className="topIcon" onClick={ShowMenu}>
            <CiMenuFries />
          </li>
        </ul>
      </div>
      <div className="flex justify-between mt-2">
        <div className="w-[70%]">
          <Navbtm />
        </div>
        <ul className="flex gap-x-5 items-center cursor-pointer ">
            <li className="flex items-center gap-x-2 font-ubuntu capitalize font-medium text-lg text-clrthird   "><BsRepeat /> <span>view all accounts</span></li>
            <li className="topIcon overflow-hidden"><img src={profile} alt="profile"  className="w-full h-full object-cover "/></li>
        </ul>
      </div>
    </nav>
    <div className=" relative  ">gsgsdfs
        
        {menuShow && <Menu />}
    </div>
    </>
  );
};

export default Home;
