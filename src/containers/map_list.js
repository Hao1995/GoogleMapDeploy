import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col } from "react-bootstrap";
import GoogleMap from "../components/google_map";
import { fetchTaxis } from "../actions/index";

class MapList extends Component {
    constructor(props){
        super(props);
        
        this.props.fetchTaxis();
        this.test = this.test.bind(this);
    }
    test(){
        this.props.fetchTaxis();
        console.log("taxis ...");
        // console.log(this.props.taxis);
    }
    render() {
        return (
            <div>
                <button onClick={ this.test }>Taxis</button>
                <Col id="mapList" lg={12} md={12} xs={12}>
                    <GoogleMap data={this.props.taxis}/>
                </Col>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchTaxis }, dispatch);    
}

function mapStateToProps({ taxis }){
    return { taxis };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapList);