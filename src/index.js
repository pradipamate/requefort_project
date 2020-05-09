import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
// for store
import mystore from './pages/store/store';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
// 

const store = mystore();
console.log('store',store);
const jsx=(
  <Provider store={store}>
      <Routes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// ReactDOM.render(
//   const jsx=(
//   <Provider store={store}>
//     <Routes />
//   </Provider>
//   );
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
