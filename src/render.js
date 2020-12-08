import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, addPost} from './redux/State'
import {BrowserRouter} from "react-router-dom";

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addNewMessage={addNewMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



