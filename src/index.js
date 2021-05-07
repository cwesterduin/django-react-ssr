import React from 'react'
import ReactDOM from 'react-dom';
import App from './app'

const preProps = { ...root.dataset }
const props = Object.entries((JSON.parse(preProps.props.replace(/'/g, '"'))))

ReactDOM.render(<App props={props}/>, root);
