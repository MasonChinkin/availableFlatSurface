import React from 'react';
import { withRouter } from 'react-router-dom';
import { AuthedRoute, NotAuthedRoute } from '../../utils/routesUtils';
import NavBarSignedInContainer from './NavBarSession/NavBarSignedInContainer';
import NavBarSignedOutContainer from './NavBarSession/NavBarSignOutContainer';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.dropDown = this.dropDown.bind(this);
    this.rootPage = this.rootPage.bind(this)
  }

  rootPage() { this.props.history.push('/') }

  dropDown() {
    this.props.flipWindowListener(!this.props.dropDown);
    event.stopPropagation(); // avoid double event on click
  }

  componentDidUpdate() {
    (this.props.dropDown) ?
      window.addEventListener('click', this.dropDown) :
      window.removeEventListener('click', this.dropDown);
  }

  render() {
    return (
      <nav id="top">
        <ul className="left-nav">
          <li onClick={this.rootPage} className="nav-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Venn0110.svg" alt="table symbol" />
            AvailableFlatSurface
          </li>
          <li className="nav-place">
            <i className="material-icons place">place</i>
            <h2>Bay Area</h2>
          </li>
        </ul>
        <AuthedRoute path={`/`} component={NavBarSignedInContainer} />
        <NotAuthedRoute path={`/`} component={NavBarSignedOutContainer} />
      </nav>)
  }
}

export default withRouter(NavBar);
