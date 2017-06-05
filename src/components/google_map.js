import _ from "lodash"; 
import React, { Component } from "react";

//js欄位: id, 經度(longitude), 緯度(latitude), drive_id, drive_name, License_plate_number
const taxi = [{
      id:1,
      lat:25.050631, 
      lng: 121.528555,
      drive_id:1,
      drive_name:"Brant",
      License_plate_number:1},
      {
      id:2,
      lat: 25.046339, 
      lng: 121.529664,
      drive_id:2,
      drive_name:"Aaron",
      License_plate_number:2},
      {
      id:3,
      lat: 25.044259, 
      lng: 121.532546,
      drive_id:3,
    　drive_name:"Hann",
    　License_plate_number:3},
      {
      id:4,
      lat: 25.040552,
    　lng: 121.537565,
      drive_id:4,
      drive_name:"Hann",
      License_plate_number:4},
      {
      id:5,
      lat: 25.040688, 
    　lng: 121.529754,
      drive_id:5,
      drive_name:"Hann",
      License_plate_number:5},
      {
      id:6,
      lat: 25.037062, 
    　lng: 121.520892,
      drive_id:6,
      drive_name:"Hann",
      License_plate_number:6},
      {
      id:7,
      lat: 25.045143, 
    　lng: 121.509424,
      drive_id:7,
      drive_name:"Hann",
      License_plate_number:7},
      {
      id:8,
      lat: 25.041241,
    　lng: 121.527310,
      drive_id:8,
      drive_name:"Hann",
      License_plate_number:8},
      {
      id:9,
      lat: 25.041017,
    　lng: 121.518373,
      drive_id:9,
      drive_name:"Hann",
      License_plate_number:9},
      {
      id:8,
      lat: 25.046636, 
    　lng: 121.540126,
      drive_id:8,
      drive_name:"Hann",
      License_plate_number:8
}];

const iconSize = 40, iconScaled = 30;

var icon = {
    url: "https://image.flaticon.com/icons/png/128/433/433092.png", // url
    // size: new google.maps.Size(iconSize, iconSize), // pixel
    scaledSize: new google.maps.Size(iconScaled, iconScaled), // scale
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(iconSize/2, iconSize/2)
};


function zoomChanged(){
    console.log("Zoom changed ... ");
    markerTaxi();
}


function markerTaxi(){
    console.log("Execute markerTaxi");
    for(var i = 0; i < taxi.length; i++){
        var lat = taxi[i].lat;
        var lng = taxi[i].lng;
        
        var currentLoc = new google.maps.LatLng(lat, lng);
        console.log("currentLoc : " + currentLoc);
        new google.maps.Marker({
            map: map,
            zoom: 15,
            position: currentLoc,
            icon: icon,
        });
    }
}

export function test(){
    console.log("test");
}

class GoogleMap extends Component {
    componentDidMount() {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: {
                //Taipei Train Station
                lat:25.048002, 
                lng:121.517054
            }
        });
        markerTaxi();
        map.addListener("zoom_changed", function(){
            //set a time delay to avoid dirRoute has not yet compelted
            window.setTimeout(function() {
                console.log("Zoom changed ... ");
                markerTaxi();
            }, 500);
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