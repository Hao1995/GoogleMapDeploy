import axios from "axios";

const API_KEY ="84abbd9251a97863c67dd475c7b60022";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    //Contry code default is 'us' 
    // const url = `${ROOT_URL}&q=${city},us`;
    const url = `${ROOT_URL}&q=london,us`;
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}