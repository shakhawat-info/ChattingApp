import React from "react";



const Story = (props) => {
  return (
    <div className="relative min-w-[150px] max-w-[150px] h-full rounded-md overflow-hidden">
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
      <h4 className="absolute bottom-2 left-2 ">{props.name}</h4>
    </div>
  );
};

export default Story;
