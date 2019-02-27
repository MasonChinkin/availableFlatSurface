import React, { Component } from 'react';

class SigninForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    this.props.signin(this.state)
      .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div className='signin-form'>
        <h1>Please sign in</h1>
        <form onSubmit={this.handleSubmit} className='flex-col-start'>
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

          <input type="submit" onSubmit={this.handleSubmit} value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SigninForm;
