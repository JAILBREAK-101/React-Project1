// THIS IS WHERE THE FIRST PROJECT COMES IN
import React from "react";
// import utilities, images and icons that i need beneath here.
import "./images.json";
import Header from "./components/Header";
import Body from "./components/Body";

// THIS IS WHERE ALL OUR COMPONENTS WOULD BE.
export default function Project1() {
  return (
    <div className="wrapper">
      {/*Background picture would come here in the Header component */}
      <Header />
      <Body />
    </div>
  );
}
