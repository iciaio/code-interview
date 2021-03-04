import React, { Component } from 'react';
import {connect} from 'react-redux'
import DisplayBooks from "./DisplayBooks";
import {deleteBookAction, loadBooksAction} from "./reducers/actions";
import booksData from "./data.json";
import {getBooks} from "./reducers/selectors";

class ClassApp extends Component {
  constructor() {
    super();
    this.state = {
      bookToDelete: '',
      isIsbnValid: false
    }
  }

  handleClickToLoadBooks = () => {
    this.props.loadBooks(booksData);
  }

  handleClickToDeleteBook = () => {
    this.props.deleteBook(this.state.bookToDelete)
  }

  handleInputIsbn = (e) => {
    const isbnInput = e.target.value;
    const match = "\^[0-9](-)[0-9]{4}(-)[0-9]{4}(-)[1-9]\$"
    const isValid = isbnInput.match(match);
    this.setState({
      bookToDelete: isbnInput,
      isIsbnValid: isValid
    })
  }

  render() {
    return (
      <div style={{margin: 30}}>
        <h1>
          Welcome to Circadence's Front End Interview! <br/> (AKA Alicia's Favorite Books)
        </h1>
        <h2>
          See README for instructions to get started!
        </h2>
        <button onClick={this.handleClickToLoadBooks} style={{margin: 30}}>Load Books</button>
        <label htmlFor='bookToDelete'>ISBN of book to delete: </label>
        <input onChange={this.handleInputIsbn} name='bookToDelete'/>
        <button disabled={!this.state.isIsbnValid} onClick={this.handleClickToDeleteBook} style={{margin: 30}}>Delete Book</button>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <DisplayBooks books={this.props.books}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassApp);

function mapStateToProps(state){
  return {
    books: getBooks(state)
  }
}

function mapDispatchToProps (dispatch){
  return {
    loadBooks: (books) => dispatch(loadBooksAction(books)),
    deleteBook: (bookToDelete) => dispatch(deleteBookAction(bookToDelete))
  }
}