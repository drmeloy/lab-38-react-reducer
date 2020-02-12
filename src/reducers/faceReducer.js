import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP } from '../actions/faceActions';


export default function reducer(state, action){
  switch(action.type){
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };
    case TAKE_NAP:
      return { ...state, naps: state.naps + 1 };
    default:
      return state;
  }
  
}