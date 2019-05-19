import {
  ASYNC_START,
  ASYNC_END,
  LOGIN,
  LOGIN_DONE,
  LOGOUT,
  REGISTER,
  UPDATE_PASSWORD,
  CLEAN_REGISTER_FIELDS,
  MAKE_APPOINTMENT,
  SHOW_MODAL,
  CANCEL_APPOINTMENT,
  GET_PROFESSIONALS,
  GET_APPOINTMENTS
} from './constants/actionTypes';
import firebase from "./reducers/firebase";

function handleRegister(store,action,uid){
  firebase.database().ref('users/' + uid).set({
   name: action.user.name,
   email: action.user.email,
   homeAddress:action.user.homeAddress,
   phoneNumber:action.user.phoneNumber
 }).then(
   res => {
     store.dispatch({
       type: LOGIN,
       payload:firebase.auth().signInWithEmailAndPassword(action.user.email, action.user.password)
     });
     store.dispatch({ type: ASYNC_END});
     store.dispatch({ type: CLEAN_REGISTER_FIELDS});
     store.dispatch({ type: SHOW_MODAL, payload:{show:true,msg:"Success!"} });
   },
   error =>{
     store.dispatch({ type: ASYNC_END });
     store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:error.message} });
   }
 );
};

const promiseMiddleware = store => next => action => {
  console.log(action);
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });
    action.payload.then(
      res => {
        if (action.type === REGISTER){
          handleRegister(store,action,res.user.uid);
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
         if(action.type===GET_PROFESSIONALS || action.type===GET_APPOINTMENTS){
           console.log(action.type,res.val());
           const getValues = res.val();
           const values = [];
           for (var key in values){
             values.push(values[key]);
           }
           if(action.type===GET_PROFESSIONALS){
             store.dispatch({ type:GET_PROFESSIONALS, doctors:values});
           }else{
             store.dispatch({ type:GET_APPOINTMENTS, appointments:values});
           }
         }else{
           store.dispatch(action);
         }
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
