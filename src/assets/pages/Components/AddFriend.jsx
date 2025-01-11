import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const AddFriend = () => {
  const db = getDatabase();
  const currentUser = useSelector((state) => state.userInfo.value);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const userListRef = ref(db, "users/");
    const FriendRef = ref(db, "FriendRequests/");

    // Fetch users
    onValue(userListRef, (snapshot) => {
      const listedUsers = [];
      snapshot.forEach((item) => {
        if (currentUser.user.uid !== item.key) {
          listedUsers.push({ user: item.val(), uid: item.key });
        }
      });

      // Fetch friend requests
      onValue(FriendRef, (snapshot) => {
        const requestArr = [];
        snapshot.forEach((item) => {
          requestArr.push(item.val());
        });

        // Filter users who haven't been sent friend requests
        const filteredUsers = listedUsers.filter(
          (userItem) =>
            !requestArr.some(
              (requestItem) => requestItem.receiver.uid === userItem.uid
            )
        );
        // Update the user list
        setUserList(filteredUsers); 
      });
    });
  }, [currentUser]);

  const add = (item) => {
    set(push(ref(db, "FriendRequests/")), {
      sender: currentUser.user,
      receiver: item,
    });

    // Filter the user list to remove the added user
    setUserList((prevList) =>
      prevList.filter((userItem) => userItem.uid !== item.uid)
    );
  };

  return (
    <div className="flex flex-col gap-y-2">
      {userList.map((item) => (
        <div
          key={item.uid}
          className="flex gap-x-4 items-center relative bg-clrthird/10 hover:bg-clrthird/20 p-2 rounded-md"
        >
          <p className="absolute top-1 right-1 text-clrthird"> ago</p>
          <img
            src={item.user.photoURL}
            alt="profile"
            className="lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] rounded-full object-cover"
          />
          <div>
            <h5 className="font-aldrich">{item.user.displayName}</h5>
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
