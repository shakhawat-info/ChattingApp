import { useState } from "react";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import Home from "./assets/pages/Home";
import Friends from "./assets/pages/Friends";
import Message from "./assets/pages/Message";
import Search from "./assets/pages/Search";
import Profile from "./assets/pages/Profile";






import { BrowserRouter, Routes, Route } from "react-router";
import { useSelector } from "react-redux";

function App() {
  
  let userInfo = useSelector((state)=>state.userInfo.value);

  // console.log(userInfo);
  
  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ userInfo ? <Home /> : <Login />} />
        <Route path="/Signup" element={<Signup />} />
        {userInfo && 
        <Route>
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
