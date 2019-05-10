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
    name:"",
    homeAddress:"",
    phoneNumber:"",
    email:"",
    password:""
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
      console.log(UPDATE_FIELD_AUTH,action.key,action.value);
      return { ...state, user: {...state.user,[action.key]: action.value}};
    case UPDATE_FIELD_AUTH_REGISTER:
      console.log(UPDATE_FIELD_AUTH_REGISTER,action.key,action.value);
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
