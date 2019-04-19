import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    // this.setState({ submitted: true });
    const { email, password } = this.state;
    const { history } = this.props;
    if (email && password) {
      const url = 'http://localhost:3000/users/login';
      try {
        await axios.post(url, { email, password }).then((res) => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          history.push('/boards');
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>This is from my LoginPage!</div>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <div>Email</div>
            <input type="text" name="email" value={email} onChange={this.handleChange} />
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
