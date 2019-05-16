import {
  UPDATE_FIELD_AUTH,
  UPDATE_FIELD_AUTH_REGISTER,
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  LOGIN,
  LOGOUT,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  MAKE_APPOINTMENT,
  SHOW_MODAL,
  UPDATE_FIELD_APPOINTMENT
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
    payload:firebase.auth().signOut()
  };
}

export function onUpdateField(value, key){
  return {
    type: UPDATE_FIELD_AUTH,
    key: key,
    value
  };
}
export function onUpdateFieldAppointment(value, key){
  return {
    type: UPDATE_FIELD_APPOINTMENT,
    key: key,
    value
  };
}

export function onUpdateProfile(user){
  return {
    type: UPDATE_PROFILE,
    payload:firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
       name: user.name,
       email: user.email,
       homeAddress:user.homeAddress,
       phoneNumber:user.phoneNumber,
     })
  };
}

export function onUpdatePassword(value){
  var user = firebase.auth().currentUser;
  return {
    type: UPDATE_PROFILE,
    payload: user.updatePassword(value)
  };
}

export function onUpdateFieldResgiter(value, key){
  return {
    type: UPDATE_FIELD_AUTH_REGISTER,
    key: key,
    value
  };
}

export function onMakeAppointment(value){
  return {
    type: MAKE_APPOINTMENT,
    value
  };
}

export function onModal(value){
  return {
    type: SHOW_MODAL,
    payload:value
  };
}
