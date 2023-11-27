import React from "react";
import "./Rotate.css";
import samp from './img/samp.png';

function ImageCarousel(props) {
  return (
    <div className="cursorImage">
      <div className="containerCarousel">
        <div id="carousel">
          <figure>
            <img id="cursorimg" src={samp} alt="" />
          </figure>
          <figure>
            <img id="cursorimg" src={samp} alt="" />
          </figure>
          <figure>
            <img id="cursorimg" src={samp} alt="" />
          </figure>
          <figure>
            <img id="cursorimg" src={samp} alt="" />
          </figure>
          <figure>
            <img id="cursorimg" src={samp} alt="" />
          </figure>
          <figure>
            <img id="cursorimg" src={samp} alt="" />
          </figure>
          <figure>
            <img id="cursorimg" src={samp} alt="" />
          </figure>
          <figure>
            <img id="cursorimg" src={samp} alt="" />
          </figure>
          <figure>
            <img id="cursorimg" src={samp} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
