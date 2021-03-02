import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import data from './data.json';
import DisplayBooks from "./DisplayBooks";

class App extends Component {

  //TODO: load data from data.json into a Redux store with the LOAD_BOOKS action

  render() {
    return (
      <div className="App">
        <h1>
          Welcome to Circadence's Front End Interview!
          <br/>
          See README for instructions to get started!
        </h1>
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
