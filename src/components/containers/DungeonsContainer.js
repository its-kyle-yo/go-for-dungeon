import React from "react";
import HeroSelector from "../HeroSelector";
import DungeonList from "../DungeonList";

class DungeonsContainer extends React.Component {
  render() {
    return (
      <div className="dungeons">
        <HeroSelector />
        <DungeonList />
      </div>
    );
  }
}

export default DungeonsContainer;
