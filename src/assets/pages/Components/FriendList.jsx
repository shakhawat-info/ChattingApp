import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue , push , remove} from "firebase/database";
import { useSelector } from "react-redux";


// icons
import { BsArrowLeft } from "react-icons/bs";
import { PiScanThin } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { RiUserForbidLine } from "react-icons/ri";
import { RiUserMinusLine } from "react-icons/ri";

// components
import ViewSent from '../Components/ViewSent';
import AddFriend from '../Components/AddFriend';
import FriendRequest from '../Components/FriendRequest'


const FriendList = () => {
  // database
  const db = getDatabase();
  
  // current user
  let currentUser = useSelector((state)=>state.userInfo.value);
  let [friends , setFriends] = useState([])
  
  
  
  useEffect(() => {

    // Fatch friends from dataBase
    let FriendsList = [];
    const friendRef = ref(db, 'Friends');
    onValue(friendRef, (snapshot) => {
      snapshot.forEach((item)=>{
        if(item.val().receiver.uid === currentUser.user.uid){
          FriendsList.push({...item.val().sender , unfriendID: item.key})
        }else{
          FriendsList.push({...item.val().receiver , unfriendID: item.key})
        }
      })
    });
    
    
    
    // update friends
    setFriends(FriendsList)
  },[]);


  // View Users/Friends
  let [viewstatus , setViewstatus] = useState('friend')
  let friendslist = ()=>{
    setViewstatus('friend');
  }
  
  let followers = ()=>{
    setViewstatus('follower');
  }
  
  let following = ()=>{
    setViewstatus('following');
  }
  
  let add = ()=>{
    setViewstatus('add');

  }

  // Unfriend Function
  let Unfriend = (item)=>{
    // remove from friends
    remove(ref(db, 'Friends/' + item.unfriendID));

    // update friendList
    setFriends((prevList) => prevList.filter((prevItem) => prevItem.uid !== item.uid));
    
  }
  return (
    <div className="p-5 shadow">
      {/* Search Bar */}
      <div className="flex justify-between   ">
        <div className="flex items-center gap-2 w-[25%] text-clrthird font-bold  "><BsArrowLeft/> <span className="font-aldrich tracking-[2px]   ">Friends</span></div>
        <div className="w-[50%] relative    ">
          <PiScanThin className="absolute top-[8px] left-[8px] cursor-pointer"/>
          <input type="search" name="seacrh" id="search" className="w-full bg-clrthird/10 rounded-[30px] outline-none px-8 py-1 font-ubuntu text-clrthird  "/>
          <BsSearch className="absolute top-[8px] right-[8px] cursor-pointer"/>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center py-3 border-t font-ubuntu font-medium     ">
        <button type="button" onClick={friendslist} className={`p-1 ${viewstatus === 'friend' ? 'text-brand border-brand ' : 'text-clrthird border-transparent'} border-b-[2px]`}>Friends</button>
        <button type="button" onClick={followers} className={`p-1 ${viewstatus === 'follower' ? 'text-brand border-brand ' : 'text-clrthird border-transparent'} border-b-[2px]`}>Followers</button>
        <button type="button" onClick={following} className={`p-1 ${viewstatus === 'following' ? 'text-brand border-brand ' : 'text-clrthird border-transparent'} border-b-[2px]`}>Following</button>
        <button type="button" onClick={add} className={`p-1 ${viewstatus === 'add' ? 'text-brand border-brand ' : 'text-clrthird border-transparent'} border-b-[2px]`}>Add</button>
      </div>

      {/* View Users/Friends */}
      <div className="w-full">
        
        {/* friend list */}
        {viewstatus === 'friend' &&
        <div className="w-full">
          {friends.map((item)=>{
            return(
              <div key={item.uid} className="flex mt-2 justify-between items-center bg-clrthird/5 p-2 rounded-md hover:bg-clrthird/10">
                <div className="flex gap-5 w-[80%]">
                  <img src={item.photoURL} alt="friendPIC" className="w-[55px] h-[55px] rounded-full  "/>
                  <div className="">
                    <h3 className="font-aldrich font-medium text-lg ">{item.displayName}</h3>
                    <h5 className="font-ubuntu text-clrthird/60 text-[14px]   ">Mutual</h5>
                  </div>
                </div>
                <div className="flex gap-10 ">
                  <button type="button" className="text-lg flex items-center gap-2 cursor-pointer bg-clrthird/10 py-1 px-2 rounded-md hover:text-primarytxt hover:bg-brand duration-[.4s]   "><RiUserForbidLine/><span>block</span></button>
                  <button type="button" onClick={()=>Unfriend(item)} className="text-lg flex items-center gap-2 cursor-pointer bg-clrthird/10 py-1 px-2 rounded-md hover:text-primarytxt hover:bg-brand duration-[.4s]   "><RiUserMinusLine/><span>Unfriend</span></button>
                </div>
              </div>
            )
          })}
        </div>
        }

        {/* Followers List */}
        {viewstatus === 'follower' && <FriendRequest/>}

        {/* Following List */}
        {viewstatus === 'following' && <ViewSent/>}

        {/* Add from User */}
        {viewstatus === 'add' && <AddFriend/>}
        
      </div>
  </div>
  );
};

export default FriendList;
