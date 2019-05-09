import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGOUT,
  LOGIN_PAGE_UNLOADED,
  MAKE_APPOINTMENT
} from '../constants/actionTypes';

const initialstate = {
  loggedIn:false,
  user: {
    name:"",
    homeAddress:"",
    phoneNumber:"",
    email:"",
    password:"",
    appointments:[]
  }
};


export default (state =initialstate, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(state);
      localStorage.setItem('token', "token1");
      return{ ...state, loggedIn:true };
    case LOGOUT:
      console.log(state);
      localStorage.setItem('token', "");
      return{ ...state, loggedIn:false };
    case UPDATE_FIELD_AUTH:
      console.log(action.key,action.value);
      return { ...state, user: {...state.user,[action.key]: action.value}};
    case MAKE_APPOINTMENT:
      return state;
    default:
      return state;
  }

  return state;
};
