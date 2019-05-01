import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import * as actions from '../store/actions';

import CardList from '../components/CardList';

class BoardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  async componentDidMount() {
    const { fetchBoard } = this.props;
    const { id } = this.props.match.params;
    await fetchBoard(id);
    this.setState({ loading: false });
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const newTaskList = this.props.board.lists.find(list => list._id === destination.droppableId);
    if (newTaskList.tasks.length === 0) {
      console.log('set index to 0 and change the listId on task');
    }
  };

  render() {
    const { name, lists } = this.props.board;
    const { loading } = this.state;

    return loading ? (
      <p>loading</p>
    ) : (
      <div>
        <h1>
          This is the board with name:
          {name}
        </h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {lists.length !== 0
            ? lists.map(list => (
                <CardList key={list._id} name={list.name} tasks={list.tasks} listId={list._id} />
              ))
            : null}
        </DragDropContext>
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
