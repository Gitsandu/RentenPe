import React, { useState } from "react";
import "./Body.css";

const Carousel = () => {
  return (
    <div className="curCont">
      <div className="container">
        <div id="carousel">
          <figure>
            <img src="http://lorempixel.com/186/116/nature/1" alt="" />
          </figure>
          <figure>
            <img src="http://lorempixel.com/186/116/nature/2" alt="" />
          </figure>
          <figure>
            <img src="http://lorempixel.com/186/116/nature/3" alt="" />
          </figure>
          <figure>
            <img src="http://lorempixel.com/186/116/nature/4" alt="" />
          </figure>
          <figure>
            <img src="http://lorempixel.com/186/116/nature/5" alt="" />
          </figure>
          <figure>
            <img src="http://lorempixel.com/186/116/nature/6" alt="" />
          </figure>
          <figure>
            <img src="http://lorempixel.com/186/116/nature/7" alt="" />
          </figure>
          <figure>
            <img src="http://lorempixel.com/186/116/nature/8" alt="" />
          </figure>
          <figure>
            <img src="http://lorempixel.com/186/116/people/9" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Carousel;