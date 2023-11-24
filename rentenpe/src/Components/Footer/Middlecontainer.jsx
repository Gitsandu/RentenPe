import React from "react";
import "./Footer.css";
import facebook from "./Img/facebook.png";
import twitter from "./Img/twitter.png";
import instagram from "./Img/instagram.png";
import linkdn from "./Img/linkdn.png";

function MiddleContainer() {
  return (
    <div className="middleCont">
      <div className="leftCont">
        <div className="start">
          <p id="address">Address</p>
          <p>
            2972 Westheimer Rd. Santa Ana,
            <br />
            Illinois 85486
          </p>
        </div>
        <div className="end">
          <p>© 2023 — Copyright</p>
        </div>
      </div>
      <div className="MiddleLeft">
        <div>
          <p className="info">Info</p>
          <p>For patients</p>
          <p>Services</p>
          <p>Experts</p>
          <p>Illnesses</p>
          <p>About clinic</p>
          <p>Articles</p>
          <p>Feedback</p>
          <p>Vacancies</p>
          <p>Contacts</p>
        </div>
        <br></br>
        <div className="end">
          <p>Certificate</p>
        </div>
      </div>
      <div className="MiddleRight">
        <p className="contact">Contact us</p>
        <p>+1 891 989-11-91</p>
        <p>help@logoipsum.com</p>
      </div>
      <div className="RightSide">
        <img id="imageSocial"src={facebook} alt="facebook" />
        <img id="imageSocial" src={twitter} alt="twitter" />
        <img id="imageSocial" src={instagram} alt="instagram" />
        <img id="imageSocial" src={linkdn} alt="linkdn" />
      </div>
    </div>
  );
}

export default MiddleContainer;
