import React, { useState } from "react";
import "./Header.css";
import icon from "./Image/icon.png";
import menu from "./Image/menu.png";

function NavBar() {
  return (
    <div className="Container">
      <div className="left">
        <div className="logocont">
          <img id="imagelogo" src={icon} alt="Description of the image" />
          <p id="logoFont">RENTEN PE</p>
        </div>
      </div>

      <div className="middle">
        <p id="eleMid">Home</p>
        <p id="eleMid">Tenant</p>
        <p id="eleMid">Landlord</p>
        <p id="eleMid">About us</p>
        <p id="eleMid">Investor</p>
        <p id="eleMid">Contact Us</p>
      </div>
      <div className="right">
        <button id="btnRight">Insta Profile Check</button>
      </div>
    </div>
  );
}

export default NavBar;
