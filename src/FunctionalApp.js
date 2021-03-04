import React, { useReducer, useState } from 'react';
import DisplayBooks from "./DisplayBooks";
import reducer from './reducers/reducer';
import booksData from './data.json';
import {loadBooksAction, deleteBookAction} from './reducers/actions';

const FunctionalApp = () => {

  const [state, dispatch] = useReducer(
    reducer,
    {books: []},
    (initialState)=> initialState
    );

  const [bookToDelete, setBookToDelete] = useState();
  const [isIsbnValid, setIsIsbnValid] = useState(false);

  const handleClickToLoadBooks = () => {
    dispatch(loadBooksAction(booksData));
  }

  const handleClickToDeleteBook = () => {
    dispatch(deleteBookAction(bookToDelete))
  }

  const handleInputIsbn = (e) => {
    const isbnInput = e.target.value;
    setBookToDelete(isbnInput);
    const match = "\^[0-9](-)[0-9]{4}(-)[0-9]{4}(-)[1-9]\$"
    const isValid = isbnInput.match(match);
    setIsIsbnValid(isValid);
  }

  return (
    <div style={{margin: 30}}>
      <h1>
        Welcome to Circadence's Front End Interview! <br/> (AKA Alicia's Favorite Books)
      </h1>
      <h2>
        See README for instructions to get started!
      </h2>
      <button onClick={handleClickToLoadBooks} style={{margin: 30}}>Load Books</button>
      <label for='bookToDelete'>ISBN of book to delete: </label>
      <input onChange={handleInputIsbn} name='bookToDelete'/>
      <button disabled={!isIsbnValid} onClick={handleClickToDeleteBook} style={{margin: 30}}>Delete Book</button>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <DisplayBooks books={state.books}/>
      </div>
    </div>
  )
}

export default FunctionalApp;