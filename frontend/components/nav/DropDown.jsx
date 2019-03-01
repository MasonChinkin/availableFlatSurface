import { Link } from 'react-router-dom';
import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.windowClick = this.windowClick.bind(this);
    this.state = { dropped: this.props.dropped };
  }

  componentDidMount() {
    window.addEventListener('click', this.windowClick);
  }

  windowClick(e) {
    // console.log(e)
    if (e.path[1].className !== 'drop-down') this.setState({ dropped: !this.state.dropped });

    // window.removeEventListener('click', this.windowClick);
  }

  render() {
    const dropDownClass = this.state.dropped ? "drop-down drop-down-active" : "drop-down";
    return (
      <ul className={dropDownClass} >
        <Link to={`/`}>My Profile</Link>
        <Link to={`/`}>Dining History</Link>
        <Link to={`/`}>Saved Restaurants</Link>
        <Link onClick={this.props.signout} to={`/`}>Sign out</Link>
      </ul>
    )
  }
}

export default DropDown;