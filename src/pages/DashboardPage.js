import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const { fetchBoards, fetchUser } = this.props;
    await fetchBoards();
    await fetchUser();
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    const { currentUser, boards } = this.props;

    const board = ({ _id, name }) => (
      <Link key={`board-${_id}`} to={`/boards/${_id}`}>
        <li>{name}</li>
      </Link>
    );
    return loading ? (
      <p>loading</p>
    ) : (
      <div>
        <h1>
          Welkom back
          {currentUser.firstName}
        </h1>
        This is from my dashboard component!
        <div>
          {boards.length !== 0 ? boards.map(b => board(b)) : null}
          <Link to="/boards/create">create a board</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ boards, currentUser }) {
  return { boards, currentUser };
}
export default connect(
  mapStateToProps,
  actions,
)(DashboardPage);
