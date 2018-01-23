console.log('App.js is running');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App!!!</h1>
        <p>This is some text</p>
    </div>
);

var templateTwo = (
    <div>
        <h1>Patrick Bailey</h1>
        <p>Age: 35</p>
        <p>Location: Junction City</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);