import {
  UPDATE_FIELD_AUTH,
  UPDATE_FIELD_AUTH_REGISTER,
  LOGIN,
  LOGOUT,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  MAKE_APPOINTMENT
} from '../constants/actionTypes';

const initialstate = {
  loggedIn:false,
  user: {
    name:"Jackson",
    homeAddress:"Melbourne Central,3000",
    phoneNumber:"0401092052",
    email:"123@gmail.com",
    password:"123",
    appointments:[]
  },
  registerUser:{
    name:"wd",
    homeAddress:"",
    phoneNumber:"",
    email:"",
    password:""
  }
};


export default (state =initialstate, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', "token1");
      return{ ...state, loggedIn:true };
    case LOGOUT:
      localStorage.setItem('token', "");
      return{ ...state, loggedIn:false };
    case UPDATE_FIELD_AUTH:
      return { ...state, user: {...state.user,[action.key]: action.value}};
    case UPDATE_FIELD_AUTH_REGISTER:
      return { ...state, registerUser: {...state.registerUser,[action.key]: action.value}};
    case MAKE_APPOINTMENT:
      return state;
    case REGISTER:
      return state;
    default:
      return state;
  }

  return state;
};
