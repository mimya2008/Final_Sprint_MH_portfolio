import React from "react";
import '../App.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-left">
          <img
            src="./images/linkedinphoto.jpg" 
            alt="My Photo"
            className="about-image"
          />
        </div>
        <div className="about-right">
          <p className="about-text">
            "I am an enthusiastic and adaptable IT professional with a strong foundation in software development, cybersecurity, and networking. With a Master’s in Information Systems Security and hands-on experience in technical roles, I excel at delivering innovative solutions, optimizing workflows, and enhancing security features. My technical skills include Python, HTML, CSS, JavaScript, React, Figma, AWS Foundations, and expertise in networking fields. I bring a collaborative mindset, a passion for problem-solving, and a drive to contribute meaningfully to a forward-thinking organization."
          </p>
          <div className="about-contact">
            <p>For more information: <a href="mailto:mimya.hafiz@keyin.com">Email Me</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
