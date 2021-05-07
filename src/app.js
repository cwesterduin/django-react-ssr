import React, { useState } from 'react'

function App({ props }){
    const { one, two, myColor } = Object.fromEntries(props)
    const [color, setColor] = useState(true)
    return (
        <h1 onClick={() => setColor(c => !c)} style={{color: color ? myColor : 'blue'}}>hello, {one}</h1>
    )
}

export default App