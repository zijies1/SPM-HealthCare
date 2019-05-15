import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./components/App";
import { LOGIN } from "./constants/actionTypes.js";


const token = localStorage.getItem('token');
// if (token) {
//     store.dispatch({ type: LOGIN });
// }

// render the main component
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
