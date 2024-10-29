import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
    title: 'React',
    greeting: 'Hey',
};



function getTitle(title) {
  return title;
};

const App = () => {

    const stories = [{
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

  return (
      <div>
          <h1>{welcome.greeting} {welcome.title}</h1>

         <Search />

          <hr/>

          <List list={stories}/>


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

const List = (props) => {
    return (

        <ul>
            {props.list.map((item) => {
                return (
                    <Item key={item.objectID} item={item} />
                )
            })}
        </ul>
    );
}

const Item = (props) => {

    return (
     <li>
        <span><a href={props.item.url} target="_blank">{props.item.title}</a> </span>
        <span> {props.item.author}</span>
        <span> {props.item.num_comments}</span>
        <span> {props.item.points}</span>
    </li>
    );
}

export default App
