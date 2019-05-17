import {
  UPDATE_FIELD_APPOINTMENT,
  MAKE_APPOINTMENT,
  CANCEL_APPOINTMENT
} from '../constants/actionTypes';


const types = ["podiatrist", "naturopath", "chiropractor"];
const doctors = [
  {
    type:"podiatrist",
    name:"Robert Koch",
    email:"546641464@qq.com",
    charge:"100"
  },
  {
    type:"naturopath",
    name:"Henry Gray",
    email:"546641464@qq.com",
    charge:"130"
  },
  {
    type:"chiropractor",
    name:"John Doe",
    email:"546641464@qq.com",
    charge:"80"
  },
  {
    type:"chiropractor",
    name:"Theodor Billroth",
    email:"546641464@qq.com",
    charge:"90"
  }
];
const times = ["9:00 to 10:00","10:00 to 11:00","11:00 to 12:00"];
const initialstate = {
  fileds:{
    type:types[0],
    name:doctors[0].name,
    charge:doctors[0].charge,
    time:times[0],
    message:""
  },
  times,
  types:types,
  doctors:doctors
};


export default (state =initialstate, action) => {
  switch (action.type) {
    case UPDATE_FIELD_APPOINTMENT:
      return { ...state,fileds: {...state.fileds,[action.key]: action.value}};
    case MAKE_APPOINTMENT:
      return state;
    case CANCEL_APPOINTMENT:
      return state
    default:
      return state;
  }

  return state;
};
