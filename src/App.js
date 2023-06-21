import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import React from 'react';
// import About from "./components/About.js";

export default function App() {
  
  return (
    <div>
      <Navbar title="Create" />
      <div className="container my-3">
        <TextForm heading="Enter Text " />
        {/* <About/> */}
      </div>
    </div>
  );
}
