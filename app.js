import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./Components/Game"

const App = () => {
    return (
        <>
            <Game />
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));