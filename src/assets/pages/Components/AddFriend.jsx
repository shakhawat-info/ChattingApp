import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const AddFriend = () => {
  // Database reference
  const db = getDatabase();

  // Current user from Redux store
  const currentUser = useSelector((state) => state.userInfo.value);

  // State for storing user list
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const userListRef = ref(db, "users/");

    // Fetch users from database
    onValue(userListRef, (snapshot) => {
      const listedUsers = [];
      snapshot.forEach((item) => {
        if (currentUser.uid !== item.key) {
          listedUsers.push(item.val());
        }
      });
      setUserList(listedUsers);
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-2">
      {
      userList.map((item) => (
        <div className="flex gap-x-4 items-center relative bg-clrthird/10 hover:bg-clrthird/20 p-2 rounded-md">
          <p className="absolute top-1 right-1 text-clrthird"> ago</p>
          <img src={item.profile} alt="profile" className="lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] rounded-full object-cover" />
          <div>
            <h5 className="font-aldrich">{item.name}</h5>
            <p className="font-ubuntu text-clrthird"> <span>mutual</span> </p>
            <div className="flex gap-x-3">
              <button type="button"  className="font-ubuntu duration-[.4s] py-1 lg:px-5 px-2 text-[15px] lg:text-lg rounded-md bg-brand text-primarytxt capitalize font-medium">
                Add
              </button>
              <button type="button" className="font-ubuntu duration-[.4s] text-clrthird py-1 lg:px-5 px-2 text-[15px] lg:text-lg bg-clrthird/10 rounded-md capitalize font-medium">
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
