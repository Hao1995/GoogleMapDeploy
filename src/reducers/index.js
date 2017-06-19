import { combineReducers } from 'redux';
import DestinationsReducer from "./reducer_destinations";
import TaxisReducer from "./reducer_taxis";

const rootReducer = combineReducers({
  destinations: DestinationsReducer,
  taxis: TaxisReducer
});

export default rootReducer;
