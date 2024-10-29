import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
    title: 'React',
    greeting: 'Hey',
};

const list = [{
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
]

function getTitle(title) {
  return title;
};

const App = () => {

  return (
      <div>
          <h1>{welcome.greeting} {welcome.title}</h1>

          <h1>{getTitle('React')}</h1>

         <Search />

          <hr/>


          <ul>
              {list.map((item, index) => {
                  {/* Only use array indexes as a last resort for key identifiers */
                  }
                  return <li key={index}>{item.title}</li>;
              })}
          </ul>

          <h3>React Component</h3>
          <List/>


      </div>
  );

}

const Search = () => {
    const handleChange = (event) => {
        //synthetic event
        console.log(event);

        //value of target
        console.log(event.target.value);
    }

    return(
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onInput={handleChange}/>
        </div>
    );
}

const List = () => {
    return (

        <ul>
            {list.map((item) => {
                return <li key={item.objectID}>
                    <span><a href={item.url} target="_blank">{item.title}</a> </span>
                    <span> {item.author}</span>
                    <span> {item.num_comments}</span>
                    <span> {item.points}</span>
                </li>;
            })}
        </ul>
    );
}

export default App
