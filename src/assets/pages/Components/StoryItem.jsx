import React from 'react'

const StoryItem = (props) => {
  return (
    <div className="relative mr-[7px] lg:h-[200px] h-[150px] rounded-md overflow-hidden shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]">
    <img
      src={props.profile}
      alt="profile"
      className="w-[35px] h-[35px] rounded-full object-cover absolute top-1 left-1  "
    />
    <img
      src={props.profile}
      alt="profile"
      className="w-full h-full object-cover "
    />
    <div className="absolute bottom-0 left-0 w-full h-[20px] bg-gradient-to-t from-[#ff045c]/50"></div>
    <h4 className="absolute bottom-0 left-2 font-ubuntu text-primarytxt sm:text-[14px] ">{props.name}</h4>
  </div>
  )
}

export default StoryItem