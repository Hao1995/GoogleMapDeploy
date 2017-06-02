import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMap from "../components/google_map";

var currentLoc,marker,map;

class MapList extends Component {
    // renderTest(cityData) {
    //     const name = cityData.city.name;
    //     const { lon, lat } = cityData.city.coord;
    //     console.log("renderTest inside")
    //     return (
    //         <GoogleMap lon={lon} lat={lat} />
    //     );
    // }
    
    constructor(props){
        super(props);
        
        this.state = { 
            lat: 30,
            lng: 30
        };
    }
    
    //Current location click event
    getCurrentLocation() {
        console.log("getCurrentLocation...");
        //If brower supports HTML5 geoLocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) { 
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            
            
            currentLoc = new google.maps.LatLng(lat, lng);
            console.log("currentLoc = " + currentLoc);
            // //Remove previously added marker
            // if (marker) {
            //   marker.setMap(null);
            // }
    
            // var popupContent = '<div id="content"><h1 id="firstHeading" class="heading">Your location is found..</h1></div>'
    
            // var infowindow = new google.maps.InfoWindow({
            //   content: popupContent
            // });
    
            // map.setCenter(currentLoc);//Set the map to center of location
    
            // marker = new google.maps.Marker({
            //     map: map,
            //     zoom: 14,
            //     position: currentLoc
            // });
    
            // infowindow.open(map,marker);
          });
            
        }
        else {
          alert('This Browser doesn\'t support HTML5 geolocation');
        }
    }
      
    render() {
        return (
            <div className="row">
                <div id="mapList" className="col-lg-12">
                    <button className="btn btn-default" onClick={this.getCurrentLocation}>Current Location</button>
                    <GoogleMap lon={this.state.lat} lat={this.state.lng} />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(MapList);