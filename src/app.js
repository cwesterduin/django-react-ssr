import React, { useState } from 'react'

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
    const { one, two, myColor, books } = Object.fromEntries(props)
    const [color, setColor] = useState(true)
    return (
        <>
        <h1 onClick={() => setColor(c => !c)} style={{color: color ? myColor : 'blue'}}>hello, {one}</h1>
        <ul>
            {books.map(b => <Book name={b.name} author={b.author__name}/>)}
        </ul>
        </>
    )
}

export default App