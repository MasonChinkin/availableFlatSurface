import { Link } from 'react-router-dom';
import React from 'react';

class DropDown extends React.Component {

  render() {
    const dropDownClass = this.props.dropDown ? "drop-down drop-down-active" : "drop-down";
    return (
      <ul className={dropDownClass} >
        <Link to={`/`}>My Profile</Link>
        <Link to={`/`}>Dining History</Link>
        <Link to={`/`}>Saved Restaurants</Link>
        <a onClick={this.props.signout}>Sign out</a>
      </ul>
    )
  }
}

export default DropDown;