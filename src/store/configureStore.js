import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import currentUserReducer from './reducers/currentUserReducer';
import boardsReducer from './reducers/boardsReducer';
import boardReducer from './reducers/boardReducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      currentUser: currentUserReducer,
      boards: boardsReducer,
      board: boardReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
