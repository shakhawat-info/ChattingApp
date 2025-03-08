import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { current } from "@reduxjs/toolkit";

const AddFriend = () => {
  const db = getDatabase();
  const currentUser = useSelector((state) => state.userInfo.value);
  const [userList, setUserList] = useState([]);
  // console.log(currentUser.user.uid);
  

  useEffect(() => {
    const allUsersRef = ref(db, "users/");
    const requestsRef = ref(db, "Requests/");
    const FriendsRef = ref(db, "Friends/");
    const BlockRef = ref(db, "BlockList/");

    // Fetch users without current user
    let allUsers = [];
    let Blocked = [];
    onValue(allUsersRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key !== currentUser.user.uid) {
          allUsers.push(item);
        }
      });
    });
    
    
    // Remove user who is on blocklist
    onValue(BlockRef, (snapshot) => {
      snapshot.forEach((item)=>{
        // console.log(item.val().Blocker.BlockerID);
        if(item.val().Blocker.BlockerID === currentUser.user.uid){
          Blocked.push(item.val().Blocked.BlockedID)
        }else{
          Blocked.push(item.val().Blocker.BlockerID)
        }
      })
    });

    // remove who has got my request
    let RemoveSentAccount = [];
    let RemoveReqIN = [];
    onValue(requestsRef, (snapshot) => {
      snapshot.forEach((item)=> {
        if(item.val().sender.uid === currentUser.user.uid){
          RemoveSentAccount.push(item.val().receiver)
        }
        if(item.val().receiver.uid === currentUser.user.uid){
          RemoveReqIN.push(item.val().sender)
        }
      })
    });
    const sendRemoved = allUsers.filter((alU)=> !RemoveSentAccount.some((rsm)=> alU.key == rsm.uid))
    let removedInReq = sendRemoved.filter((srm)=> !RemoveReqIN.some((rri)=> srm.key == rri.uid))
    // console.log(RemoveReqIN);
    

    // Remove who is friend
    let receiverRemove = [];
    onValue(FriendsRef, (snapshot) => {
      snapshot.forEach((item)=>{
        if(item.val().receiver.friendWith === currentUser.user.uid ){
          receiverRemove.push(item.val().receiver)
        }
        if(item.val().sender.friendWith === currentUser.user.uid ){
          receiverRemove.push(item.val().sender)
        }
      })
    });
    
    const FriendRemoved = removedInReq.filter((rir)=> !receiverRemove.some((recRm)=> rir.key == recRm.uid));
    
    // remove Blocked users
    let UpdatedUsers = FriendRemoved.filter((friendRM)=> !Blocked.some((blc)=> friendRM.key == blc))

    // remove blocker




    // Update the user list
    setUserList(UpdatedUsers)
  }, [currentUser]);



  const add = (item) => {

    set(push(ref(db, "Requests/")), {
      sender: currentUser.user,
      receiver: {...item.val() , uid: item.key},
    });
    
    // remove the added user
    setUserList((prevList) => prevList.filter((userItem) => userItem.key !== item.key));
  };

  return (
    <div className="flex flex-col gap-y-2">
      {userList.map((item) => (
        <div
          key={item?.key}
          className="flex gap-x-4 items-center relative bg-clrthird/10 hover:bg-clrthird/20 p-2 rounded-md"
        >
          <p className="absolute top-1 right-1 text-clrthird"> ago</p>
          <img
            src={item.val().photoURL}
            alt="profile"
            className="lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] rounded-full object-cover"
          />
          <div>
            <h5 className="font-aldrich">{item.val().displayName}</h5>
            <p className="font-ubuntu text-clrthird">
              <span>mutual</span>
            </p>
            <div className="flex gap-x-3">
              <button
                type="button"
                onClick={() => add(item)}
                className="font-ubuntu duration-[.4s] py-1 lg:px-5 px-2 text-[15px] lg:text-lg rounded-md bg-brand text-primarytxt capitalize font-medium"
              >
                Add
              </button>
              <button
                type="button"
                className="font-ubuntu duration-[.4s] text-clrthird py-1 lg:px-5 px-2 text-[15px] lg:text-lg bg-clrthird/10 rounded-md capitalize font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddFriend;
