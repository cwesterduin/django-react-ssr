import React, { useState } from 'react'

function App(){
    const [color, setColor] = useState(false)
    return (
        <h1 onClick={() => setColor(c => !c)} style={{color: color ? 'green' : 'blue'}}>hello, world</h1>
    )
}

export default App