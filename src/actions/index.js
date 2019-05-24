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
  CHANGE_PROFILE_VIEW,
  GET_PROFESSIONALS,
  ADD_PROFESSIONAL,
  UPDATE_FIELD_PROFESSIONAL,
  DELETE_PROFESSIONAL,
  SEND_EMAIL
} from '../constants/actionTypes';
import firebase from "../reducers/firebase.js";
import axios from "axios";

const root = "http://127.0.0.1:5000/";
const headers = {
  "Content-Type":"application/json"
};

export function sgMail(appmt,email,subject){
  var data= {
    from_name:"admin@spm.com",
    to_email:email,
    to_name:email,
    subject:subject,
    appmt:appmt.fields
  }
  return {
    type: SEND_EMAIL,
    payload: fetch(root + "api/send", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
  }
};

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

export function onMakeAppointment(appmt,professional){
  var uid = firebase.auth().currentUser.uid;
  var newPostKey = firebase.database().ref().child('posts').push().key;
  var updates = {};
  updates['/appointments/' + newPostKey] = appmt;
  appmt["userEmail"] = firebase.auth().currentUser.email;
  appmt["professionalEmail"] = professional.email;
  updates['users/' + uid + '/appointments/' + newPostKey] = appmt;
  return {
    type: MAKE_APPOINTMENT,
    payload:firebase.database().ref().update(updates),
    key:newPostKey,
    appmt,
    professional
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

export function onCancelAppoitment(key,appmt,appmts){
  var updates = {};
  var uid = firebase.auth().currentUser.uid;
  updates['/appointments/' + key] = null;
  updates['users/' + uid + '/appointments/' + key] = null;
  return {
    type: CANCEL_APPOINTMENT,
    payload:firebase.database().ref().update(updates),
    key,
    email:appmt.professionalEmail,
    appmts
  };
}

export function onGetProfessionals(){
  return {
    type: GET_PROFESSIONALS,
    payload:firebase.database().ref('/professionals').once('value')
  };
}

export function onUpdateFieldProfessional(value, key){
  return {
    type: UPDATE_FIELD_PROFESSIONAL,
    key: key,
    value
  };
}

export function onAddProfessional(professional){
  console.log("onAddProfessional",professional);
  var newPostKey = firebase.database().ref().child('posts').push().key;
  var updates = {};
  updates['/professionals/' + newPostKey] = professional;
  return {
    type: ADD_PROFESSIONAL,
    payload:firebase.database().ref().update(updates),
    key:newPostKey,
    professional
  };
}

export function onDelProfessional(key){
  var updates = {};
  updates['/professionals/' + key] = null;
  return {
    type: DELETE_PROFESSIONAL,
    payload:firebase.database().ref().update(updates),
    key
  };
}
