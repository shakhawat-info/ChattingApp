import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, set , onValue , push , remove } from "firebase/database";


const FriendRequest = () => {
  // Database
  const db = getDatabase();
  let [requests , setRequests] = useState([]);
  let currentUser = useSelector((state)=>state.userInfo.value);
  // console.log(currentUser);
  

  useEffect(()=>{
    // Fetch requests
    const requestsRef = ref(db, 'Requests/');
    const requestArr = [];
    onValue(requestsRef, (snapshot) => {
      snapshot.forEach((item)=>{
        if(item.val().receiver.uid === currentUser.user.uid) requestArr.push(item)
      })
    });
    
    
    setRequests(requestArr)
    
  },[currentUser])


  // confirm requests
  let comfirm = (item)=>{

    // add to friend
    set(push(ref(db, 'Friends/')), {
      PlusID: item.val().receiver.uid + item.val().sender.uid,
      receiver: {...item.val().receiver  , friendWith: item.val().sender.uid},
      sender: {...item.val().sender , friendWith: item.val().receiver.uid}
    });

    // remove from request list
    remove(ref(db, 'Requests/' + item.key))
    
    
    // remove from user list
    // setRequests((prevList) => prevList.filter((prevItem) => prevItem.val().sender.uid !== item.val().sender.uid));
    
    
    
  }
  return (
      <div className="flex flex-col-reverse gap-y-2">
        {requests.map((item)=>{
          return( 
          <div key={item.val().sender.uid} className='flex gap-x-4 items-center relative bg-clrthird/10 hover:bg-clrthird/20 p-2 rounded-md'>
            <p className="absolute top-1 right-1 text-clrthird"> ago</p>
            <img src={item.val().sender.photoURL} alt="profile" className='lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] rounded-full object-cover  '/>
            <div className="">
              <h5 className='font-aldrich  '>{item.val().sender.displayName}</h5>
              <p className="font-ubuntu text-clrthird "> <span>mutual</span></p>
              <div className="flex gap-x-3">
                <button type='button' onClick={()=>comfirm(item)} className='font-ubuntu duration-[.4s]  py-1 lg:px-5 px-2 lg:text-lg text-[15px] rounded-md bg-brand text-primarytxt capitalize font-medium   '>confirm</button>
                <button type='button' className='font-ubuntu duration-[.4s] text-clrthird py-1 lg:px-5 px-2 lg:text-lg text-[15px] bg-clrthird/10 rounded-md   capitalize font-medium   '>delete</button>
              </div>
            </div>
          </div>
          )
        })}
      </div>
  )
}

export default FriendRequest