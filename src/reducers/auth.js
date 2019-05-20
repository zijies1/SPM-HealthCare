import {
  UPDATE_FIELD_AUTH,
  UPDATE_FIELD_AUTH_REGISTER,
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  LOGIN,
  LOGOUT,
  REGISTER,
  CLEAN_REGISTER_FIELDS,
  LOGIN_PAGE_UNLOADED,
  ASYNC_START,
  ASYNC_END,
  SHOW_MODAL,
  LOGIN_DONE,
  MAKE_APPOINTMENT,
  CANCEL_APPOINTMENT
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
    password:"",
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
      return{ ...state,loggedIn:true,user:action.payload,email:action.payload.email};
    case REGISTER:
    case CLEAN_REGISTER_FIELDS:
      return{ ...state, registerUser:{
        name:"",
        homeAddress:"",
        phoneNumber:"",
        email:"",
        password:""
      }};
    case LOGOUT:
      return initialstate;
    case UPDATE_FIELD_AUTH:
      return { ...state, user: {...state.user,[action.key]: action.value}};
    case UPDATE_FIELD_AUTH_REGISTER:
      return { ...state, registerUser: {...state.registerUser,[action.key]: action.value}};
    case UPDATE_PROFILE:
        return { ...state, email:state.user.email};
    case ASYNC_START:
      return {...state,loading:true,error:""};
    case ASYNC_END:
      return {...state,loading:false};
    case SHOW_MODAL:
      return {...state,showModal:action.payload.show,error:action.payload.msg};
    case CANCEL_APPOINTMENT:
      return {...state,
              user:{...state.user,
                    appointments:{[action.key]:undefined,...state.user.appointments}
                    }
              };
    case MAKE_APPOINTMENT:
      // currently this is not working since refreshing page is activated
      console.log(MAKE_APPOINTMENT,action);
      return {...state,
              user:{...state.user,
                    appointments:{[action.key]:action.appointment,...state.user.appointments}
                    }
              };
    default:
      return state;
  }

  return state;
};
