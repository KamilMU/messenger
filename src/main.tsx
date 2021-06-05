import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';
import thunk from 'redux-thunk';

export const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);