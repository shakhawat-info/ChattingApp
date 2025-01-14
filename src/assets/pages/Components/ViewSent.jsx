import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, remove } from "firebase/database";

const ViewSent = () => {
  const db = getDatabase();
  let [requests , setRequests] = useState([]);

  let currentUser = useSelector((state)=>state.userInfo.value);
  // console.log(currentUser.displayName);
  
  useEffect(()=>{
    const viewsendRef = ref(db, 'Requests/');
    onValue(viewsendRef, (snapshot) => {
      let requestArr = [];
      snapshot.forEach((item)=>{
        
        
        if(item.val().sender.uid == currentUser.user.uid){
          requestArr.push(item);
        }
        setRequests(requestArr);
      })
    });
  } , [])

  let Cancel = (id)=>{
    // console.log(requests);
    remove(ref(db, 'Requests/' + id.key))
    // remove the added user
    setRequests((prevList) => prevList.filter((prevItem) => prevItem.val().receiver.uid !== id.val().receiver.uid));
    
  }
  return (
    <div className="flex flex-col-reverse gap-y-2">
      {requests.map((item , index)=>{
        return (<div key={index} className='flex gap-x-4 items-center relative bg-clrthird/10 hover:bg-clrthird/20 p-2 rounded-md'>
        <p className="absolute top-1 right-1 text-clrthird"> ago</p>
        <img src={item.val().receiver.photoURL} alt="profile" className='lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] rounded-full object-cover  '/>
        <div className="">
          <h5 className='font-aldrich  '>{item.val().receiver.displayName}</h5>
          <p className="font-ubuntu text-clrthird "> <span>mutual</span></p>
          <div className="flex gap-x-3">
            <button type='button' onClick={()=>Cancel(item)} className='font-ubuntu duration-[.4s] lg:text-lg text-[15px]  py-1 px-2 lg:px-5  rounded-md bg-brand text-primarytxt capitalize font-medium   '>cancel</button>
          </div>
        </div>
        </div>)
      })}
    </div>
    
  )
}

export default ViewSent