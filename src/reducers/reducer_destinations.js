import { FETCH_DESTINATIONS } from "../actions/index";

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_DESTINATIONS:
            // return [action.payload.data, ...state];
            return action.payload;
    }
    return state;
}