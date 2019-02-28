import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleModalClick() {
    if (event.target.className === "modal-background") this.props.history.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearSessionErrors();
    this.props.signup(this.state);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  render() {
    const errors = this.props.errors.map(err => {
      return (
        <li>{err}</li>
      )
    })

    return (
      <div className="modal-background" onClick={this.handleModalClick}>
        <div className='signup-form'>
          <h1>Welcome to AvailableFlatSurface!</h1>

          <ul className="form-error">
            {errors}
          </ul>
          <form onSubmit={this.handleSubmit} className='flex-col-start'>
            <input
              type="text"
              placeholder="First Name *"
              value={this.state.fname}
              onChange={this.handleInput('fname')} />
            <input
              type="text"
              placeholder="Last Name *"
              value={this.state.lname}
              onChange={this.handleInput('lname')} />
            <input
              type="email"
              placeholder="Enter email *"
              value={this.state.email}
              onChange={this.handleInput('email')} />
            <input
              id="password"
              type="password"
              placeholder="Enter password *"
              value={this.state.password}
              onChange={this.handleInput('password')} />

            <input type="submit" className="submit-button" onSubmit={this.handleSubmit} value="Create Account" />

            <div className="form-footer">
              <h2>Don't want to complete the form? (not implemented)</h2>
              <ul>
                <li className="facebook-button">
                  <img src="https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_64x64.png"
                    alt="facebook logo" />
                  Continue with Facebook
              </li>
                <li className="google-button">
                  <img src="https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/google-plus-icon_64x64.png"
                    alt="facebook logo" />
                  Continue with Google
              </li>
              </ul>
              <p>Selecting "Create Account" you are agreeing to the terms and conditions
              of the <Link className="form-footer-link" to={`user-agreement-privacy`}>AvailableFlatSurface User
               Agreement</Link> and <Link className="form-footer-link" to={`user-agreement-privacy`}>Privacy Policy</Link>.</p>
            </div>
          </form>
        </div>
      </div >
    );
  }
}

export default SignupForm;
