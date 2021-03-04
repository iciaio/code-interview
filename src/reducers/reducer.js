import {getBooks} from './selectors'

const reducer = (state , action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
       return {books: action.payload};
    case 'DELETE_BOOK':
      return {books: getBooks(state).filter(book => book.isbn !== action.payload )};
    default:
      return {books: []}
  }
}

export default reducer;