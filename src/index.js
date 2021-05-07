import React from 'react'
import ReactDOM from 'react-dom';
import App from './app'
const JSON5 = require('json5')

const preProps = { ...root.dataset }
console.log(preProps)
const props = Object.entries((JSON5.parse(preProps.props)))

ReactDOM.render(<App props={props}/>, root);
