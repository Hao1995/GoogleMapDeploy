import { FETCH_TAXIS } from "../actions/index";

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_TAXIS:
            return action.payload;
    }
    return state;
}