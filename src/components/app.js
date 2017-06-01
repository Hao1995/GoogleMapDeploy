import React, { Component } from 'react';

import SearchBar from "../containers/search_bar";
import MapList from "../containers/map_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MapList />
      </div>
    );
  }
}
