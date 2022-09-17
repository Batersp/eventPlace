import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";

function App() {
    return (
        <div className="App">
            <div className='App-container'>
                <Header/>
                <Nav/>
            </div>

        </div>
    );
}

export default App;
