import {
  ASYNC_START,
  ASYNC_END,
  LOGIN,
  LOGIN_DONE,
  LOGOUT,
  REGISTER,
  SHOW_MODAL
} from './constants/actionTypes';
import firebase from "./reducers/firebase";

const promiseMiddleware = store => next => action => {
  if (action.type === REGISTER || action.type === LOGIN) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(()=>{
      console.log("action.payload",action.payload);
      firebase.auth().signInWithEmailAndPassword(action.payload.email, action.payload.password)
      .then(
        res => {
          console.log("res",res);
          store.dispatch({ type: ASYNC_END });
          store.dispatch({type:LOGIN_DONE,payload:res});
          setTimeout(10);
        },
        error => {
          console.log("middleware,error",error);
          store.dispatch({ type: ASYNC_END });
          store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:error.message} });
        }
      );
    })
    return;
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

const localStorageMiddleware = store => next => action => {
  if (action.type === REGISTER || action.type === LOGIN) {
    if (!action.error) {
      window.localStorage.setItem('jwt', action.payload.user.token);
      agent.setToken(action.payload.user.token);
    }
  } else if (action.type === LOGOUT) {
    window.localStorage.setItem('jwt', '');
    agent.setToken(null);
  }

  next(action);
};


export { promiseMiddleware, localStorageMiddleware }
