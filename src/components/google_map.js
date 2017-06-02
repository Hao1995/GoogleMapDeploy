import React, { Component } from "react";

var map;

class GoogleMap extends Component {
    componentDidMount() {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
        new google.maps.Marker({
            position:{
                lat: this.props.lat,
                lng: this.props.lon
            },
            map: map,
            title: "location"
        })
    }
    
    render() {
        return <div id="map"/>;
    }
}

export var map = map;

export default GoogleMap;