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
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });
    const currentView = store.getState().viewChangeCounter;
    const skipTracking = action.skipTracking;

    action.payload.then(
      res => {
        // const currentState = store.getState()
        // if (!skipTracking && currentState.viewChangeCounter !== currentView) {
        //   return
        // }
        console.log('RESULT', res);
        if (action.type === REGISTER){
          firebase.database().ref('users/' + res.user.uid).set({
           name: action.user.name,
           email: action.user.email,
           homeAddress:action.user.homeAddress,
           phoneNumber:action.user.phoneNumber,
           appointments:[]
         }).then(
           res => {
             store.dispatch({ type: ASYNC_END});
             store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:"Successfully Registered!"} });
           },
           error =>{
             store.dispatch({ type: ASYNC_END });
             store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:error.message} });

           }
         );
       }else{
         store.dispatch({ type: ASYNC_END, promise: action.payload });
       }
        store.dispatch({ type: LOGIN, payload: res });
        setTimeout(10);
      },
      error => {
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:error.message} });
      }
    );
    return
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

const localStorageMiddleware = store => next => action => {
  if (action.type === REGISTER || action.type === LOGIN) {
    if (!action.error) {
      window.localStorage.setItem('uid', action.payload.user.uid);

      // agent.setToken(action.payload.user.token);
    }
  } else if (action.type === LOGOUT) {
    window.localStorage.setItem('jwt', '');
    // agent.setToken(null);
  }

  next(action);
};


export { promiseMiddleware, localStorageMiddleware }
