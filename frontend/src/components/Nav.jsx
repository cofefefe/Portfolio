import React, { useState } from 'react';
import logo from '../assets/Logo_nav.PNG'

function Nav() {
    return(
        <nav className="nav container-fluid d-flex justify-content-between">
                <div className="nav__left d-flex">
                    <img className="nav__logo" src={logo} alt="logo de Mathieu Baugard"/>
                    <p className="nav__name">Mathieu<br/>Baugard</p>
                </div>
                <div className="nav__right d-flex">
                    <a href="/cv.png" download className="nav__button" >Télécharger CV</a>
                    <button className="nav__button">Déconnexion</button>
                </div>
        </nav>
    )
}

export default Nav;