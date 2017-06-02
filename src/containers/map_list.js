import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMap from "../components/google_map";

var currentLoc,marker,map;

class MapList extends Component {
    renderTest(cityData) {
        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;
        return (
            <GoogleMap lon={lon} lat={lat} />
        );
    }
    
    //Current location click event
    getCurrentLocation() {
        console.log("getCurrentLocation...");
        //If brower supports HTML5 geoLocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) { 
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            console.log("lat:"+lat+", lng:"+lng);
            // currentLoc = new google.maps.LatLng(lat, lng);
    
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
                <button className="btn btn-default" onClick={this.getCurrentLocation}>Current Location</button>
                <div id="mapList" className="col-lg-12">
                    {this.props.weather.map(this.renderTest)}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(MapList);