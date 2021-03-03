import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const middleware = composeWithDevTools(applyMiddleware(thunk));
export default createStore(reducer, {}, middleware);