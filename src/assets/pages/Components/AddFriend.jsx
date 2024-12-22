import React from 'react'

const AddFriend = ({profile , name , time , mutual}) => {
  return (
    <div className='flex gap-x-4 items-center relative bg-clrthird/10 hover:bg-clrthird/20 p-2 rounded-md'>
    <p className="absolute top-1 right-1 text-clrthird">{time} ago</p>
    <img src={profile} alt="profile" className='lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] rounded-full object-cover  '/>
    <div className="">
      <h5 className='font-aldrich  '>{name}</h5>
      <p className="font-ubuntu text-clrthird ">{mutual} <span>mutual</span></p>
      <div className="flex gap-x-3">
        <button type='button' className='font-ubuntu duration-[.4s] text-clrthird py-1 lg:px-5 px-2 text-[15px] lg:ext-lg bg-clrthird/10 rounded-md hover:bg-brand hover:text-primarytxt capitalize font-medium   '>add</button>
        <button type='button' className='font-ubuntu duration-[.4s] text-clrthird py-1 lg:px-5 px-2 text-[15px] lg:ext-lg bg-clrthird/10 rounded-md hover:bg-brand hover:text-primarytxt capitalize font-medium   '>remove</button>
      </div>
    </div>
    </div>
  )
}

export default AddFriend