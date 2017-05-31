import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const app = (
    <div className="app">
      <h1 className="app__title">React basics</h1>
      <p className="app__article">Learning React basics</p>
      <p>{new Date().toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
    </div>
  );

  ReactDOM.render(app, document.getElementById('root'));
}

setInterval(App, 1000);
