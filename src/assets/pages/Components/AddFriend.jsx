import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const AddFriend = () => {
  const db = getDatabase();
  const currentUser = useSelector((state) => state.userInfo.value);
  const [userList, setUserList] = useState([]);
  // console.log(currentUser.user.uid);
  

  useEffect(() => {
    const allUsersRef = ref(db, "users/");
    const requestsRef = ref(db, "Requests/");
    const friendsRef = ref(db, "Friends/");

    // Fetch users without current user
    let allUsers = [];
    onValue(allUsersRef, (snapshot) => {
      snapshot.forEach((item)=>{
        if(item.key !== currentUser.user.uid) allUsers.push(item)
        })
    });

    // remove who has got my request
    let RemoveSentAccount = []
    onValue(requestsRef, (snapshot) => {
      snapshot.forEach((item)=> RemoveSentAccount.push(item))
    });
    const sentReceivedRemoved = allUsers.filter((alUser)=> !RemoveSentAccount.some((RSA)=>  (RSA.val().receiver.uid+RSA.val().sender.uid).includes(alUser.key)  ))


    
    
    

    
    // Update the user list
    setUserList(sentReceivedRemoved)
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
            src={item?.photoURL}
            alt="profile"
            className="lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] rounded-full object-cover"
          />
          <div>
            <h5 className="font-aldrich">{item?.displayName}</h5>
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
