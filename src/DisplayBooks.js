import React from "react";

//A simple component to display a list of books
function DisplayBooks({books}){
  return books.map(book=>
    <div style={{margin: 30}}>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.publisher}</div>
    </div>
  );
}

export default DisplayBooks;