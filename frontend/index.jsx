import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: {
          id: window.currentUser.id
        }
      },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    };
  }

  let store = configureStore(preloadedState);

  ReactDOM.render(
    <Root store={store} />,
    root
  )
})