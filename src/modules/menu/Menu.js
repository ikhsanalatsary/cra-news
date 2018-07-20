// Ini component untuk menampilkan navigasi antar halaman

import React from "react";
import { Menu } from "semantic-ui-react";

class Menus extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Item name="home" active />
        <Menu.Item name="about" />
      </Menu>
    );
  }
}

export default Menus;
