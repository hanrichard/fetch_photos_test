import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './App';
// import photosReducer from './store/reducers/index';
import rootReducer from './store/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//   photos: photosReducer
// });

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
