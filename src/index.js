import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { router } from "./router.js";
import { LOGIN } from "./constants/actionTypes.js";

const token = localStorage.getItem('token');
console.log(token);
if (token) {
    store.dispatch({ type: LOGIN });
}

// render the main component
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
