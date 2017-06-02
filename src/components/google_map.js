import React, { Component } from "react";

var map;

class GoogleMap extends Component {
    componentDidMount() {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: {
                //Taipei Train Station
                lat: 25.0477,
                lng: 121.5170
            }
        });
    }
    render() {
        return <div id="map"/>;
    }
}

export var map = map;

export default GoogleMap;