import {
  UPDATE_FIELD_AUTH,
  UPDATE_FIELD_AUTH_REGISTER,
  LOGIN,
  LOGOUT,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  MAKE_APPOINTMENT
} from '../constants/actionTypes';
import firebase from "../Firebase.js";

export function onSubmit(router) {
  router.push('/');
  return {
    type: LOGIN,
  };
}

export function onRegister(user) {
  console.log(user)
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
