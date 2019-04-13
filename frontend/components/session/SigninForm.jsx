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
    if (event.target.className === "modal-background") this.props.history.goBack();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearSessionErrors();
    debugger
    this.props.signin(this.state)
      .then(() => {
        debugger
        this.props.history.goBack()
      });

    debugger
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  demoSignin(e) {
    let email = "captain.marvel@gmail.com".split('');
    let password = "password".split('');
    let speed = 60;

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

    let URL = this.props.history.location.pathname
    let signupURL = URL.split('signin').join('signup')

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
              autoComplete="off"
              value={this.state.email}
              onChange={this.handleInput('email')} />
            <input
              type="password"
              placeholder="Password *"
              autoComplete="off"
              value={this.state.password}
              onChange={this.handleInput('password')} />

            <input className="submit-button" type="submit" className="submit-button" value="Sign In" />
            <input className="submit-button" type="submit" onClick={this.demoSignin} value=" Demo Account" />

            <div className="form-footer">
              <h2>Don't want to complete the form? Use the demo account!</h2>
              <ul>
                <li className="facebook-button">
                  <a href="https://www.linkedin.com/in/mason-chinkin/" target="_blank">
                    <i className="fab fa-linkedin" />
                    My LinkedIn
                  </a>
                </li>
                <li className="google-button">
                  <a href="https://github.com/MasonChinkin" target="_blank">
                    <i className="fab fa-github" />
                    My Github
                  </a>
                </li>
              </ul>
              <h2>New to AvailableFlatSurface? <Link className="form-footer-link" to={signupURL}>Create an account</Link></h2>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SigninForm;
