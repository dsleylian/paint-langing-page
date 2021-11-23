import React from "react";
import logo from '../images/whiteLogo.svg';

function Header() {

  return(
    <div>
      <div className="navbar">
        <a href="/"><img alt="logo" id="logo"src={logo}></img></a>
        <ul >
          <li>
              <a href="/">Home</a>
          </li>
          <li>
              <a href="#developer">About the Developer</a>
          </li>
          <li className="button" > 
              <a href="https://darleypaint.vercel.app/">Paint Now</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;