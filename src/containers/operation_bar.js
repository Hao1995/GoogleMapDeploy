import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Button, MenuItem, SplitButton,  Col } from 'react-bootstrap';
import { map } from "../components/google_map";
import { fetchDestinations } from "../actions/index";

let directionsService, directionsDisplay;
let destinationsFlag = false;
let currentMarker;

class OperationBar extends Component {
    constructor(props){
        super(props);
        
        this.props.fetchDestinations();
        
        this.state = { 
            key: 0,
            name: "Loading...",
            startLoc: null
        };
        
        this.menuSelect = this.menuSelect.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.getCurrentLocation = this.getCurrentLocation.bind(this);
        this.dirRoute = this.dirRoute.bind(this);
    }
    
    componentDidUpdate(){
        //組件更新後執行
        if(destinationsFlag == false){
            this.menuSelect(this.state.key);
            
            directionsService = new google.maps.DirectionsService;
            directionsDisplay = new google.maps.DirectionsRenderer({map: map});
            this.setState({startLoc: map.center});
            
            destinationsFlag = true;
        }
    }
    
    getCurrentLocation(){
        //If brower supports HTML5 geoLocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition( (position) => { 
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const currentLoc = new google.maps.LatLng(lat, lng);
            const popupContent = '<div id="content"><h3 id="firstHeading" >Your location is found ...</h3></div>';
            
            //Information Window
            const infowindow = new google.maps.InfoWindow({
              content: popupContent
            });
            
            map.setCenter(currentLoc);
            this.setState({startLoc: map.center});
            console.log("Your location : " + currentLoc);
            
            currentMarker = new google.maps.Marker({
                map: map,
                zoom: 15,
                position: currentLoc
            });
            infowindow.open(map,currentMarker);
          });
        }
        else {
          alert('This Browser doesn\'t support HTML5 geolocation');
        }
    }
    
    menuSelect(index){
        console.log("menuSelect");
        if(this.props.destinations.length > 0){
            const destination = this.props.destinations[index];
            this.setState({
                key: index, 
                name: destination.name
            });
            console.log("The destination you choose : "+destination.name+" "+destination.lat+", "+destination.lng); 
        }
    }
    
    renderMenu(data){
        const name = data.name;
        const id = data.id;
        return(
            <MenuItem key={id} className="item" eventKey={id}>{name}</MenuItem>
        );
    }
    
    dirRoute(){
        const startLoc = this.state.startLoc;
        const endLocKey = this.state.key;
        const lat = this.props.destinations[endLocKey].lat;
        const lng = this.props.destinations[endLocKey].lng;
        
        const endLoc = new google.maps.LatLng(lat, lng);//Set endLoc to value specified by us 
        console.log("startLoc : " + startLoc + ", endLoc : " + endLoc);
        
        if(currentMarker != null){
            currentMarker.setMap(null);
            currentMarker = null;
        }
        
        // Retrieve the start and end locations and create a DirectionsRequest using WALKING directions.
        directionsService.route({
            origin: startLoc,
            destination: endLoc,
            travelMode: 'WALKING'
        }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
      
    render() {
        return(
            <div>
                <Col lg={12} md={12} xs={12}>
                    <Col lg={2} md={3} xs={12} className="row">
                        <Button bsStyle="primary" onClick={this.getCurrentLocation} >My Location</Button>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="row">
                        <SplitButton bsStyle="info" title={this.state.name} id={`split-button`} onSelect={this.menuSelect}>
                            {this.props.destinations.map(this.renderMenu)}
                        </SplitButton>
                    </Col>
                    <Col lg={2} md={4} xs={12} className="row">
                        <Button bsStyle="danger" onClick={this.dirRoute}>Route</Button>
                    </Col>
                </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(OperationBar);