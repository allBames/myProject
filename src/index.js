import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addNewMessage, updateNewMessage, addPost, subscribe} from './redux/State'
import {BrowserRouter} from "react-router-dom";

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addNewMessage={addNewMessage} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(state);

subscribe(rerender);

reportWebVitals();
