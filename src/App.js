import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Hotels } from "./Pages/Hotels";



function App() {
  return (
    <div className="comfortaa-font w-screen overflow-x-hidden h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Hotels" element={<Hotels/>} />
      </Routes>
    </div>
  );
}

export default App;
