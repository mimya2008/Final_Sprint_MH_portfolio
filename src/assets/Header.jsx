import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/" className="header-name">Mimya Hafiz</a>
      </div>
      <nav className="header-right">
        <a href="/about">About</a>
        <a href="/education">Education</a>
        <a href="/experience">Experience</a>
        <a href="/additional">Additional</a>
      </nav>
    </header>
  );
};

export default Header;

