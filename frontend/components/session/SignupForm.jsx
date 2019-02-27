import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    this.props.signup(this.state)
  }

  render() {
    return (
      <div className='signup-form'>
        <h1>Welcome to AvailableFlatSurface!</h1>
        <form onSubmit={this.handleSubmit} className='flex-col-start'>
          <input
            type="text"
            placeholder="name *"
            value={this.state.name}
            onChange={this.handleInput('name')} />
          <input
            type="text"
            placeholder="email *"
            value={this.state.email}
            onChange={this.handleInput('email')} />
          <input
            type="password"
            placeholder="password *"
            value={this.state.password}
            onChange={this.handleInput('password')} />

          <input type="submit" onSubmit={this.handleSubmit} value="Create Account" />

          <div className="form-footer">
            <h2>Don't want to complete the form? (not implemented)</h2>
            <ul>
              <li>
                <img src="https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_64x64.png"
                  alt="facebook logo" />
                Continue with Facebook
              </li>
              <li>
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
    );
  }
}

export default SignupForm;
