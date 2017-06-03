import React, { Component } from "react";

var map;

//js欄位: id, 經度(longitude), 緯度(latitude), drive_id, drive_name, License_plate_number
const taxi = [
    {
      id:1,
      lat:25.046769, 
      lng:121.52826,
      drive_id:1,
      drive_name:"Brant",
      License_plate_number:1},
      {
      id:2,
      lat:25.046339, 
      lng:121.529664,
      drive_id:2,
      drive_name:"Aaron",
      License_plate_number:2},
      {
      id:3,
      lat:25.0477,
    　lng: 121.5170,
      drive_id:3,
      drive_name:"Hann",
      License_plate_number:3
    }
]

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
            position: currentLoc
        }) 
    }
}

class GoogleMap extends Component {
    componentDidMount(taxi) {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: {
                //Taipei Train Station
                lat: 25.0477,
                lng: 121.5170
            }
        });
        markerTaxi();
    }
    
    render() {
        return(
            <div style={{height:100+"%"}}>
                <div id="map"/>
            </div>
        ) 
    }
}

export var map = map;

export default GoogleMap;