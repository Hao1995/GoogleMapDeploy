import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "react-bootstrap";
import GoogleMap from "../components/google_map";
import { map } from "../components/google_map"

class MapList extends Component {
    
    render() {
        return (
            <Col id="mapList" lg={12} md={12} xs={12}>
                <GoogleMap/>
            </Col>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(MapList);