import React from "react";
import HeaderBody from "./HeaderBody";
import ToggleNavBar from "../Navbar/ToggleNavBar";

function Header(props) {
  return (
    <div>

      <ToggleNavBar></ToggleNavBar>
      <HeaderBody></HeaderBody>
    </div>
  );
}

export default Header;
