import React, { Component } from "react";
import { connect } from "react-redux";
// import GoogleMap from "../components/google_map";
const navigation = navigation;
console.log("Navigation : " + navigation);

class Location extends Component {
    renderTest(cityData) {
        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;
        return (
            <GoogleMap lon={lon} lat={lat} />
        );
    }
    success(position){
        const latitude = postion.coords.latitude;
        const longitude = postion.coords.longitude;
        
        return (
            <p>
                Latitude is {latitude}° 
                <br/>
                Longitude is {longitude}°
            </p>
        )
        
    }
    error(){
        return "Unable to retrieve your location";
    }
    testFun(){
        console.log("test");
        if(!navigation.geolocation){
            return(
                <p>Geolocation is not supported by your browser</p>
            )
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }
    render() {
        return (
            <div className="row">
                {console.log("Location Page")}
                <div id="geoLocation">
                    {this.testFun()}
                    {console.log("After testFun")}
                </div>
            </div>
        );
    }
}

// function mapStateToProps({ weather }){
//     return { weather };
// }

// export default connect(mapStateToProps)(Location);
export default Location;