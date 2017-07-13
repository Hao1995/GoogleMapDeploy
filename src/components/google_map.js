import _ from "lodash"; 
import React, { Component } from "react";

const initialLat = 25.047739, initialLng = 121.517086; //Default Taipei Train Station Location
const iconSize = 40, iconScaled = 30, iconUrl = "https://image.flaticon.com/icons/png/128/433/433092.png";
export let map;

class GoogleMap extends Component {
    constructor(props){
        super(props);
        this.markerTaxi = this.markerTaxi.bind(this);
    }
    
    componentDidMount() {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: {
                //Taipei Train Station
                lat:initialLat,
                lng:initialLng
            }
        });
    }
    
    componentDidUpdate(){
        this.markerTaxi();
        map.addListener("zoom_changed", this.markerTaxi);
    }
    
    markerTaxi(){
        const taxiLocation = this.props.data;
        const icon = {
                    url: iconUrl,
                    // size: new google.maps.Size(iconSize, iconSize), // pixel
                    scaledSize: new google.maps.Size(iconScaled, iconScaled), // scale
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(iconSize/2, iconSize/2)
                };
        
        taxiLocation.map( (data) => {
            const currentLoc = new google.maps.LatLng(data.lat, data.lng);
            new google.maps.Marker({
                map: map,
                zoom: 15,
                position: currentLoc,
                icon: icon,
            });
        });
    }
    
    render() {
        return(
            <div style={{height:100+"%"}}>
                <div id="map"/>
            </div>
        ); 
    }
}

// export var map;

export default GoogleMap;