import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./components/App";
import {
  LOGIN,
  ASYNC_START,
  ASYNC_END,
  SHOW_MODAL,
  GET_PROFESSIONALS,
  GET_APPOINTMENTS
 } from "./constants/actionTypes.js";
import firebase from "./reducers/firebase";

// render the main component
function render(){
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
  );
}

// This logic might be placed some better place
if(!store.getState().auth.loggedIn){
  store.dispatch({ type: ASYNC_START });
  render();
  firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
      firebase.database().ref('/users/' + user.uid).once('value').then((snapshot)=> {
        store.dispatch({
          type: GET_PROFESSIONALS,
          payload:firebase.database().ref('/professionals').once('value'),
          snapshot:snapshot
        });
        let userInfo = snapshot.val();
        if(userInfo.role === "admin"){
          store.dispatch({
            type: GET_APPOINTMENTS,
            payload:firebase.database().ref('/appointments').once('value')
          });
        }
      }).catch(error =>{
        store.dispatch({ type: ASYNC_END });
        store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:error.message} });
      });
    } else {
      store.dispatch({ type: ASYNC_END });
      console.log("no user signed in ");
    }
  });
}else{
  render();
}
