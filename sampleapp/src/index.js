// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

/*ReactDOM.render(<h1> HELLO WORLD </h1>,document.getElementById("root"));

 <h1> HELLO WORLD </h1> // in react it is called JSX expression

//render multiple elements 

ReactDOM.render(
  <div>
  <h1> HELLO GUYS </h1>
  <p>How are you?</p>
  </div>,
document.getElementById("root"));

//Another way to render multiple elements 

ReactDOM.render(
  [
  <h1> HELLO GUYS </h1>,
  <p>How are you?</p>
  ],
document.getElementById("root"));

// React Fragment in react

ReactDOM.render(
  <React.Fragment>
  <h1> HELLO  </h1>
  <p>How are you?</p>
  </React.Fragment>,
document.getElementById("root"));

// JSX Expression in React

// const fname = "Srishti";

ReactDOM.render(
  <>
    <h1>My name is {fname}.</h1>
    <h1>My name is {fname} {lname}.</h1>
    <h1>My name is {fname +" " +lname}.</h1>
    <p>My lucky number is {3+7}</p>
  </>,
  document.getElementById("root")
);

// ES6 templete literals in JSX

const fname = "Srishti";
const lname = "Priya";

ReactDOM.render(
  <>
    <h1>My name is {`${fname} ${lname}`}.</h1>
  </>,
  document.getElementById("root")
);
*/
// JSX attributes & css styling

const name = "Srishti";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const links = "https://github.com/srishtipriya08";

ReactDOM.render(
  <>
    {/* <h1 contentEditable ="true">My name is {name}.</h1> */}
    <h1 className="heading">My name is {name}.</h1>
    <div className = "img_div">
    <img src ={img1} alt="RandomPics"/>
    <a href={links} target="_blank">
      <img src ={img2} alt="RandomPics"/>
    </a>
    </div>
  </>,
  document.getElementById("root")
);
