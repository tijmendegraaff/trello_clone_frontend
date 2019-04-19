import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../helpers/auth-header';

class CreateBoardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
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
    const { name } = this.state;
    const { history } = this.props;
    if (name) {
      const url = 'http://localhost:3000/boards';
      try {
        await axios.post(url, { name }, { headers: authHeader() }).then((res) => {
          console.log(res);
          history.push('/boards');
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>This is from my CreateBoardPage!</div>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <div>Name</div>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </form>
        <Link to="/boards">Back</Link>
      </div>
    );
  }
}

export default CreateBoardPage;
