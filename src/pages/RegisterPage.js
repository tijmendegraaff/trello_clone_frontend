import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  render() {
    console.log(this.state);
    const { user } = this.state;
    return (
      <div>
        <div>This is from my RegisterPage!</div>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <div>First Name</div>
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <div>Last Name</div>
            <input type="text" name="lastName" value={user.lastName} onChange={this.handleChange} />
          </div>
          <div>
            <div>email</div>
            <input type="email" name="email" value={user.email} onChange={this.handleChange} />
          </div>
          <div>
            <div>Password</div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
export default RegisterPage;
