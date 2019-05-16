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
  SHOW_MODAL,
  LOGIN_DONE
} from '../constants/actionTypes';

const initialstate = {
  loading:false,
  error:"",
  showModal:false,
  loggedIn:false,
  user: {
    name:"",
    homeAddress:"",
    phoneNumber:"",
    email:"",
    password:"1",
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
    case LOGIN_DONE:
     console.log(action);

      // localStorage.setItem('token', "token1");
      return{ ...state,
              loggedIn:true,
               user:{
                 ...state.user,
                 email:action.payload.user.email,
                 userId:action.payload.user.userId
            }};
    case LOGOUT:
      // localStorage.setItem('token', "");
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
      return {...state,loading:false};
    case REGISTER:
      return state;
    case SHOW_MODAL:
      return {...state,showModal:action.payload.show,error:action.payload.msg};
    default:
      return state;
  }

  return state;
};
