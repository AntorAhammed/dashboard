import React, { useState } from 'react'
import logo from '../Image/logo.png'
import {VscThreeBars} from 'react-icons/vsc'

const Navbar = ({showSidebar}) => {
  
  return (
    <div className="container">
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <li><a href="#">Bet</a></li>
                <li><a href="#">Wallet</a></li>
                <li id="bar"><VscThreeBars onClick={showSidebar}/></li>
            </div>
        </div>
    </div>
  )
}

export default Navbar