import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { requestRestaurant } from './actions/restaurantActions';
import { fetchRestaurant } from './utils/restaurantUtils';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: {
          id: window.currentUser.id
        }
      }
    };
  }

  let store = configureStore(preloadedState);

  window.getState = store.getState;
  window.store = store;
  // window.fetchRestaurant = fetchRestaurant
  // window.requestRestaurant = requestRestaurant;

  ReactDOM.render(
    <Root store={store} />,
    root
  )
})