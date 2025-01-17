import React from 'react'
import { GoPlusCircle } from "react-icons/go";
import { FcInvite } from "react-icons/fc";
import { CiTimer } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";


const Groups = () => {
  return (
    <div className='container'>
      {/* group top */}
      <div className="flex justify-between items-center py-1 border  px-2 rounded-md ">
        <h2 className="font-aldrich font-semibold text-clrthird text-xl ">Groups</h2>
        <ul className="flex gap-10">
          <li className='flex flex-col items-center text-clrthird font-ubuntu cursor-pointer '><GoPlusCircle className='text-xl'/><span>Create Group</span></li>
          <li className='flex flex-col items-center text-clrthird font-ubuntu cursor-pointer '><FcInvite className='text-xl'/><span>Invites</span></li>
          <li className='flex flex-col items-center text-clrthird font-ubuntu cursor-pointer '><CiTimer className='text-xl'/><span>Pending Joins</span></li>
        </ul>
      </div>

      {/* group view selection */}
      <div className="flex gap-10 p-2 border border-t-0 rounded-md">
        <button type="button" className={`font-ubuntu text-clrthird`}>Your Groups</button>
        <button type="button" className={`font-ubuntu text-clrthird`}>Others Group</button>
      </div>

      {/* Groups */}
      <div className="flex flex-col p-2 border border-t-0 rounded-md  ">
        <div className="flex justify-between items-center ">
          <div className="flex gap-4 w-[80%]">
            <img src="https://picsum.photos/200/300" alt="groupImage" className='w-[50px] h-[50px] object-cover rounded-[12px]   '/>
            <div className="">
              <h2 className="font-aldrich   ">Demo Group</h2>
              <h5 className='font-ubuntu text-clrthird/50  '><span>203</span> members</h5>
            </div>
          </div>
          <button type="button" className='font-ubuntu py-1 px-5 bg-brand/10 text-clrthird h-fit rounded-md  '>Leave</button>
        </div>
      </div>


      {/* Group create modal */}
      <div className="grid place-items-center w-full h-screen bg-clrthird/20 fixed top-0 left-0 ">
        <div className=" w-[50%] h-fit p-5 bg-primarytxt border rounded-md relative ">
          {/* Close btn */}
          <button type="button" className='absolute top-0 right-0 text-xl text-clrthird p-2    '><IoCloseCircleOutline/></button>

          {/* group name */}
          <div className="">
            <h4 className='font-aldrich text-clrthird  '>Enter your group name.</h4>
            <input type="text" className=' w-full border outline-none py-1 px-3 rounded-[5px] text-clrthird  ' placeholder='Group Name...'/>
            <div className="flex justify-between mt-5">
              <button type='button' className='font-ubuntu text-brand bg-clrthird/10 py-1 px-3 font-medium rounded-md'>Back</button>
              <button type='button' className=' font-ubuntu text-primarytxt bg-brand py-1 px-3 font-medium rounded-md  '>Next</button>
            </div>
          </div>
          {/* group privacy */}
          <div className="">
            <h4 className='font-aldrich text-clrthird  '>What is your group publicity?</h4>
            <label for="public" className='flex items-center gap-3 capitalize text-clrthird font-ubuntu cursor-pointer  '><input type="radio" name="publicity" id="public" /><span>Public</span></label>
            <label for="private" className='flex items-center gap-3 capitalize text-clrthird font-ubuntu cursor-pointer  '><input type="radio" name="publicity" id="private" /> <span>Private</span></label>
            <div className="flex justify-between mt-5">
              <button type='button' className='font-ubuntu text-brand bg-clrthird/10 py-1 px-3 font-medium rounded-md'>Back</button>
              <button type='button' className=' font-ubuntu text-primarytxt bg-brand py-1 px-3 font-medium rounded-md  '>Next</button>
            </div>
          </div>

          {/* group type */}
          <div className="">
            <h4 className='font-aldrich text-clrthird  '>What type your group is?</h4>
            <div className="flex justify-between mt-5">
              <button type='button' className='font-ubuntu text-brand bg-clrthird/10 py-1 px-3 font-medium rounded-md'>Back</button>
              <button type='button' className=' font-ubuntu text-primarytxt bg-brand py-1 px-3 font-medium rounded-md  '>Next</button>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Groups