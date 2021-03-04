# Welcome to Circadence's Front End Code Challenge!

## Instructions
You are given some starter code which loads and displays books from a json document.
Your tasks are as follows:

1. add functionality for a user input text field that accepts an isbn
2. add functionality for a button which removes the book from the Redux store
3. add validation so the delete button is disabled if the text field does not match the ISBN 13 format: `x-xxxx-xxxx-x` where x is a digit 1-9
4. add a unit test to ensure the text field validation works as expected 

Take a look at the TODO statements in code to get started.

##Files

You may use either the class or functional component as starter code:

```
/src/FunctionalApp.js       //a functional version of the main App component
/src/ClassApp.js            //a class version of the main App component
```

A simple component to display books:
```
src/DisplayBooks.js
```

The data:
```
src/data.json
```

Redux Reducer things:
```
src/reducers/actions.js
src/reducers/selectors.js
src/reducers/reducer.js
```