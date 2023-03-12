// LEARNING ABOUT PROPS IN REACT.
// import React from "react";

// ANOTHER WAY TO IMPORT REACT
// const react = require("react");

// TO USE THIS OTHER WAY, WE CAN DO THIS.
// react.Component<{
// return
// }
/* === END OF THE OTHER WAY === */

// export default function PropsInReact() {
//   const firstName = "Gbems";
//   const lastName = "Lems";
//   return (
//     <div>
//       <h1>
//         Hello {firstName.toUpperCase}
//         {lastName.toLowerCase}, You are welcome to my page.
//       </h1>
//     </div>
//   );
// }

// FOR VANILLA JAVASCRIPT.
// Select.
let time = document.getElementsByClassName("time")[0];

const date = new Date();

const hours = date.getHours();
// let timeOfDay;

// manipulate
if (hours < 12) {
  time.innerHTML = "morning";
  console.log(timeOfDay);
} else if (hours >= 12 && hours < 13) {
  time.innerHTML = "afternoon";
} else {
  time.innerHTML = "night";
}

// output (on the HTML Page )
// time.innerHTML = timeOfDay;
