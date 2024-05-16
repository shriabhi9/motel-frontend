import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Rooms } from "./Pages/Rooms";


function App() {
  return (
    <div className="h-screen comfortaa-font">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Rooms" element={<Rooms />} />
      </Routes>
    </div>
  );
}

export default App;
