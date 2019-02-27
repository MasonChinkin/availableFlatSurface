import React, { Component } from 'react';

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
      .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div className='signup-form'>
        <h1>Welcome to AvailableFlatSurface!</h1>
        <form onSubmit={this.handleSubmit} className='flex-col-start'>
          <label>name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')} />
          </label>
          <label>email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} />
          </label>
          <label>password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>

          <input type="submit" onSubmit={this.handleSubmit} value="Create Account" />
        </form>
      </div>
    );
  }
}

export default SignupForm;
