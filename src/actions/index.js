// import axios from "axios";
import { destinations } from "../data/destinations";

export const FETCH_DESTINATIONS = "FETCH_DESTINATIONS";

export function fetchDestinations(){
    console.log("fetchDestinations ...");
    return{
        type: FETCH_DESTINATIONS,
        payload: destinations
    };
}