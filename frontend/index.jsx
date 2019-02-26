import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root')
  let store = configureStore

  ReactDOM.render(
    <h1>Working?</h1>,
    root
  )
})