import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Footer = () => {
  const aboutMe = (
    <ul className="about-me">About Me
      <li><a href="https://www.linkedin.com/in/mason-chinkin/" target="_blank"><i className="fab fa-linkedin" />LinkedIn</a></li>
      <li><a href="https://github.com/MasonChinkin" target="_blank"><i className="fab fa-github" /> Github</a></li>
      <li><a href="https://masonchinkin.github.io/" target="_blank"><i className="fas fa-chart-bar" />d3.js data visualization</a></li>
    </ul>
  )

  const availableFlatSurface = (
    <ul>AvailableFlatSurface
      <li><Link to={`/`}>About us</Link></li>
      <li><Link to={`/`}>Blog</Link></li>
      <li><Link to={`/`}>Careers</Link></li>
      <li><Link to={`/`}>Press</Link></li>
    </ul>
  )

  const more = (
    <ul>More
      <li><Link to={`/`}>Contact us</Link></li>
    </ul>
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
        {availableFlatSurface}
        {more}
      </div>
      {legal}
    </footer>
  )
}

export default withRouter(Footer)