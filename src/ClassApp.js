import React, { Component } from 'react';
import {connect} from 'react-redux'
import DisplayBooks from "./DisplayBooks";
import {deleteBookAction, loadBooksAction} from "./reducers/actions";
import booksData from "./data.json";
import {getBooks} from "./reducers/selectors";

class ClassApp extends Component {

  handleClickToLoadBooks = () => {
    this.props.loadBooks(booksData);
  }

  handleClickToDeleteBook = () => {
    this.props.deleteBook(parseInt(this.state.bookToDelete))
  }

  handleInputId = (e) => {
    this.setState({bookToDelete: e.target.value})
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
        <label htmlFor='bookToDelete'>Id of book to delete: </label>
        <input onChange={this.handleInputId} name='bookToDelete'/>
        <button onClick={this.handleClickToDeleteBook} style={{margin: 30}}>Delete Book</button>
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