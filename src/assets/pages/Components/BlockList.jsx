import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue , remove} from "firebase/database";
import { Link } from 'react-router';
import Nav from './Nav';
import { toggle } from '../../Redux/Features/MenuModal/MenuModalSlice';

// icons
import { RiUserForbidLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';

const BlockList = () => {

  // Redux menu toggle
  let istoggle = useSelector((state)=> state.menuToggle.value);
  let dispatch = useDispatch();
  // current user data
  let currentUser = useSelector((state)=>state.userInfo.value);
  
  let [BlockedList , setBlockedList] = useState([]);
  const db = getDatabase();
  const BlockRef = ref(db, 'BlockList/');

  useEffect(()=>{

    let Blocklisted = [];
    onValue(BlockRef, (snapshot) => {
      snapshot.forEach((item)=>{
        if(item.val().Blocker.BlockerID == currentUser.user.uid){
          Blocklisted.push({id: item.key , ...item.val().Blocked})
        }
      })
    });
    console.log(Blocklisted);
    
    setBlockedList(Blocklisted)
  },[])


  // unblock someone
  let Unblock = (item)=>{
    
    // Remove BlockList from Database
    remove(ref(db, 'BlockList/' + item.id));

    // Block list update
    setBlockedList((prevList) => prevList.filter((prevItem) => prevItem.id !== item.id));
  }

  return (
    <>
    <Nav/>
    <div className='lg:mt-[75px] mt-[120px]'>
      <div className="container">
        <div className="shadow p-2">
          <div className="flex justify-between items-center   ">
            <div className="w-[70%]">
              <h2 className='font-aldrich    '>Your BlockList</h2>
              <p className='font-ubuntu text-clrthird '>If you block someone, you won't be able to see their post or ID, no one on your block list will be able to see your post or ID. You cannot exchange messages with each other.</p>
            </div>
            <Link onClick={()=>dispatch(toggle(false))} to="/friends" className='flex items-center gap-2 text-primarytxt bg-brand py-1 px-3 font-semibold rounded-md     '><RiUserForbidLine className='text-lg'/> <span>Add to block list</span></Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-2  ">
          {BlockedList.map((item)=>(
            <div key={item.id} className="flex justify-between items-center shadow p-2 rounded-[5px]   ">
              <div className="flex gap-2 items-center">
                <img src={item.BlockedPic} alt="profile" className='w-[50px] h-[50px] rounded-full    ' />
                <h2 className='font-aldrich  '>{item.BlockedName}</h2>
              </div>
              <button type="button" onClick={()=>Unblock(item)} className='h-[30px] px-5 bg-clrthird/10 rounded-md font-semibold font-ubuntu text-clrthird  '>Unblock</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default BlockList