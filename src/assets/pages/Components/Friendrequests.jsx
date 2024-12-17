import React, { useState } from "react";
// components
import Requests from "./Requests";
import Add from "./Add";

// icons
import { RiUserReceivedLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiUserShared2Line } from "react-icons/ri";

// images
import profile from "../../images/profile.jpg";
import tanvir from "../../images/tanvir.jpg";
const Friendreq = () => {
  let [requests, setRequests] = useState(true);
  let [addfrnd, setAddfrnd] = useState(false);
  let [reqsent, setReqsent] = useState(false);

  // request function
  let ReqActive = () => {
    setRequests(true);
    setAddfrnd(false);
    setReqsent(false);
  };

  // add function
  let addActive = ()=>{
    setRequests(false);
    setAddfrnd(true);
    setReqsent(false);
  }

  // sent function
  let sentActive = ()=>{
    setRequests(false);
    setAddfrnd(false);
    setReqsent(true);
  }
  return (
    <div className="   ">
      <div className="flex justify-between gap-x-[10%]  border-clrthird/10 border rounded-[50px]    ">
        {/* requests */}
        <div className="w-full">
          {requests ? (
            <h2 className="frndRedhead bg-brand text-primarytxt hover:bg-brand hover:text-primarytxt" onClick={ReqActive}>
              <RiUserReceivedLine className="text-2xl" /> <span>requests</span>
            </h2>
          ) : (
            <h2 className="frndRedhead" onClick={ReqActive}>
              <RiUserReceivedLine className="text-2xl" /> <span>requests</span>
            </h2>
          )}
        </div>

        {/* add */}
        <div className="w-full">
          {
            addfrnd ?
          <h2 className="frndRedhead bg-brand text-primarytxt hover:bg-brand hover:text-primarytxt" onClick={addActive}>
            <AiOutlineUserAdd className="text-2xl" />
            <span>add</span>
          </h2>
          :
          <h2 className="frndRedhead" onClick={addActive}>
            <AiOutlineUserAdd className="text-2xl" />
            <span>add</span>
          </h2>
          }
        </div>

        {/* view sent request */}
        <div className="w-full">
          {reqsent?
          <h2 className="frndRedhead bg-brand text-primarytxt hover:bg-brand hover:text-primarytxt" onClick={sentActive}>
            <RiUserShared2Line className="text-2xl" />
            <span>view sent request</span>
          </h2>
          :
          <h2 className="frndRedhead" onClick={sentActive}>
            <RiUserShared2Line className="text-2xl" />
            <span>view sent request</span>
          </h2>
          }
        </div>
      </div>
      {requests &&
      <div className="mt-2 mx-[23%] flex flex-col gap-y-2 ">
        <Requests profile={profile} name="Md. Shakhawat Hossain" mutual="3" />
        <Requests profile={profile} name="Md. Shakhawat Hossain" mutual="38" />
        <Requests profile={profile} name="Md. Shakhawat Hossain" mutual="75" />
      </div>
      }
      {addfrnd &&
      <div className="mt-2 mx-[23%] flex flex-col gap-y-2 ">
        <Add profile={tanvir} name="Tanvir Musa" mutual="917"/>
        <Add profile={profile} name="Md.Shakhawat Hossain" mutual="91"/>
      </div>
      }
    </div>
  );
};

export default Friendreq;
