import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root')
  let store = configureStore()

  ReactDOM.render(
    <Root store={store} />,
    root
  )
})