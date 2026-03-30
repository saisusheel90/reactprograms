import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
/*import React from 'react';
import { createRoot, createElement } from 'react-dom/client'*/
//const myElement = React.createElement('h1', {}, 'Hello World!');
createRoot(document.getElementById('root')).render(
  //myElement
  <StrictMode>
    <App />
  </StrictMode>,
)
/*import { createRoot } from 'react-dom/client'

const myElement = <h1>Hello World!</h1>;

createRoot(document.getElementById('root')).render(
  myElement
);*/
