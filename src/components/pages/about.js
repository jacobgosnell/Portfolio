import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePicture from "../../../static/assets/images/bio/headshot2.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div 
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      <div className="about-content-wrapper">
        <div className="about-header">
            SUMMARY
        </div>
        <div className='about-text'>
          Hey there, I'm Jake! I am a self-taught, emerging software developer.  I wrote my first line of code in December of 2018, and have since fallen into the rabit hole that is the world of open source code.  As I am inspired and intrigued by the vast endlessness of code, I continue, learning new things every day - working on projects that fascinate me.  Please feel free to connect with me on Github and see what I'm up too!   
        </div>
            <div className='about-header'>
                SKILLS
            </div>
            <div className='about-text'>
                <ul>
                    <li>
                        HTML5, CSS3, Bootstrap, Emotion, SCSS
                    </li>
                    <li>JavaScript, Jquery, React, React-Bootstrap, Redux, Gatsby</li>
                    <li>
                      Npm, Yarn, Webpack, Git, Github
                    </li>
                    <li>Express, MySQL, VSCode</li>
                    <li>Sublime, Figma</li>
                    <li>Command line proficiency & UI/UX fundamentals</li>
                </ul>                    
            </div>
        <div className="about-links-wrapper">
            <div className="about-link">
                <div className="icon">
                    <a href="https://github.com/jacobgosnell" className="text" target="_blank">
                        GitHub
                    </a>
                </div>
                
            </div>
            <div className="about-link">
                <div className="icon">
                    <a href="https://docs.google.com/document/d/1yxy0EixJuqc7MbBtbmHXRXE9vR-gCTxZGj43x07JvRU/edit?usp=drive_web&ouid=110724760784723002468" className="text" target="_blank">
                      Resume
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
  );
}