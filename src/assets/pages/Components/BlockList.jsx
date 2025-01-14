import React from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

// icons
import { RiUserForbidLine } from "react-icons/ri";

const BlockList = () => {
  return (
    <>
    <Nav/>
    <div className='lg:mt-[75px] mt-[120px]'>
      <div className="container">
        <div className="shadow p-2">
          <div className="flex justify-between items-center   ">
            <div className="w-[70%]">
              <h2 className='font-aldrich    '>Your BlockList</h2>
              <p className='font-ubuntu  '>If you block someone, you won't be able to see their post or ID, no one on your block list will be able to see your post or ID. You cannot exchange messages with each other.</p>
            </div>
            <Link to="/friends" className='flex items-center gap-2 text-primarytxt bg-brand py-1 px-3 font-semibold rounded-md     '><RiUserForbidLine className='text-lg'/> <span>Add to block list</span></Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-2  ">
          <div className="flex justify-between items-center shadow p-2 rounded-[5px]   ">
            <div className="flex gap-2 items-center">
              <img src="sDs" alt="profile" className='w-[50px] h-[50px] rounded-full    ' />
              <h2>Name</h2>
            </div>
            <button type="button" className='h-[30px] px-5 bg-clrthird/10 rounded-md font-semibold font-ubuntu text-clrthird  '>Unblock</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BlockList