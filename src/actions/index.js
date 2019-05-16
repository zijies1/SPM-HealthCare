import {
  UPDATE_FIELD_AUTH,
  UPDATE_FIELD_AUTH_REGISTER,
  LOGIN,
  LOGOUT,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  MAKE_APPOINTMENT,
  SHOW_MODAL
} from '../constants/actionTypes';
import firebase from "../reducers/firebase.js";

export function onSubmit(user) {
  return {
    type: LOGIN,
    payload:firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  };
}

export function onRegister(user) {
  return {
    type: REGISTER,
    payload:firebase.auth().createUserWithEmailAndPassword(user.email, user.password),
    user
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

export function onModal(value){
  return {
    type: SHOW_MODAL,
    payload:value
  };
}
