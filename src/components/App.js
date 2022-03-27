import React, {Component, useState} from "react";
import "./../styles/App.css";

const handleClick = () => {
  let para = document.createElement('p');
  para.textContent = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  para.setAttribute("id", "para");
  document.querySelector("#main").appendChild(para);
}




function App() {
  return (
    <div id="main">
      <button onClick="handleClick" id="click"></button>
    </div>
  );
}


export default App;
