import React from "react";
import Topcontainer from "./Topcontainer";
import MiddleContainer from "./Middlecontainer";
import BottomContainer from "./Bottomcontainer";

function Footer(props) {
  return (
    <div className="FootCont">
      <Topcontainer></Topcontainer>
      <MiddleContainer></MiddleContainer>
      <BottomContainer></BottomContainer>
    </div>
  );
}

export default Footer;
