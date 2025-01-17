import React from "react";

// components
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import Story from "./Components/Story";
import Post from "./Components/Post";

// Images
import profile from '../images/profile.jpg';
import profilecover from '../images/profilecover.jpg';



const Home = () => {



  return (
    <>
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
