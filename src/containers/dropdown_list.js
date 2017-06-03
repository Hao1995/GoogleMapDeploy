import React, { Component } from "react";
import { Button, ButtonGroup, DropdownButton, MenuItem, SplitButton, ButtonToolbar, Col } from 'react-bootstrap';
import { map } from "../components/google_map";

var currentLoc,marker;

const endLoc = [
    {
        name:"台北火車站",
        lat:25.048002, 
        lng:121.517054
    },
    {
        name:"淡水捷運站",
        lat:25.167964,  
        lng:121.445677
    },
    {
        name:"中正紀念堂",
        lat:25.036454, 
        lng:121.518663
    }
]

//Current location click event
function getCurrentLocation() {
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
        console.log("Your location : " + currentLoc);
        
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
    constructor(props){
        super(props);
        const index = 0;
        this.state = { 
            key: index,
            name: endLoc[index].name 
        };
        
        this.dropSelect = this.dropSelect.bind(this);
    }
    
    dropSelect(index){
        const place = endLoc[index];
        
        this.setState({
            key: index, 
            name: place.name
        });
        
        console.log("The place you choose : "+place.name+" "+place.lat+", "+place.lng);
    }
    
    render() {
        return(
            <div>
                <Col lg={2} md={3} xs={5}>
                    <Button bsStyle="primary" onClick={getCurrentLocation}>My Location</Button>
                </Col>
                <Col lg={10} md={9} xs={7}>
                    <SplitButton bsStyle="info" title={this.state.name} id={`split-button`} onSelect={this.dropSelect}>
                      <MenuItem className="item" eventKey="0">{endLoc[0].name}</MenuItem>
                      <MenuItem className="item" eventKey="1">{endLoc[1].name}</MenuItem>
                      <MenuItem className="item" eventKey="2">{endLoc[2].name}</MenuItem>
                    </SplitButton>
                </Col>
                <Button bsStyle="danger" onClick={this.test}>Get Location</Button>
            </div>
        )
    }
}

export default Dropdown;