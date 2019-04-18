import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state);
    const { username, password } = this.state;
    return (
      <div>
        <div>This is from my LoginPage!</div>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <div>Email</div>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
          </div>
          <div>
            <div>Password</div>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default LoginPage;
