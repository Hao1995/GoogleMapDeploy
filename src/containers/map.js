import React, { Component } from "react";
import { connect } from "react-redux";

import GoogleMap from "../components/google_map";

export default class Map extends Component {
    renderMap(cityData){
        console.log(cityData);
        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;
        
        return (
            <div key={name}>
                <GoogleMap lon={lon} lat={lat} />
            </div>
        );
    }
    render(){
        return(
            <div>
                TEST
            </div>
        );
    }
}


// function mapStateToProps({ Googlemap }){
//     return { Googlemap };
// }

// export default connect(mapStateToProps)(Map);