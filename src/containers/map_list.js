import React, { Component } from "react";
import { Col } from "react-bootstrap";
import GoogleMap from "../components/google_map";

class MapList extends Component {
    
    render() {
        return (
            <Col id="mapList" lg={12} md={12} xs={12}>
                <GoogleMap/>
            </Col>
        );
    }
}

export default MapList;