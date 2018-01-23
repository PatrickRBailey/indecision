"use strict";

console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App!!!"
    ),
    React.createElement(
        "p",
        null,
        "This is some text"
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Patrick Bailey"
    ),
    React.createElement(
        "p",
        null,
        "Age: 35"
    ),
    React.createElement(
        "p",
        null,
        "Location: Junction City"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
