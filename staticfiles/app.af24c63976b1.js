import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom';

function Book( { index, name, author }){
    const [fave, setFave] = useState(false)
    return (
        <li onClick={() => setFave(c => !c)} style={{color: fave ? 'green' : 'black'}}>
            {name}
            <p>by: {author}</p>
            <a href={`/${index}`}>go to</a>
        </li>
    )
}

function BookList( { books }){
    return books.map((b, i) => <Book index={i + 1} name={b.name} author={b.author__name} />)
}

function ShowBook( { book, author }){
    return (
        <>
            <h2>{book}</h2>
            <h3>by {author}</h3>
        </>
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
                    <ul>
                        <BookList books={data.books}/>
                    </ul>
                    <a href="/about">About</a>
                    </>
                </Route>
                <Route exact path="/about">
                    <h1>about</h1>
                </Route>
                <Route path="/:id">
                    <>
                    <h1>Book</h1>
                    <ShowBook book={data.book} author={data.author} />
                    </>
                </Route>
        </Switch>
        {/* <ul>
            {books.map(b => <Book name={b.name} author={b.author__name}/>)}
        </ul> */}
        </>
    )
}

export default App