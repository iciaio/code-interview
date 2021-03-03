import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassApp from './ClassApp';
import FunctionalApp from './FunctionalApp';
import {Provider} from 'react-redux';
import store from './store';

//TODO: if you are more comfortable with functional components and hooks,
// you can replace the ClassApp component with FunctionalApp

ReactDOM.render(
  <Provider store={store}>
    <ClassApp />
  </Provider>, 
  document.getElementById('root')
);
