import { Link } from 'react-router-dom';
import React from 'react';

const DropDown = ({ dropped, signout }) => {
  const dropDownClass = dropped ? "drop-down drop-down-active" : "drop-down";

  return (
    <ul className={dropDownClass}>
      <li><Link to={`/`}>My Profile</Link></li>
      <li><Link to={`/`}>Dining History</Link></li>
      <li><Link to={`/`}>Saved Restaurants</Link></li>
      <li><Link onClick={signout} to={`/`}>Sign out</Link></li>
    </ul>
  )
}

export default DropDown;