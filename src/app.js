import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom';

function Book( { name, author }){
    const [fave, setFave] = useState(false)
    return (
        <li onClick={() => setFave(c => !c)} style={{color: fave ? 'green' : 'black'}}>
            {name}
            <p>by: {author}</p>
        </li>
    )
}

function App({ props }){
    // const props = {...Object.fromEntries(data)}
    const data = {...Object.fromEntries(props)}
    console.log(data)
    return (
        <>
        <h1>Hello</h1>
        <Switch>
                <Route exact path="/">
                    <>
                    <h1>Home</h1>
                    <a href="/about">About</a>
                    </>
                </Route>
                <Route path="/about">
                    <h1>about</h1>
                </Route>
        </Switch>
        {/* <ul>
            {books.map(b => <Book name={b.name} author={b.author__name}/>)}
        </ul> */}
        </>
    )
}

export default App