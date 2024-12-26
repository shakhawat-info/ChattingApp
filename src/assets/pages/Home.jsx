import React, { useState, Component } from "react";
import { useNavigate } from "react-router";

// components
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import Story from "./Components/Story";
import Post from "./Components/Post";

// Images
import profile from '../images/profile.jpg'
import profilecover from '../images/profilecover.jpg'
const Home = () => {

  // Menu function
  let [memu, setMenu] = useState(false);
  let MenuVisiblity = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      {/* Nav Start */}
      <Nav/>
      {/* Nav Start */}

      {/* Menu start */}
      <Menu />
      {/* Menu end */}

      {/* ==== Story Section Start */}
      <Story />
      {/* ==== Story Section End */}

      {/* News Feed start */}
      <Post profile={profile} name="Md. Shakhawat Hossain" visiblity="Public" text="Hello Sir?" imgView="" videoView="hidden" imgLink={profilecover} />
      <Post profile={profile} name="Md. Shakhawat Hossain" visiblity="Public" text="Hello Sir?" imgView="hidden" videoView="hidden" />
      {/* News Feed end */}
    </>
  );
};

export default Home;
