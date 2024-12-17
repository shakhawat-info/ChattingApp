import React, { useRef, useState } from "react";
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import Friendreq from "./Components/Friendrequests";
// utility
// import Btntrue from "../Utility/Btntrue";

const Home = () => {
  // Menu Show ..
  let mnuHide = useRef();
  let [show, setShow] = useState(false);
  let ShowBtn = () => {
    setShow(true);
  };

  // Menu Hide ..
  let HideBtn = ()=>{
    setShow(false);
  }
  return (
    <section>
      <Nav show={ShowBtn}  />
      <div className="grid grid-cols-home h-screen grid-rows-none">
        <div className=" relative ">
        {show && (
            <Menu hide={HideBtn} />
          )}
          </div>
        <div className="p-2 border border-brand">
          <Friendreq/>
        </div>
        <div className=" "></div>
      </div>
    </section>
  );
};

export default Home;
