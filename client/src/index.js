import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index'
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


const store = createStore(reducer, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);




