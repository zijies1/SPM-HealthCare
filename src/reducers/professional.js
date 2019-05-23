import {
  GET_PROFESSIONALS,
  ADD_PROFESSIONAL,
  UPDATE_FIELD_PROFESSIONAL,
  DELETE_PROFESSIONAL,
  SHOW_MODAL
} from '../constants/actionTypes';

const types = ["podiatrist", "naturopath", "chiropractor"];
const initialstate = {
  professionals:[],
  newProfessional:{
    name:"",
    type:types[0],
    email:"",
    charge:""
  },
  showModalProfessional:false,
  types:types
};


export default (state =initialstate, action) => {
  switch (action.type) {
    case UPDATE_FIELD_PROFESSIONAL:
      return { ...state,newProfessional: {...state.newProfessional,[action.key]: action.value}};
      // ADMIN ONLY
    case GET_PROFESSIONALS:
      return { ...state,professionals:action.doctors};
      // ADMIN ONLY
    case ADD_PROFESSIONAL:
      // currently this is not working since refreshing page is activated
      return { ...state,professionals:[...state.professionals,action.professional]};
    case DELETE_PROFESSIONAL:
    case SHOW_MODAL:
      return {...state,[action.payload.key]:action.payload.value};
    default:
      return state;
  }

  return state;
};
