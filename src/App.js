import React, { Component } from "react";
import DungeonsContainer from "./components/containers/DungeonsContainer";
import InventoryContainer from "./components/containers/InventoryContainer";
import WorldMapContainer from "./components/containers/WorldMapContainer";
import StoreContainer from "./components/containers/StoreContainer";
import MenuBar from "./components/MenuBar";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <div className="game">
          <DungeonsContainer />
          <InventoryContainer />
          <WorldMapContainer />
          <StoreContainer />
        </div>
      </div>
    );
  }
}

export default App;
