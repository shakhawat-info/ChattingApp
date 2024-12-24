import React, { useState, Component } from "react";
import { useNavigate } from "react-router";

// components
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import Story from "./Components/Story";

// Images
const Home = () => {
  // variables
  let navigate = useNavigate();

  // Menu function
  let [memu, setMenu] = useState(false);
  let MenuVisiblity = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      {/* Nav Start */}
      <Nav
        menu={MenuVisiblity}
        friends={() => navigate("/friends")}
        home={() => navigate("/home")}
        message={() => navigate("/message")}
      />
      {/* Nav Start */}

      {/* Menu start */}
      <Menu memu={memu} menuClose={() => setMenu(false)} />
      {/* Menu end */}

      {/* ==== Story Section Start */}
      <Story />
      {/* ==== Story Section End */}
    </>
  );
};

export default Home;
