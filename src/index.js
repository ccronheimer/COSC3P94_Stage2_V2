import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import './index.css';
import App from './components/App';


ReactDOM.render(
  <BrowserRouter>
      <Header/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


