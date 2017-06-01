import React, { Component } from "react";
import { connect } from "react-redux";
// import Chart from "../components/chart";
import GoogleMap from "../components/google_map";


class MapList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
            </tr>
        );
    }
    renderTest(cityData) {
        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;
        return (
            <div key={name}>
                {console.log("lon:"+lon+", lat:"+lat)}
                <GoogleMap lon={lon} lat={lat} />
            </div>
        );
    }
    render() {
        return (
            <div>
                <div className="col-lg-6">
                    <div>{this.props.weather.map(this.renderTest)}</div>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Temperature (k)</th>
                                <th>Pressure (hPa)</th>
                                <th>Humidity (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.weather.map(this.renderWeather)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(MapList);