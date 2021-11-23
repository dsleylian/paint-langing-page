import React from "react";
import logo from '../images/whiteLogo.svg';

function Header() {

//   const [ isNavOpen, setNavOpen ] = useState(false);

//   function toggleNav() {
//     setNavOpen(!isNavOpen);
// }

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


      {/* <Navbar dark sticky="top" expand="md" >
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar >
                        <Nav navbar className="mx-auto">
                            <NavItem className="navLogo">
                                <a href="/"><img className="nav-logo" src={logo} alt="Calabasas Speech logo" height="40"/></a>
                                
                            </NavItem>
                            <NavItem> 
                                <a href="/">Home</a> 
                            </NavItem>
                            <NavItem> 
                                <a href="#developer">About the Developer</a>
                            </NavItem>
                            <NavItem> 
                                <a href="https://darleypaint.vercel.app/">Paint Now</a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar> */}
    </div>
  )
}

export default Header;