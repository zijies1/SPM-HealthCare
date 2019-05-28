import {
  ASYNC_START,
  ASYNC_END,
  LOGIN,
  LOGIN_DONE,
  LOGOUT,
  REGISTER,
  UPDATE_PASSWORD,
  CLEAN_REGISTER_FIELDS,
  SHOW_MODAL,
  CANCEL_APPOINTMENT,
  MAKE_APPOINTMENT,
  GET_PROFESSIONALS,
  DELETE_PROFESSIONAL,
  GET_APPOINTMENTS,
  SEND_EMAIL
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
  if (isPromise(action.payload)) {
    console.log(action);
    store.dispatch({ type: ASYNC_START, subtype: action.type });
    action.payload.then(
      res => {
        switch (action.type) {
          case REGISTER:
            handleRegister(store,action,res.user.uid);
            break;
          case LOGIN:
            firebase.database().ref('users/' + res.user.uid).once('value').then(
             snapshot => {
               store.dispatch({
                 type: LOGIN,
                 payload:snapshot.val()
               });
             },
             error =>{
               store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:error.message} });
             });
            store.dispatch({ type: ASYNC_END});
            break;
          case GET_PROFESSIONALS:
            const getValues = res.val();
            const values = [];
            for (var key in getValues){
              getValues[key]["key"] = key;
              values.push(getValues[key]);
            }
            store.dispatch({ type:GET_PROFESSIONALS, doctors:values.reverse()});
            store.dispatch({ type:LOGIN, payload:action.snapshot.val()});
            store.dispatch({ type:ASYNC_END});
            break;
          case GET_APPOINTMENTS:
            const appmts = res.val();
            store.dispatch({ type:GET_APPOINTMENTS, appointments:appmts});
            store.dispatch({ type: ASYNC_END});
            break;
          case MAKE_APPOINTMENT:
            store.dispatch({ type:MAKE_APPOINTMENT,appmt:action.appmt,key:action.key});
            break;
          case CANCEL_APPOINTMENT:
            store.dispatch({ type:CANCEL_APPOINTMENT,appmts:action.appmts,key:action.key});
            break;
          case SEND_EMAIL:
            store.dispatch({ type:ASYNC_END});
            store.dispatch({ type:SHOW_MODAL, payload:{show:true,msg:"Success!"} });
            break;
          case DELETE_PROFESSIONAL:
            store.dispatch({ type:ASYNC_END});
            window.location.reload();
            break;
          case UPDATE_PASSWORD:
            store.dispatch({ type:LOGOUT});
            break;
          case LOGOUT:
            store.dispatch({ type:ASYNC_END});
            window.location.reload();
            break;
          default:
            action.payload = null;
            store.dispatch({ type:ASYNC_END});
            store.dispatch(action);
            break;
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
