import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addUser} from './actions';
import chat from './reducers';
import handleNewMessage from './sagas';
import setupSocket from './sockets';
import username from './utils/name';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(chat, applyMiddleware(sagaMiddleware));
const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket,username});
//store.dispatch(addUser('Subha'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <App />
 </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
