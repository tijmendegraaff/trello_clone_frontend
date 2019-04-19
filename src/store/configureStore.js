import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = () => null;
export default () => {
  const store = createStore(combineReducers({ reducer }), composeEnhancers(applyMiddleware(thunk)));

  return store;
};
