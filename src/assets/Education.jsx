import React from "react";
import '../App.css';

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-wrapper">
        {/* Left Section */}
        <div className="education-left">
          <div className="education-institution">
            <h3>BSc in Electronics and Telecommunication Engineering(Mar 2013- Dec 2017)</h3>
            <p>Rajshahi University of Engineering & Technology (RUET), Bangladesh.</p>
            <p>CGPA: 3.27 out of 4.00</p>
          </div>
          <div className="education-institution">
            <h3>MEng in Information Systems Security(Jan 2020- Sep 2023)</h3>
            <p>Bangladesh University of Professionals (BUP), Bangladesh.</p>
            <p>CGPA: 3.71 out of 4.00</p>
          </div>
          <div className="education-institution">
            <h3>Software Development Program(Mar 2024- Present)</h3>
            <p>Keyin College, St. John’s, NL, Canada</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Education;
