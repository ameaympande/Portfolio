import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../screen/About";
import Home from "../screen/Home";

function AppNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppNavigator;
