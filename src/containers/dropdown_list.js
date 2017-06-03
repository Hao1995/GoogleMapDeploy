import React, { Component } from "react";
import { Button, ButtonGroup, DropdownButton, MenuItem, SplitButton, ButtonToolbar, Col } from 'react-bootstrap';
import { map } from "../components/google_map";

var currentLoc,marker;

//Current location click event
function getCurrentLocation() {
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
    
    
class Dropdown extends Component {
    
    render() {
        return(
            <div>
                <Col lg={2} md={3} xs={5}>
                    <Button bsStyle="primary" onClick={getCurrentLocation}>My Location</Button>
                </Col>
                <Col lg={10} md={9} xs={7}>
                    <SplitButton bsStyle="info" title="Destination" id={`split-button-basic-3`}>
                      <MenuItem eventKey="1">台北火車站</MenuItem>
                      <MenuItem eventKey="2">淡水捷運站</MenuItem>
                      <MenuItem eventKey="3">中正紀念堂</MenuItem>
                    </SplitButton>
                </Col>
            </div>
        )
    }
}

export default Dropdown;