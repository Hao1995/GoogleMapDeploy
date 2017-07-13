import { destinations } from "../data/destinations";
import { taxis } from "../data/taxi_location";

export const FETCH_DESTINATIONS = "FETCH_DESTINATIONS";
export const FETCH_TAXIS = "FETCH_TAXIS";

export function fetchDestinations(){
    // console.log("fetchDestinations ...");
    return{
        type: FETCH_DESTINATIONS,
        payload: destinations
    };
}

export function fetchTaxis(){
    // console.log("fetchTaxis ...");
    return{
        type: FETCH_TAXIS,
        payload: taxis
    };
}