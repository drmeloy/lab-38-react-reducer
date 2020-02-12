import { DRINK_COFFEE } from '../actions/faceActions';


export default function reducer(state, action){
  switch(action.type){
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    default:
      return state;
  }
  
}
