import React from "react";

const Add = (props) => {
  return (
    <div className="flex flex-col gap-y-5 hover:bg-clrthird/10 p-2 rounded-md">
      <div className="flex gap-x-5 items-center">
        <img
          src={props.profile}
          alt="profile"
          className="w-[60px] h-[60px] rounded-full"
        />
        <div className="w-full">
          <h3 className="flex justify-between font-ubuntu font-bold text-xl  ">
            <span>{props.name}</span>{" "}
            <span className="font-medium text-clrthird/50  ">1 d</span>
          </h3>
          <h5 className="font-medium font-ubuntu text-sm text-clrthird/80  ">
            <span className="mr-2">{props.mutual}</span>mutual friends
          </h5>
          <div className="flex gap-x-5 mt-1">
            <button
              type="button"
              className="py-2 px-7 bg-brand text-primarytxt font-bold rounded-md font-ubuntu "
            >
              Add
            </button>
            <button
              type="button"
              className="py-2 px-7 bg-clrthird/20 text-bodybg font-bold rounded-md font-ubuntu  "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
