import React from "react";
import "./Header.css";
import mobile from './Image/mobile.png';
import googlePlay from './Image/google.png';
import appleStore from './Image/apple.png';

function HeaderBody(props) {
  return (
    <div className="HeadContainer">
      <div className="LeftHead">
        <p id="headerCont">
          Win Up to One Month <br></br>
          Free Rent
        </p>
        <div className="buttonCont">
          <div className="storeBtn">
            <img src={appleStore} id="downloadLogo" alt="Description of the image" />
            <div id="downloadCont">
              <p id="downloadtext">
                Download on the <br></br>
                <span id="fromDownload">Apple Store</span>
              </p>
            </div>
          </div>
          <div className="storeBtn">
            <img
              src={googlePlay}
              id="downloadLogo"
              alt="Description of the image"
            />
            <div id="downloadCont">
              <p id="downloadtext">
                Download on the <br></br>
                <span id="fromDownload">Google Play</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="RightHead">
        <img id="phone" src={mobile} alt="Description of the image" />
        <div className="backGrad"></div>
      </div>
    </div>
  );
}

export default HeaderBody;
