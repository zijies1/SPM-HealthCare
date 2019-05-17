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
  CANCEL_APPOINTMENT,
  SHOW_MODAL,
  UPDATE_FIELD_APPOINTMENT,
  CHANGE_PROFILE_VIEW
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
  var uid = firebase.auth().currentUser.uid;
  return {
    type: UPDATE_PROFILE,
    payload:firebase.database().ref('users/' + uid).set({
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

export function onMakeAppointment(appmt){
  var uid = firebase.auth().currentUser.uid;
  var newPostKey = firebase.database().ref().child('posts').push().key;
  var updates = {};
  updates['/appointments/' + newPostKey] = appmt;
  updates['users/' + uid + '/appointments/' + newPostKey] = appmt;
  return {
    type: MAKE_APPOINTMENT,
    payload:firebase.database().ref().update(updates),
    key:newPostKey,
    appmt
  };
}

export function onModal(value){
  return {
    type: SHOW_MODAL,
    payload:value
  };
}

export function onChangeProfileView(value){
  return {
    type: CHANGE_PROFILE_VIEW,
    payload:value
  };
}

export function onCancelAppoitment(key){
  var updates = {};
  var uid = firebase.auth().currentUser.uid;
  updates['/appointments/' + key] = null;
  updates['users/' + uid + '/appointments/' + key] = null;
  return {
    type: CANCEL_APPOINTMENT,
    payload:firebase.database().ref().update(updates),
    key
  };
}
