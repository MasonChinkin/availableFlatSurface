import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { requestUser } from './actions/userActions';
import { fetchUser } from './utils/userUtils';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }

  let store = configureStore(preloadedState);

  window.getState = store.getState();
  window.store = store;
  window.requestUser = requestUser;

  ReactDOM.render(
    <Root store={store} />,
    root
  )
})