export const loadBooksAction = (books) => ({
  type: "LOAD_BOOKS",
  payload: books
})

export const deleteBookAction = (bookToDelete) => ({
  type: "DELETE_BOOK",
  payload: bookToDelete
})