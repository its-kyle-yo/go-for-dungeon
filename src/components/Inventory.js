import React from "react";
import Item from "./Item";

class Inventory extends React.Component {
  render() {
    return (
      <div className="items">
        <ul>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
        </ul>
      </div>
    );
  }
}

export default Inventory;
