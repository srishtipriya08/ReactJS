import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cssStyle = { };
let curDate = new Date();  //new Date(2020,5,5,14) (yyyy,mm,dd,time)
curDate = curDate.getHours();
let greeting = " ";

if(curDate >=1 && curDate < 12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}

else if (curDate >=11 && curDate < 19){
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}

else{
  greeting = "Good Night";
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
  <div>
  <h1>Hello Ma'am,<span style = {cssStyle}> {greeting}</span> </h1>
  </div>
    
  </>,
  document.getElementById("root")
);