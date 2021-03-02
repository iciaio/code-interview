import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import {connect} from 'react-redux'


class App extends Component {
constructor(props){
  super();
  this.state={
    books:data
  };
}

  render() {
    return (
      <div className="App">
        {this.state.books.map((book)=> (
          <div>
            {book.title}
          </div>
        ))}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

function mapStateToProps(state){
  return {
    books: state.books
  }
}

function mapDispatchToProps (dispatch){
  return {
    loadBooks: (book) => {
      dispatch({type: "LOAD_BOOKS", payload: book})
    }
  }
}
