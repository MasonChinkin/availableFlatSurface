import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Footer = () => {
  const aboutMe = (
    <ul>About Me
      <li><Link to={`/`}>LinkedIn</Link></li>
      <li><Link to={`/`}>Github</Link></li>
      <li><Link to={`/`}>Personal Website</Link></li>
    </ul>
  )

  const availableFlatSurface = (
    <ul>availableFlatSurface
      <li><Link to={`/`}>about us</Link></li>
      <li><Link to={`/`}>blog</Link></li>
      <li><Link to={`/`}>careers</Link></li>
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
      <p>Copyright © 1989 AvailableFlatSurface, Inc. PO Box 555555, George Town, Cayman Islands - All rights reserved.</p>
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