import React from "react";
import BigLogo from '../images/Darley_brush_logo.svg';
import sample_1 from '../images/Canvas_drawings1.jpg';
import sample_2 from '../images/Canvas_drawings2.jpg';
import sample_3 from '../images/Canvas_drawings3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';

function Project(){

  return(
    <div id="home" className="project-container">
      <div className="big-logo">
        <img height="400px" src={BigLogo} alt="Darley large logo" />
      </div>
      <div className="project-content">
        <h2>How to Use</h2>
        <p>Darley Paint is an app based on the classic Microsoft Paint. You can pick a brush thickness, transparency, and color, and paint what you'd like on the canvas. You have 3 eraser thicknesses to choose from if you need to fix something, as well as a reset button to start with a fresh canvas. </p>
        <ul className="color-button-ul">
                <li className="color-button" > 
                    <a href="https://darleypaint.vercel.app/">Paint Now</a>
                </li>
            </ul>
        <h2>Development tools</h2>
        <ul className="icons-ul">
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faReact} size="3x"/>    
                    <p>React</p>
                </li>
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faJs} size="3x"/>  
                    <p>Javascript</p>
                </li>
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <p>HTML</p>
                </li>
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faCss3} size="3x"/>
                    <p>CSS</p>
                </li>
            </ul>
        <h2>Examples</h2>
      </div>
      <div className="project-samples">
          <img className="sample" height="200px" src={sample_1} alt="sample" />    
          <img className="sample" height="200px" src={sample_2} alt="sample" />    
          <img className="sample" height="200px" src={sample_3} alt="sample" />    
      </div>
    </div>
  )
}

export default Project;