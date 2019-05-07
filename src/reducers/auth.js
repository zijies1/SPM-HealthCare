import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGOUT,
  LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';

const initialstate = {
  loggedIn:false,
  email:"",
  password:""
};


export default (state =initialstate, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(state);
      return{ ...state, loggedIn:true };
    case LOGOUT:
      console.log(state);
      return{ ...state, loggedIn:false };
    case UPDATE_FIELD_AUTH:
      console.log(action.key,action.value);
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
