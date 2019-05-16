import {
  UPDATE_FIELD_AUTH,
  UPDATE_FIELD_AUTH_REGISTER,
  LOGIN,
  LOGOUT,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  MAKE_APPOINTMENT,
  ASYNC_START,
  ASYNC_END,
  SHOW_MODAL
} from '../constants/actionTypes';

const initialstate = {
  loading:false,
  error:"",
  showModal:false,
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
    case ASYNC_START:
      return {...state,loading:true,error:""};
    case ASYNC_END:
      return {...state,loading:false,error:action.message};
    case REGISTER:
      return state;
    case SHOW_MODAL:
      return {...state,showModal:action.payload.show,error:action.payload.msg};
    default:
      return state;
  }

  return state;
};
