import { useState } from "react";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import Home from "./assets/pages/Home";
import Friends from "./assets/pages/Friends";
import Message from "./assets/pages/Message";
import Search from "./assets/pages/Search";
import Profile from "./assets/pages/Profile";
import Notfound from "./assets/pages/Components/Notfound";
import BlockList from "./assets/pages/Components/BlockList";
import Groups from "./assets/pages/Groups";
import Layout from "./assets/pages/Components/Layout";
import { getAuth } from "firebase/auth";



import { BrowserRouter, Routes, Route } from "react-router";
import { useSelector } from "react-redux";

function App() {
  
  let userInfo = useSelector((state)=>state.userInfo.value);

  // console.log(userInfo);
  
  const auth = getAuth();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/*" element={<Notfound/>}/>
        {userInfo ?
        <Route path="" element={<Layout/>}>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Friends" element={<Friends />} />
            <Route path="/Message" element={<Message />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Groups" element={<Groups />} />
            <Route path="/blocklist" element={<BlockList />} />
          </Route>
        </Route>
        :
        <Route path="/" element={ <Login />} />
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
