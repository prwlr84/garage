import { SET_GARAGES } from '../actions'

export default function(state = null, action) {
  switch(action.type){
    case SET_GARAGES:
    return action.payload.garages.map(e => e.name);
    default:
      return state;
 }
}
