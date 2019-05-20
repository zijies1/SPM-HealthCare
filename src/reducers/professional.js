import {
  GET_PROFESSIONALS,
  ADD_PROFESSIONAL,
  UPDATE_FIELD_PROFESSIONAL
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
      return { ...state,professionals:[...state.professionals,action.professional]};
    default:
      return state;
  }

  return state;
};
