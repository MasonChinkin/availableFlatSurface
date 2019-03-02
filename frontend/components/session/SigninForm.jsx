import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SigninForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.demoSignin = this.demoSignin.bind(this);
    this.setIntervalX = this.setIntervalX.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleModalClick() {
    // must check target because for some reason currentTarget is document, must investigate
    if (event.target.className === "modal-background") this.props.history.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearSessionErrors();
    this.props.signin(this.state);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  demoSignin(e) {
    let email = "captain.marvel@gmail.com".split('');
    let password = "password".split('');
    let speed = 70;

    // stop demo from triggering sign in
    e.preventDefault();

    this.setIntervalX(() => this.fillField("email", email), speed, email.length)
      .then(() => (this.setIntervalX(() => this.fillField("password", password), speed, password.length)))
      .then(() => this.handleSubmit(e));
  }

  setIntervalX(callback, delay, repetitions) {
    return new Promise(resolve => {
      var x = 0;
      var intervalID = window.setInterval(function () {

        callback();

        if (++x === repetitions) {
          window.clearInterval(intervalID);
          resolve();
        }
      }, delay);
    });
  }

  fillField(field, value) {
    this.setState({ [field]: this.state[field] + value.shift() });
  }

  render() {

    const errors = this.props.errors.map(err => {
      return (
        <li>{err}</li>
      )
    })

    return (
      <div className="modal-background" onClick={this.handleModalClick}>
        <div className='signin-splash-form'>
          <h1>Please sign in</h1>
          <ul className="form-errors">
            {errors}
          </ul>
          <form onSubmit={this.handleSubmit} className='flex-col-start'>
            <input
              type="text"
              placeholder="Email *"
              value={this.state.email}
              onChange={this.handleInput('email')} />
            <input
              type="password"
              placeholder="Password *"
              value={this.state.password}
              onChange={this.handleInput('password')} />

            <input className="submit-button" type="submit" className="submit-button" value="Sign In" />
            <input className="submit-button" type="submit" onClick={this.demoSignin} value=" Demo Account" />

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
              <h2>New to AvailableFlatSurface? <Link className="form-footer-link" to={`/signup`}>Create an account</Link></h2>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SigninForm;
