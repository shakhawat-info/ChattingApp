import React from 'react'

const ChatID = ({profile , name , chatSMS , smsNumber , nameWidth , smsimg , bg}) => {
  return (
    <div className={`flex  h-auto items-center gap-2 relative  ${bg && 'bg-clrthird/10' } hover:bg-transparent p-1 rounded-md duration-[.2s] ${smsimg} cursor-pointer lg:mr-0 mr-1`}>
        <img src={profile} alt="profile" className='w-[50px] h-[50px] rounded-full object-cover  ' />
        <div className="">
          <p className={`truncate text-[12px] lg:text-[16px] font-ubuntu text-clrthird w-[${nameWidth}] `} >{name }</p>
          <p className='text-clrthird/60  text-[12px] '>{chatSMS}</p>
          {
            smsNumber &&
           <span className='absolute top-[35%] right-[10px] bg-brand text-primarytxt w-[20px] h-[20px] text-[12px] font-ubuntu grid place-items-center rounded-full  '>{smsNumber}</span>
          }

        </div>
    </div>
  )
}

export default ChatID