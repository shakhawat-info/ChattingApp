import React, { useState } from "react";
import { useNavigate } from "react-router";

// components
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import FriendRequest from "./Components/FriendRequest";
import AddFriend from "./Components/AddFriend";
import ViewSent from "./Components/ViewSent";

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
      setViewsent(false);
    }

    // add function
    let [add , setAdd] = useState(false);
    let addFn = ()=>{
      setRequest(false);
      setAdd(true);
      setViewsent(false);
    }


    // view sent function
    let [viewsent , setViewsent] = useState(false);
    let viwsentFn = ()=>{
      setRequest(false);
      setAdd(false);
      setViewsent(true);
    }


  return (
    <>
    <Nav menu={MenuVisiblity} friends={()=> navigate('/friends')} home={()=> navigate('/home')} message={()=> navigate('/message')} />
    <Menu memu={memu} menuClose={() => setMenu(false)}/>
    {/* Friends Start */}
    <section>
      <div className="container">
        <div className="lg:mx-[20%] mx-0 p-2">
          <h2 className="font-aldrich font-semibold lg:text-2xl text-lg   ">Friends</h2>
          <div className="flex justify-between my-2">
            <button type="button" onClick={requestFn} className={`frndBtn ${request ? 'bg-brand text-primarytxt ' : 'bg-clrthird/10'} `}><RiUserReceivedLine/><span>Requests</span></button>
            <button type="button" onClick={addFn} className={`frndBtn ${add ? 'bg-brand text-primarytxt ' : 'bg-clrthird/10'} `}><RiUserAddLine/><span>Add</span></button>
            <button type="button" onClick={viwsentFn} className={`frndBtn ${viewsent ? 'bg-brand text-primarytxt ' : 'bg-clrthird/10'} `}><RiUserShared2Line/><span>View sent</span></button>
          </div>
          <div className="py-2">
            <h4 className="font-aldrich font-semibold  ">Import contacts</h4>
            <div className="flex justify-between items-center">
              <p className="font-ubuntu text-clrthird max-w-[65%] ">Let Ochigram automatically uploads new and updated contacts as you add them to your phone</p>
              <button type="button" className="lg:py-2 py-1 lg:px-5 px-3 bg-clrthird/10 hover:text-primarytxt font-medium hover:bg-brand duration-[.4s] rounded-md  ">Get started</button>
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
            {add &&
              <div className="flex flex-col gap-y-2">
                <AddFriend profile={profile} name='Md. Shakhawat' mutual='12' time='2d'/>
                <AddFriend profile={profile} name='Md. Shakhawat' mutual='12' time='2d'/>
                <AddFriend profile={profile} name='Md. Shakhawat' mutual='12' time='2d'/>
                <AddFriend profile={profile} name='Md. Shakhawat' mutual='12' time='2d'/>
              </div> 
            }
            {viewsent && 
              <div className="flex flex-col gap-y-2">
                <ViewSent profile={profile} name='Md. Shakhawat' mutual='12' time='2d'/>
                 <ViewSent profile={profile} name='Md. Shakhawat' mutual='12' time='2d'/>
                <ViewSent profile={profile} name='Md. Shakhawat' mutual='12' time='2d'/>
                <ViewSent profile={profile} name='Md. Shakhawat' mutual='12' time='2d'/>
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
