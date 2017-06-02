import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMap from "../components/google_map";


class MapList extends Component {
    renderTest(cityData) {
        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;
        return (
            <GoogleMap lon={lon} lat={lat} />
        );
    }
    render() {
        return (
            <div className="row">
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