import React from 'react'

const ChatBubbles = ({profile , name}) => {
  return (
    <div className=' cursor-pointer '>
    <img src={profile} alt="profile" className='w-[50px] h-[50px] rounded-full object-cover  ' />
    <div className="">
      <p className="truncate text-[12px]  font-ubuntu text-clrthird w-[50px]" >{name }</p>
    </div>
</div>
  )
}

export default ChatBubbles