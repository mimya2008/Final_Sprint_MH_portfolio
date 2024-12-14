import React from "react";
import '../App.css';


const Experience = () => {
  const experiences = [
    {
      post: "Medical Document Specialist",
      company: "SiftMed, St. John’s, Canada",
        details: [
          "Efficiently organize and label critical AI-processed digital documents to help legal teams and medical experts quickly and    accurately find key hidden facts in medical data.",
          "Offering constructive feedback and promptly identifying any issues related to data quality to ensure data accuracy.",
          "Collaboration with team members to optimize document workflows for enhanced productivity.",
        ],
      duration: "May 2024- Present",
    },
    {
      post: "Cybersecurity Coordinator (Intern)",
      company: "Capelin Creations, St. John’s, Canada",
      details: "Successfully enhanced the security features of client websites, ensuring smooth business operations. Conducted potential risks & vulnerability testing of websites and collaborated with team members to implement cybersecurity best practices, achieving optimal security.",
      duration: "Feb 2024- Mar 2024",
    },
    {
      post: "Program Participant",
      company: "YWCA, St. John’s, Canada",
      details: "Completed a comprehensive 7-week employability training course successfully, including intensive skills development, strong teamwork, and collaboration skills by actively participating in group discussions.	Successfully completed training in various areas, including First Aid, Mental Health First Aid, and Driver for Hire, showcasing a commitment to continuous learning and skill development.",
      duration: "Nov 2023- Mar 2024",
    },
    {
      post: "Project Coordinator (Microwave Operations)",
      company: "Robi Axiata Limited, Dhaka, Bangladesh",
      details: "Successfully upgraded the cellular network by FE Shifting, GE shifting & NodeB Cable Shifting ensuring a better customer experience. Verified network traffic and established new links, enhancing operational efficiency and improving network uptime by 20%.",
      duration: "May 2023- Sep 2023",
    },
    {
      post: "Manpower Hosting- Wireless Network Optimization Engineer",
      company: "ZTE Corporation, Dhaka, Bangladesh   ",
      details: "Performed network change operation with 3G Scripting achieving best customer feedback using minimal resources. Conducted Cell Optimization to improve the worst cell KPIs resulting in spectacular performance for the existing cellular network.",
      duration: "Jan 2023- May 2023",
    },
    {
      post: "Wireless Network Optimization Engineer",
      company: "ZTE Corporation, Dhaka, Bangladesh    ",
      details: "KPI Monitoring and Report Generation for GSM, UMTS, and LTE in ZTE Elastic Net UME for the upgraded cellular network condition, preventing unusual occurrences and ensuring stable connectivity.",
      duration: "Nov 2021- June 2022",
    },
  ];

  return (
    <div className="experience-container">
      <div className="experience-wrapper">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-post">{exp.post}</h3>
            <h4 className="experience-company">{exp.company}, ({exp.duration})</h4>
            <p className="experience-details">{exp.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

