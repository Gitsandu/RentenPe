import React from 'react';
import './Header.css';
import logo from './Img/logo.png'

function NavBar() {
    return (
        <div className='Container'>
            <div className='left'>
            <img id='imagelogo' src={logo} alt="Description of the image" />
            <p id="logoFont">RENTEN PE</p>
            </div>
            <div className='middle'>
                <p id='eleMid'>Home</p>
                <p id='eleMid'>Tenant</p>
                <p id='eleMid'>Landlord</p>
                <p id='eleMid'>About us</p>
                <p id='eleMid'>Investor</p>
                <p id='eleMid'>Contact Us</p>
            </div>
            <div className='right'>
                <button id="btnRight">Insta Profile Check</button>
            </div>
        </div>
    );
}

export default NavBar;