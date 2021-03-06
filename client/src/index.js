import React from 'react';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './redux/reducers'

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
const store = createStore(reducers, compose(applyMiddleware(thunk)))

root.render(
    <Provider store ={store}>
    <App />
    </Provider>
    //remove strictMode to prevent rendering page 2 times
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
