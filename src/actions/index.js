import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGOUT,
  LOGIN_PAGE_UNLOADED
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
