import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'material-components-web/dist/material-components-web.css';
import './index.css';

import topics from './data/topics.json';
import books from './data/books.json';

import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App topics={topics} books={books} />
  </BrowserRouter>,
  document.getElementById('root'));
