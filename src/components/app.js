import React, { Component } from 'react';
import { Row } from "react-bootstrap";

import MapList from "../containers/map_list";
import Dropdown from "../containers/dropdown_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <Row className="show-grid">
          <Dropdown />
        </Row>
        <Row className="show-grid">
          <MapList />
        </Row>
      </div>
      
    );
  }
}
