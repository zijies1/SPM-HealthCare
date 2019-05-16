import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./components/App";
import { LOGIN,ASYNC_START,ASYNC_END,SHOW_MODAL } from "./constants/actionTypes.js";
import firebase from "./reducers/firebase";

// firebase.auth().signOut();
// This logic might be placed some better place

if(!store.getState().auth.loggedIn){
  firebase.auth().onAuthStateChanged((user)=> {
    console.log(user);
    if (user) {
      store.dispatch({ type: ASYNC_START});
      firebase.database().ref('/users/' + user.uid).once('value').then((snapshot)=> {
        console.log(snapshot.val());
        store.dispatch({ type: LOGIN, payload:snapshot.val()});
        store.dispatch({ type: ASYNC_END });
      }).catch(error =>{
        store.dispatch({ type: ASYNC_END });
        store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:error.message} });
      });
    } else {
      console.log("no user signed in ");
    }
  });
}

// render the main component
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
