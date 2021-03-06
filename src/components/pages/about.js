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
          Hey there!
        </div>
        <div className='about-text'>
          I'm Jake, a self-taught software developer.  I wrote my first line of code in December of 2018, and have since fallen into the rabit hole that is the world of open source code.  As I am inspired and intrigued by the endless possibilities of code, I strive to continue learning new things every day.  Feel free to connect with me on Github and see what I'm up too!   
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
                    <a href="https://docs.google.com/document/d/18WvnpE8n7Yl2sfRJuueInXH0e5IvYN0t5lTy2jGjRDc/edit?usp=sharing" className="text" target="_blank">
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