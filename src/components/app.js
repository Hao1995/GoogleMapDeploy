import React, { Component } from 'react';
import { Row } from "react-bootstrap";

import Map from "../containers/map";
import OperationBar from "../containers/operation_bar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Row className="show-grid">
          <OperationBar />
        </Row>
        <Row className="show-grid">
          <Map />
        </Row>
      </div>
      
    );
  }
}
