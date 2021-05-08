import React from 'react'
import ReactDOM from 'react-dom';
import App from './app'
const JSON5 = require('json5')
import { BrowserRouter as Router } from 'react-router-dom';

const preProps = { ...root.dataset }
console.log(preProps)
let props 
    if (preProps.props) {
        props = Object.entries((JSON5.parse(preProps.props)))
    }
    else {props = []}

ReactDOM.render(
    <Router>
            <App props={props}/>
    </Router>,
document.getElementById('root')
);