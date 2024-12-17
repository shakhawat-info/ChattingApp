import React, { useState } from "react";
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import Friendreq from "./Components/Friendrequests";
// utility
// import Btntrue from "../Utility/Btntrue";

const Home = () => {
  // Menu Show ..
  let [show, setShow] = useState(false);
  let ShowBtn = () => {
    setShow(true);
  };

  // Menu Hide ..
  let HideBtn = () => {
    setShow(false);
  };

  // Friend Request Option
  let [frndOption , setFrndOption] = useState(false);
  let FriendRequest = ()=>{
    setFrndOption(true);
  }
  return (
    <section>
      <Nav show={ShowBtn} />
      <div className="lg:grid block lg:grid-cols-home h-screen grid-rows-none">
        <div className=" relative ">{show && <Menu hide={HideBtn} frndRequest={FriendRequest} />}</div>
        <div className="p-2 lg:border border-brand border-none">
          {frndOption && <Friendreq />}
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Home;
