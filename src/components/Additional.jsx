import React from "react";
import '../App.css';


const Additional = () => {
  return (
    <div className="additional-container">
      <div className="additional-wrapper">
        {/* Left Section */}
        <div className="additional-left">
          <img
            src="./images/certification.jpg"
            alt="Additional Information"
            className="additional-image"
          />
        </div>

        {/* Right Section */}
        <div className="additional-right">
          {/* Courses and Certifications */}
          <div className="additional-certifications">
            <h3>Certification & Training</h3>
            <ul>
              <li>⮚Completion Certificate for AWS Academy Graduate- AWS Academy Cloud Foundations(2024)</li>
              <li>⮚ Micro Credential Certificate in Introduction to Generative Artificial Intelligence(2024)</li>
              <li>⮚	ISTQB® Certified Tester Foundation Level- Participant Certificate(2024)</li>
              <li>⮚	The Absolute Beginners Guide to Cyber Security Part 1, Part 2, Part 3 (Udemy)(2022)</li>
              <li>⮚	Workshop on Web Designing (IEEE RUET Branch)(2016)</li>
              <li>⮚	Course on Routing and Switching (CCNA)(2015–2016)</li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="additional-languages">
            <h3>Programming Languages</h3>
            <p>Python, HTML, CSS, JavaScript, Bash, C Programming, MATLAB</p>
          </div>
          <div className="additional-languages">
            <h3>Tools and frameworks</h3>
            <p>AWS-Cloud Foundations, React, Figma, Microsoft Office, HFSS, Arduino, Packet Tracer, CST Studio Suite, and PSpice</p>
          </div>
          <div className="additional-languages">
            <h3>Networking Skills</h3>
            <p>Microwave Operations on Ericsson and Huawei Systems, and ZTE Elastic Net UME</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;

