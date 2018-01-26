let visibility = false;

const toggleDetails = () => { 
    visibility = !visibility;
    render()
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <p>These are some details</p>
            )}
            
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
