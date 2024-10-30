import * as React from 'react';
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

    const [searchTerm, setSearchTerm] = React.useState('User has not supplied a search term');

    const stories = [
        {
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

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    const searchedStories = stories.filter((story) => {
       return (
           story.title.toLowerCase().includes(searchTerm.toLowerCase())
       )
    });

  return (
      <div>
          <h1>{welcome.greeting} {welcome.title}</h1>
         <Search onSearch={handleSearch} />
          <hr/>
          <List list={searchedStories}/>
      </div>
  );

}

const Search = (props) => {

    return(
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onInput={props.onSearch}/>

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
