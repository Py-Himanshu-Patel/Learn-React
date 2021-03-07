// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const firstname = "Himanshu";
const lastname = "Patel";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const link = "https://picsum.photos/400/200";
const textStyle = {
    textAlign: 'center',
    display: 'block',
    margin: '10px'
}

let greeting = "Provide Time";
let currDate = new Date(); // current
// let currDate = new Date(2021, 3, 7, 5); // morning
// let currDate = new Date(2021, 3, 7, 14); // afternoon
// let currDate = new Date(2021, 3, 7, 21); // night

let currHour = currDate.getHours();
const greetingColor = {}

if (currHour >= 1 && currHour < 12){
    greeting = "Good Morning";
    greetingColor.color = "green";
} else if (currHour >= 12 && currHour <= 19){
    greeting = "Good Afternoon";
    greetingColor.color = "orange";
} else {
    greeting = "Good Night";
    greetingColor.color = "black";
}

ReactDOM.render( 
    <>
        <h1> Hello React {8+9} </h1>
        <p>Today's Date is : {date}</p>
        <p>Current Time is : {time}</p>

        {/* template string  */}
        <p contentEditable='true' className='Name'> Welcome text: {`Hello there, my firstname is ${firstname} 
        and lastname is ${lastname}`} </p>

        <p style={{ textAlign: 'center' }}>This is an Image</p>
        <p style={textStyle}>Which gets changed on refresh</p>


        {/* use className as an sttribute to assign class */}
        <div className="images">
            <img src={link} />
        </div>

        <div style={{textAlign:'center', margin:'10px'}}>
            <h1>Hello Sir, <span style={greetingColor}> {greeting} </span></h1>
        </div>
    </>
    ,document.getElementById('root')
);
