import React from "react";
import BigLogo from '../images/BigLogoBackground.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return(
    <div id="footer">
        <div className="footer-container">
            <img className="footer-img" height="200px" src={BigLogo} alt="Darley large logo" />
            <ul className="footer-button-ul">
                <li className="button footer-button" > 
                    <a href="https://darleypaint.vercel.app/">Paint Now</a>
                </li>
            </ul>
            <ul className="footer-icons-ul">
                <li> 
                    <a target="_blank" href="https://github.com/dsleylian/paint" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} size="3x"/>  </a>
                </li>
                <li> 
                    <a target="_blank" href="https://www.linkedin.com/in/darya-leylian-a1a62057/" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} size="3x"/>  </a>
                </li>
                <li> 
                    <a target="_blank" href="https://www.instagram.com/darya.puzzledorffer/" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} size="3x"/>  </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;