import React, { useState } from "react";

// Icons
import { BsPlusSquare } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

// components
import Navbtm from "./Components/Navbtm";
import Menu from "./Components/Menu";

// Images
const Home = () => {
  // Menu function
  let [memu, setMenu] = useState(false);
  let MenuVisiblity = () => {
    setMenu((prevState) => !prevState);
  };
  return (
    <>
      <nav className="px-5 py-3 shadow relative">
        <div className="flex justify-between items-center  ">
          <span className="font-aldrich text-3xl font-black capitalize text-brand   ">
            ochigram
          </span>
          <ul className="flex gap-x-3 ">
            <li className="topIcon hoverEfct relative">
              <BsPlusSquare />
            </li>
            <li className="topIcon hoverEfct relative">
              <BsSearch />
            </li>
            <li className="topIcon hoverEfct relative" onClick={MenuVisiblity}>
            <CgMenuRight />
            </li>
          </ul>
        </div>
        <div className="flex justify-between w-full lg:absolute lg:top-[15px] lg:left-[50%] lg:translate-x-[-25%] lg:w-1/2 ">
          <div className="w-[50%]">
            <Navbtm />
          </div>
        </div>
      </nav>
      <div className=" relative overflow-x-hidden h-screen ">
        gsgsdfs
        <Menu memu={memu}/>
      </div>
    </>
  );
};

export default Home;
