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
  }

  render() {
    return (
      <div className='signup-form'>
        <h1>Welcome to AvailableFlatSurface!</h1>
        <form onSubmit={this.handleSubmit} className='flex-col-start'>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInput('name')} />
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleInput('email')} />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleInput('password')} />

          <input type="submit" onSubmit={this.handleSubmit} value="Create Account" />
        </form>
      </div>
    );
  }
}

export default SignupForm;
