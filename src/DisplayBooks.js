import React from "react";

//A simple component to display a list of books
function DisplayBooks({books}){
  return books.map(book=>
    <div key={book.isbn} style={{margin: 30, display: 'flex-wrap'}}>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.isbn}</div>
      <img src={book.cover} alt={book.title} height={200}/>
    </div>
  );
}

export default DisplayBooks;