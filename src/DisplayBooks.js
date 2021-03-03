import React from "react";

//A simple component to display a list of books
function DisplayBooks({books}){
  console.log(books);
  return books.map(book=>
    <div key={book.id} style={{margin: 30, display: 'flex-wrap'}}>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <img src={book.cover} alt={book.title} height={200}/>
    </div>
  );
}

export default DisplayBooks;