import React, { useState } from "react";
import { useNavigate } from "react-router";

// components
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import FriendRequest from "./Components/FriendRequest";

// Icons
// import { BsSearch } from "react-icons/bs";
import { RiUserReceivedLine } from "react-icons/ri";
import { RiUserAddLine } from "react-icons/ri";
import { RiUserShared2Line } from "react-icons/ri";

// image
import profile from '../images/profile.jpg'

const Friends = () => {
    // variables
    let navigate = useNavigate();


    // Menu function
    let [memu, setMenu] = useState(false);
    let MenuVisiblity = () => {
      setMenu((prevState) => !prevState);
    };

    // Request function
    let [request , setRequest] = useState(true);
    let requestFn = ()=>{
      setRequest(true);
      setAdd(false);
    }

    // add function
    let [add , setAdd] = useState(false);
    let addFn = ()=>{
      setRequest(false);
      setAdd(true);
    }




  return (
    <>
    <Nav menu={MenuVisiblity} home={()=> navigate('/home')} />
    <Menu memu={memu}/>
    {/* Friends Start */}
    <section>
      <div className="container">
        <div className="mx-[20%] p-2">
          <h2 className="font-aldrich font-semibold text-2xl   ">Friends</h2>
          <div className="flex justify-between my-2">
            <button type="button" onClick={requestFn} className={`frndBtn ${request ? 'bg-brand text-primarytxt ' : 'bg-clrthird/10'} `}><RiUserReceivedLine/><span>Requests</span></button>
            <button type="button" onClick={addFn} className={`frndBtn ${add ? 'bg-brand text-primarytxt ' : 'bg-clrthird/10'} `}><RiUserAddLine/><span>Add</span></button>
            <button type="button" className="frndBtn"><RiUserShared2Line/><span>View sent</span></button>
          </div>
          <div className="py-2">
            <h4 className="font-aldrich font-semibold  ">Import contacts</h4>
            <div className="flex justify-between items-center">
              <p className="font-ubuntu text-clrthird max-w-[70%] ">Let Ochigram automatically uploads new and updated contacts as you add them to your phone</p>
              <button type="button" className="py-2 px-5 bg-clrthird/10 hover:text-primarytxt font-medium hover:bg-brand duration-[.4s] rounded-md  ">Get started</button>
            </div>
          </div>
          <h3 className="font-aldrich text-lg  ">People you may know</h3>
          <div className="p-2">
            {request &&
            <div className="flex flex-col gap-y-2">
              <FriendRequest profile={profile} name='Md. Shakhawat' mutual='12' time='2d'   />
              <FriendRequest profile={profile} name='Md. Shakhawat' mutual='12' time='2d'   />
              <FriendRequest profile={profile} name='Md. Shakhawat' mutual='12' time='2d'   />
              <FriendRequest profile={profile} name='Md. Shakhawat' mutual='12' time='2d'   />
            </div>
            }
          </div>
        </div>
      </div>
    </section>
    {/* Friends Start */}
    </>
  );
};

export default Friends;
