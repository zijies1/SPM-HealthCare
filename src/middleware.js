import {
  ASYNC_START,
  ASYNC_END,
  LOGIN,
  LOGIN_DONE,
  LOGOUT,
  REGISTER,
  CLEAN_REGISTER_FIELDS,
  SHOW_MODAL
} from './constants/actionTypes';
import firebase from "./reducers/firebase";

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });
    action.payload.then(
      res => {
        if (action.type === REGISTER){
          firebase.database().ref('users/' + res.user.uid).set({
           name: action.user.name,
           email: action.user.email,
           homeAddress:action.user.homeAddress,
           phoneNumber:action.user.phoneNumber,
           appointments:[]
         }).then(
           res => {
             store.dispatch({
               type: LOGIN,
               payload:firebase.auth().signInWithEmailAndPassword(action.user.email, action.user.password)
             });
             store.dispatch({ type: ASYNC_END});
             store.dispatch({ type: CLEAN_REGISTER_FIELDS});
             store.dispatch({ type: SHOW_MODAL, payload:{show:true,msg:"Successfully Registered!"} });
           },
           error =>{
             store.dispatch({ type: ASYNC_END });
             store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:error.message} });
           }
         );
       }else if (action.type === LOGIN){
         firebase.database().ref('users/' + res.user.uid).once('value').then(
          snapshot => {
            store.dispatch({
              type: LOGIN,
              payload:snapshot.val()
            });
          },
          error =>{
            store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:error.message} });
          }
        );
      }else{
         console.log(action);
         action.payload = null;
         store.dispatch({ type: ASYNC_END});
         store.dispatch(action);
       }
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



export { promiseMiddleware }
