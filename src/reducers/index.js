import { combineReducers } from 'redux';

import WeatherReducer from './reducerWeather';

const rootReducer = combineReducers({
  // the Keys of the object is the part of the global state the the reducer is
  // able to update/change. Usualy each state belongs to particular componenet.
  weather: WeatherReducer
});

export default rootReducer;
