import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//importing the bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing the necessary stuff from the redux and react-redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {ToDoHandler} from './Components/reducer';

//Creating the store
const store= createStore(ToDoHandler);

ReactDOM.render(
  <React.StrictMode>


       {/*Wrapping The App with the reducer parameters */}

    <Provider store={store}>
    <App />
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
