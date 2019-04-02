import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Footer = () => {
  const aboutMe = (
    <>
      <h2>About Me</h2>
      <ul className="about-me">
        <li><a href="https://www.linkedin.com/in/mason-chinkin/" target="_blank"><i className="fab fa-linkedin" />LinkedIn</a></li>
        <li><a href="https://github.com/MasonChinkin" target="_blank"><i className="fab fa-github" /> Github</a></li>
        <li><a href="https://masonchinkin.github.io/" target="_blank"><i className="fas fa-chart-bar" />Portfolio</a></li>
      </ul>
    </>
  )

  const legal = (
    <div className="legal">
      <ul>
        <li>Privacy</li>
        <li>Terms of Use</li>
        <li>Cookies and Interest-Based Ads</li>
      </ul>
      <p>Copyright © 1990 AvailableFlatSurface, Inc. PO Box 555555, George Town, Cayman Islands - All rights reserved.</p>
    </div>
  )

  return (
    <footer>
      <div className="footer-flex">
        {aboutMe}
      </div>
      {legal}
    </footer>
  )
}

export default withRouter(Footer)