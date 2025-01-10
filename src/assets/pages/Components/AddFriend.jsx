import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref , set , onValue, push } from "firebase/database";

const AddFriend = () => {
  // Database reference
  const db = getDatabase();

  // Current user from Redux store
  const currentUser = useSelector((state) => state.userInfo.value);
  // console.log(currentUser);
  

  // State for storing user list
  let [userList, setUserList] = useState([]);
  let [updatedlist , setUpdatedlist] = useState([]);
  let [requestlist , setRequestlist] = useState([]);

  // added item

  useEffect(() => {
    const userListRef = ref(db, "users/");

    // Fetch users from database
    onValue(userListRef, (snapshot) => {
      const listedUsers = [];
      snapshot.forEach((item) => {
        // console.log(item);
        
        if (currentUser.user.uid !== item.key ) {
          listedUsers.push({user:item.val() , uid: item.key , status: false});
        }
      });
      setUserList(listedUsers);
    });
  }, []);



  // Add friends
  let add = (item)=>{
    
    set(push(ref(db, 'FriendRequests/')), {
      sender: currentUser.user,
      receiver: item
    })


    const FriendRef = ref(db, 'FriendRequests/');
    onValue(FriendRef, (snapshot) => {
      let requestArr = [];

      snapshot.forEach((item)=>{
        requestArr.push(item.val());
      })
      
      // requestArr.map((item)=>{
      //   console.log(item.receiver);
        
      // })
      userList.map((item)=>{
        
      })
      
      
    });
    
  }


  
  return (
    <div className="flex flex-col gap-y-2">
      {
      userList.map((item) => (
        <div key={item.uid} className="flex gap-x-4 items-center relative bg-clrthird/10 hover:bg-clrthird/20 p-2 rounded-md">
          <p className="absolute top-1 right-1 text-clrthird"> ago</p>
          <img src={item.user.photoURL} alt="profile" className="lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] rounded-full object-cover" />
          <div>
            <h5 className="font-aldrich">{item.user.displayName}</h5>
            <p className="font-ubuntu text-clrthird"> <span>mutual</span> </p>
            <div className="flex gap-x-3">
              {!item.status ?
              <>
              <button type="button" onClick={()=>add(item)}   className="font-ubuntu duration-[.4s] py-1 lg:px-5 px-2 text-[15px] lg:text-lg rounded-md bg-brand text-primarytxt capitalize font-medium">
                Add
              </button>
              <button type="button" className="font-ubuntu duration-[.4s] text-clrthird py-1 lg:px-5 px-2 text-[15px] lg:text-lg bg-clrthird/10 rounded-md capitalize font-medium">
                Remove
              </button>
              </>
              :
              <button type="button" className="font-ubuntu duration-[.4s] text-clrthird py-1 lg:px-5 px-2 text-[15px] lg:text-lg bg-clrthird/10 rounded-md capitalize font-medium">
                Cancel
              </button>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddFriend;
