import React from 'react';
import ReactDOM from 'react-dom'; 
// Dom é a árvore de html web. ReactDom faz a interação 
// do React com a árvore. Para mobile -> React Native
// Para Realidade virtual -> React VR
// Para Tv -> React Tv
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);