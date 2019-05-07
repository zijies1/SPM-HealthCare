import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGOUT,
  LOGIN_PAGE_UNLOADED,
  MAKE_APPOINTMENT
} from '../constants/actionTypes';


export function onSubmit(router) {
  router.push('/');
  return {
    type: LOGIN,
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
