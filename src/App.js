import React from 'react';
import './App.css';
import Feed from "./Feed";
import Header from "./Header"
import Sidebar from "./Sidebar"

function App() {
    return ( <
        div className = "app" > { /* header */ }

        <
        Header / > { /* body z */ } <
        div className = "app__body" >
        <
        Sidebar / >
        <
        Feed / > { /* feed */ } { /* widgets */ }



        <
        /div> <
        /div>
    );
}

export default App;