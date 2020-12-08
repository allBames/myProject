import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/State'
import {rerender} from "./render";

rerender(state);

reportWebVitals();
