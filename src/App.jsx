import { useState } from "react";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import Home from "./assets/pages/Home";
import Friends from "./assets/pages/Friends";
import Message from "./assets/pages/Message";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
