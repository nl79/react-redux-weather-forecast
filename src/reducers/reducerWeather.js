
import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  console.log('action', action);
  switch(action.type) {
    case FETCH_WEATHER:
      // Return a new array.
      // Never mutate the state. 
      return [ action.payload.data, ...state ];
      break;
  }
  return state;
}
