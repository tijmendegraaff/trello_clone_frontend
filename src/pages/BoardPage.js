import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import CardList from '../components/CardList';

class BoardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const { fetchBoard } = this.props;
    const { id } = this.props.match.params;
    await fetchBoard(id);
    this.setState({ loading: false });
  }

  render() {
    console.log(this.props);
    const { name } = this.props.board;
    const { loading } = this.state;
    return loading ? (
      <p>loading</p>
    ) : (
      <div>
        <h1>
          This is the board with name:
          {name}
        </h1>
        <CardList title="test" />
      </div>
    );
  }
}
function mapStateToProps({ board }) {
  return { board };
}
export default connect(
  mapStateToProps,
  actions,
)(BoardPage);
