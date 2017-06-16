import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Button, MenuItem, SplitButton,  Col } from 'react-bootstrap';
import { map, test } from "../components/google_map";
import { fetchDestinations } from "../actions/index";

var menuItem,initialIdx=0;
var destinationsFlag = false; 
var currentLoc, marker;
var endLocKey=0, nowLoc;
var directionsService, directionsDisplay, startLoc, endLoc, dirFlag = false;

//Current location click event
function getCurrentLocation() {
    //If brower supports HTML5 geoLocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) { 
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        currentLoc = new google.maps.LatLng(lat, lng);
        var popupContent = '<div id="content"><h3 id="firstHeading" >Your location is found ...</h3></div>'
        //Information Window
        var infowindow = new google.maps.InfoWindow({
          content: popupContent
        });
        map.setCenter(currentLoc);//Set the map to center of location
        console.log("Your location : " + currentLoc);
        nowLoc = map.center;//Set the "nowLoc" to center of map
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

function displayRoute(startLoc, endLoc, directionsDisplay, directionsService, map) {
    // Retrieve the start and end locations and create a DirectionsRequest using WALKING directions.
    directionsService.route({
      origin: startLoc,
      destination: endLoc,
      travelMode: 'WALKING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
}

function dirRoute(){
    console.log("dirRoute...");
    console.log(menuItem);
    
    // If it's first "direction", initial "directionsService" & "directionDisplay"
    if(!dirFlag){
        directionsService = new google.maps.DirectionsService;
        directionsDisplay = new google.maps.DirectionsRenderer({map: map});
        startLoc = nowLoc = map.center;
        dirFlag = true;
    }else{
        startLoc = nowLoc;
    }
    
    endLoc = new google.maps.LatLng(menuItem[endLocKey].lat, menuItem[endLocKey].lng);//Set endLoc to value specified by us 
    console.log("startLoc : " + startLoc + ", endLoc : " + endLoc);
    
    // Display the route between the initial start and end selections.
    displayRoute( startLoc, endLoc, 
        directionsDisplay, directionsService, map);
}

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.props.fetchDestinations();
        this.state = { 
            key: initialIdx,
            name: "Loading..."
        };
        
        this.menuSelect = this.menuSelect.bind(this);
        this.test = this.test.bind(this);
        this.test1 = this.test1.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }
    
    componentDidUpdate(){
        //組件更新後執行
        if(destinationsFlag == false){
            console.log("組件更新後 ...");
            const place = this.props.destinations[initialIdx];
            menuItem = this.props.destinations;
            this.setState({
                key:initialIdx,
                name: place.name
            });
            console.log("The place you choose : "+place.name+" "+place.lat+", "+place.lng);
            destinationsFlag = true;
        }
    }
    menuSelect(index){
        const place = this.props.destinations[index];
        this.setState({
            key: index, 
            name: place.name
        });
        endLocKey = index;
        console.log("The place you choose : "+place.name+" "+place.lat+", "+place.lng);
    }
    
    renderMenu(data){
        const name = data.name;
        const id = data.id;
        return(
            <MenuItem key={id} className="item" eventKey={id}>{name}</MenuItem>
        );
    }
    test(data){
    }
    test1(){
    }
    
    render() {
        return(
            <div>
                <Col lg={12} md={12} xs={12}>
                    <Col lg={2} md={3} xs={12} className="row">
                        <Button bsStyle="primary" onClick={getCurrentLocation}>My Location</Button>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="row">
                        <SplitButton bsStyle="info" title={this.state.name} id={`split-button`} onSelect={this.menuSelect}>
                            {this.props.destinations.map(this.renderMenu)}
                        </SplitButton>
                    </Col>
                    <Col lg={2} md={4} xs={12} className="row">
                        <Button bsStyle="danger" onClick={dirRoute}>Route</Button>
                    </Col>
                </Col>
                <button onClick={this.test1}>Test</button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchDestinations }, dispatch);
}
function mapStateToProps({ destinations }){
    return { destinations };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);