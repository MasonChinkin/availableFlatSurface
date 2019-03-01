import { Link } from 'react-router-dom';
import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    // this.windowClick = this.windowClick.bind(this);
  }

  // windowClick(e) {
  //   // console.log(e)
  //   if (e.path[1].className !== 'drop-down') this.setState({
  //     dropped: !this.props.dropped,
  //   });
  // }

  // componentDidMount() {
  //   console.log('adding event listener')
  //   window.addEventListener('click', this.props.dropDown);
  // }

  // componentWillUnmount() {
  //   console.log('remove event listener')
  //   // window.removeEventListener('click', this.props.dropDown);
  // }
  // flipWindowListener(bool) {
  //   if (bool) {
  //     window.addEventListener('click', this.props.dropDown);
  //   } else {
  //     window.removeEventListener('click', this.props.dropDown);
  //     // this.props.dropDown();
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.dropped !== this.props.dropped) {
  //     debugger
  //     this.flipWindowListener(this.props.dropped);
  //   }
  // }

  render() {
    // const dropDownClass = this.props.dropped ? "drop-down drop-down-active" : "drop-down";
    return (
      <ul className="drop-down drop-down-active" >
        <Link to={`/`}>My Profile</Link>
        <Link to={`/`}>Dining History</Link>
        <Link to={`/`}>Saved Restaurants</Link>
        <Link onClick={this.props.signout} to={`/`}>Sign out</Link>
      </ul>
    )
  }
}

export default DropDown;