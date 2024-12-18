import { useState } from "react";
import LoginSignup from "./assets/pages/LoginSignup";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Components/Login";
import Signup from "./assets/pages/Components/Signup";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
