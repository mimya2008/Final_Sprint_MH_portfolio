import React from 'react';
import { FaGithub, FaLinkedin, FaLocationArrow, FaPhone } from 'react-icons/fa';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <a href="https://linkedin.com" aria-label="Location" target="_blank" rel="noopener noreferrer">
        <FaLocationArrow color='#90152D'/>
      </a>
      <a href="tel:+17096317579" aria-label="Phone" target="_blank" rel="/">
        <FaPhone color='#90152D'/>
      </a> */}

      <a href="mailto:mimya.hafiz@keyin.com" aria-label="Location" target="_blank" rel="noopener noreferrer">
        <MdOutlineMarkEmailUnread color='#000000'/>
      </a>

      <a href="https://www.linkedin.com/in/mimya-hafiz/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <FaLinkedin color='#000000'/>
      </a>
      <a href="https://github.com/mimya2008" target="_blank" rel="noopener noreferrer">
        <FaGithub color='#000000'/>
      </a>
    </footer>
  );
};


export default Footer;

