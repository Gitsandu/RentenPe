import React from 'react';
import logo from './Img/logo.png'
import './Footer.css'

function TopContainer(props) {
    return (
        <div className="topCont">
            <div className="imgCont">
                <img id='Logo' src={logo} alt="Logo" />
                <p id='TopFont'>RENTEN PE</p>
            </div>
        </div>
    );
}

export default TopContainer;