import {
  UPDATE_FIELD_AUTH,
  UPDATE_FIELD_AUTH_REGISTER,
  LOGIN,
  LOGOUT,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  MAKE_APPOINTMENT
} from '../constants/actionTypes';
import firebase from "../reducers/firebase.js";

export function onSubmit(router) {
  router.push('/');
  return {
    type: LOGIN,
  };
}

export function onRegister(user) {
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(authUser => {
       console.log(authUser);
      })
      .catch(error => {
        console.log(error);
      });
  return {
    type: REGISTER,
    payload:user
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function onUpdateField(value, key){
  return {
    type: UPDATE_FIELD_AUTH,
    key: key,
    value
  };
}

export function onUpdateFieldResgiter(value, key){
  return {
    type: UPDATE_FIELD_AUTH_REGISTER,
    key: key,
    value
  };
}

export function onMakingAppointment(value){
  return {
    type: UPDATE_FIELD_AUTH,
    value
  };
}

export function onChangeEmail( value){
  return {
    type: UPDATE_FIELD_AUTH,
    key: 'email',
    value
  };
}

export function onChangePassword( value){
  return {
    type: UPDATE_FIELD_AUTH,
    key: 'password',
    value
  };
}
