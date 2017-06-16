import { combineReducers } from 'redux';
import DestinationsReducer from "./reducer_destinations";

const rootReducer = combineReducers({
  destinations: DestinationsReducer
});

export default rootReducer;
