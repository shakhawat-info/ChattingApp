import React from 'react'

const ChatID = ({profile , name}) => {
  return (
    <div className='w-auto h-auto lg:flex items-center gap-2 relative bg-clrthird/10 hover:bg-transparent p-1 rounded-md duration-[.2s] cursor-pointer '>
        <img src={profile} alt="profile" className='w-[50px] h-[50px] rounded-full object-cover  ' />
        <div className="">
          <p className="truncate text-[12px] lg:text-[16px] font-ubuntu text-clrthird w-[50px] lg:w-fit " >{name }</p>
          <p className='text-clrthird/60  '>Hello sir ?</p>
          <span className='absolute top-[35%] right-[10px] bg-brand text-primarytxt w-[20px] h-[20px] text-[12px] font-ubuntu grid place-items-center rounded-full  '>34</span>

        </div>
    </div>
  )
}

export default ChatID