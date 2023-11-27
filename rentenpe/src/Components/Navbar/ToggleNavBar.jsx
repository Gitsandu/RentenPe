import React from "react";
import icon from "./img/icon.png";

function ToggleNavBar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img id="imagelogo" src={icon} alt="Description of the image" />
          </a>
          <a class="navbar-brand  text-white" href="#">
            Renten pe
          </a>
          <button
            class="navbar-toggler btn btn-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active  text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active  text-white" aria-current="page" href="#">
                  Tenant
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active  text-white" aria-current="page" href="#">
                  Landlord
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active  text-white" aria-current="page" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active  text-white" aria-current="page" href="#">
                  Investor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active  text-white" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
              <button type="button" class="btn btn-warning">Insta Profile Check</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ToggleNavBar;
