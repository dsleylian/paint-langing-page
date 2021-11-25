import React from "react";
import DL from '../images/DL-medium.jpg';

function Developer() {

  return (
    <div>
        <div id="developer" >
            <div className="developer-h2">
                <h2>About the Developer: Darya Leylian</h2>
            </div>
            <div className="developer-container">
                <div className="developer-content">
                    <p>I am a Fullstack Developer with a focus on Front End. I enjoy using HTML, CSS, and Javascript in combination with React and React Native. I enjoy puzzles and problem solving, and am always looking for new opportunities to learn. </p>
                </div>
                <img height="200" src={DL} alt="Darya Leylian" />
            </div>
        </div>
        <ul className="contact-button-ul">
            <li className="color-button" > 
                <a href="mailto:@daryaleylian@gmail.com">Contact Me</a>
            </li>
        </ul>
    </div>
  )
}

export default Developer;