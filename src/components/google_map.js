import _ from "lodash"; 
import React, { Component } from "react";
import { taxiLocation } from "../data/taxi_location";

const iconSize = 40, iconScaled = 30;

var icon = {
    url: "https://image.flaticon.com/icons/png/128/433/433092.png", // url
    // size: new google.maps.Size(iconSize, iconSize), // pixel
    scaledSize: new google.maps.Size(iconScaled, iconScaled), // scale
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(iconSize/2, iconSize/2)
};

function markerTaxi(){
    for(var i = 0; i < taxiLocation.length; i++){
        var lat = taxiLocation[i].lat;
        var lng = taxiLocation[i].lng;
        var currentLoc = new google.maps.LatLng(lat, lng);
        new google.maps.Marker({
            map: map,
            zoom: 15,
            position: currentLoc,
            icon: icon,
        });
    }
}

class GoogleMap extends Component {
    componentDidMount() {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: {
                //Taipei Train Station
                lat:25.047739, 
                lng:121.517086
            }
        });
        markerTaxi();
        map.addListener("zoom_changed", function(){
            //set a time delay to avoid dirRoute has not yet compelted
            window.setTimeout(function() {
                console.log("Zoom changed ... ");
                markerTaxi();
            }, 100);
        });
    }
    
    render() {
        return(
            <div style={{height:100+"%"}}>
                <div id="map"/>
            </div>
        ) 
    }
}

export var map;

export default GoogleMap;