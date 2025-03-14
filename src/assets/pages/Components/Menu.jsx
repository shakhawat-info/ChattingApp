import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../Redux/Features/MenuModal/MenuModalSlice";
import { theme } from "../../Redux/Features/Theme/ThemeSlice";
import { modalLogout } from "../../Redux/Features/Logout/LogoutSlice";
import { Link } from "react-router";

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
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { AiOutlineSun } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { CiWifiOn } from "react-icons/ci";
import { GiLargePaintBrush } from "react-icons/gi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { CiInboxIn } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { AiOutlineSafety } from "react-icons/ai";
import { IoIosMoon } from "react-icons/io";

// components
import Logout from "../Components/Logout";

const Menu = () => {
  // Redux menu toggle
  let istoggle = useSelector((state) => state.menuToggle.value);
  let dispatch = useDispatch();
  let hideMenu = () => {
    dispatch(toggle(false));
  };
  // console.log(istoggle);

  // Redux theme toggle
  let istheme = useSelector((state) => state.themeToggle.value);
  // console.log(istheme);

  // setting function
  let [settingappear, setSettingappear] = useState(false);

  let appearSetting = (e) => {
    setSettingappear((prevState) => !prevState);
  };

  // support function
  let [support, setSupport] = useState(false);

  let supportarear = () => {
    setSupport((prevState) => !prevState);
  };

  // navigate
  let navigation = useNavigate();

  // logout
  let isLogout = useSelector((state) => state.modalLogout.value);
  // console.log(isLogout);

  let userinfo = useSelector((state) => state.userInfo.value);
  // console.log(userinfo);

  // profile navigate
  let profileView = () => {
    navigation("/profile");
    dispatch(toggle(false));
  };
  return (
    <div
      className={` overflow-y-scroll h-screen fixed top-[52px]  lg:top-[62px] z-[2]  lg:w-[25%] w-full  mt-1 ${
        istheme ? " bg-PrimaryDark" : "bg-[#f3f4f5]"
      }   ${
        istoggle ? " right-0  " : " lg:right-[-30%] right-[-110%] "
      } duration-[.6s]    `}
    >
      {isLogout && <Logout></Logout>}
      <div className="flex flex-col gap-y-2 p-2">
        <div className="flex justify-between ">
          <h3
            className="flex items-center gap-x-2 border-l font-aldrich font-semibold text-lg cursor-pointer  "
            onClick={hideMenu}
          >
            <IoMdArrowBack />
            <span>Menu</span>
          </h3>
          <button type="button" className="text-xl  ">
            <BsSearch />
          </button>
        </div>

        {/* profile */}
        <div className="flex flex-col mt-3  menuBox items-start ">
          <div className="flex justify-between items-center w-full pb-1">
            <div className="w-3/4" onClick={profileView}>
              <img
                src={userinfo.user.photoURL}
                alt="profile"
                className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer "
              />
            </div>
            <IoIosArrowDropdown className="text-3xl cursor-pointer" />
          </div>
          <div className="border-t pt-1 w-full mt-1">
            <button
              type="button"
              className="flex gap-x-2 items-center menutxt   "
            >
              <BsPatchPlus className="text-xl" />{" "}
              <span>Create another profile</span>{" "}
            </button>
          </div>
        </div>

        {/* switch account */}
        <div className="menuBox ">
          <div className="flex justify-between w-full ">
            <span className="menutxt">Switch account</span>
            <IoIosArrowDropdown className="text-3xl text-clrthird" />
          </div>
        </div>

        <div className="menuBox items-center gap-x-2 ">
          <FcLike />
          <span className="menutxt">Invite friends</span>
        </div>
        <div className="grid grid-cols-gridMenu gap-2">
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <BiSolidVideos className="text-xl text-[#e37568] " />
            <span>reels</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <PiMessengerLogoThin className="text-xl text-[#4967f4] " />
            <span>messenger</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <MdGroups className="text-xl text-[#45a7ee] " />
            <span>groups</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <PiVideoLight className="text-xl text-[#72BAA9]" />
            <span>video</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <IoVideocamOutline className="text-xl text-brand " />
            <span>live</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <RiStore2Line className="text-xl text-[#1eaa2e]" />
            <span>marketplace</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <ImFlag className="text-xl text-[#a96216] " />
            <span>pages</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <CiBookmarkCheck className="text-xl text-[#3E5879] " />
            <span>saved</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <RiMemoriesFill className="text-xl text-brand " />
            <span>memories</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <BsCalendar4Event className="text-xl text-brand/60 " />
            <span>events</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <GoVerified className="text-xl text-[#436850] " />
            <span>varified</span>
          </div>
          <div className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird ">
            <FaEarthEurope className="text-xl text-[#1ab14f] " />
            <span>public</span>
          </div>
          <Link
            to="/blockList"
            className="menuBox gap-x-2 capitalize font-ubuntu text-clrthird "
          >
            <MdOutlineDoNotDisturbOn className="text-xl text-brand " />
            <span>Block List</span>
          </Link>
        </div>
        <div
          className={`border-t py-2 ${
            !settingappear ? "h-[30px] overflow-hidden " : "h-auto"
          }`}
        >
          <div
            className="flex justify-between items-center w-full"
            onClick={appearSetting}
          >
            <h3 className="flex items-center gap-x-2 font-ubuntu text-clrthird ">
              <IoSettingsOutline className="text-xl" />
              <span>Settings & privacy</span>
            </h3>
            {!settingappear ? (
              <TiArrowSortedDown className="text-xl" />
            ) : (
              <TiArrowSortedUp className="text-xl" />
            )}
          </div>
          <div className="flex flex-col mt-1 gap-y-2">
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <RiUserSettingsLine className="text-xl " />
              <span>Setting</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <FaRegCreditCard className="text-xl " />
              <span>Orders & payments</span>
            </div>
            <div
              className="menuBox gap-x-2 text-clrthird font-ubuntu"
              onClick={() => dispatch(theme())}
            >
              {istheme ? (
                <div className="flex items-center gap-x-2">
                  <IoIosMoon className="text-xl " />
                  <span>Dark mode</span>
                </div>
              ) : (
                <div className="flex items-center gap-x-2">
                  <AiOutlineSun className="text-xl  " />
                  <span>Light mode</span>
                </div>
              )}
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <GiLargePaintBrush className="text-xl " />
              <span>Clear space</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <CiWifiOn className="text-xl " />
              <span>Data saver</span>
            </div>
          </div>
        </div>
        <div
          className={`border-t py-2 ${
            !support ? "h-[30px] overflow-hidden " : "h-auto"
          }`}
        >
          <div
            className="flex justify-between items-center w-full"
            onClick={supportarear}
          >
            <h3 className="flex items-center gap-x-2 font-ubuntu text-clrthird ">
              <GoQuestion className="text-xl" />
              <span>Help & support</span>
            </h3>
            {!support ? (
              <TiArrowSortedDown className="text-xl" />
            ) : (
              <TiArrowSortedUp className="text-xl" />
            )}
          </div>
          <div className="flex flex-col mt-1 gap-y-2">
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <LiaHandsHelpingSolid className="text-xl " />
              <span>Help</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <CiInboxIn className="text-xl " />
              <span>Support inbox</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <FcAbout className="text-xl " />
              <span>About</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <GoReport className="text-xl " />
              <span>Report & problem</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <AiOutlineSafety className="text-xl " />
              <span>Safety</span>
            </div>
          </div>
        </div>
        <div
          className={`border-t py-2 `}
          onClick={() => dispatch(modalLogout())}
        >
          <div className="cursor-pointer w-full">
            <h3 className="flex items-center gap-x-2 font-ubuntu text-clrthird ">
              <AiOutlineLogout className="text-xl" />
              <span>Log out</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
