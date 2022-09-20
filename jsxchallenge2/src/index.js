import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Srishti";
const curDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>Hello, My name is {fname}.</h1>
    <p>Today's Date is {curDate}</p>
    <p>Current Time is {curTime}</p>
  </>,
  document.getElementById("root")
);
