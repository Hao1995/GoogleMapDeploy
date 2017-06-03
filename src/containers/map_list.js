import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMap from "../components/google_map";
import { map } from "../components/google_map"

var currentLoc,marker;

class MapList extends Component {
    //Current location click event
    getCurrentLocation() {
        console.log("Execute getCurrentLocation");
        //If brower supports HTML5 geoLocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) { 
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            
            currentLoc = new google.maps.LatLng(lat, lng);
            
            //Remove previously added marker
            if (marker) {
              marker.setMap(null);
            }
    
            var popupContent = '<div id="content"><h3 id="firstHeading" >Your location is found ...</h3></div>'
    
            //Information Window
            var infowindow = new google.maps.InfoWindow({
              content: popupContent
            });
    
            map.setCenter(currentLoc);//Set the map to center of location
            console.log("CurrentLoc: " + currentLoc);
            // var currentLoc = new google.maps.LatLng(25.0477, 121.5170);
            
            marker = new google.maps.Marker({
                map: map,
                zoom: 15,
                position: currentLoc
            });
    
            infowindow.open(map,marker);
          });
        }
        else {
          alert('This Browser doesn\'t support HTML5 geolocation');
        }
    }
    test(){
        console.log("test");
    }
    
    render() {
        return (
            <div className="row">
                <div id="mapList" className="col-lg-12">
                    <button className="btn btn-default" onClick={this.getCurrentLocation}>Current Location</button>
                    <GoogleMap/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(MapList);