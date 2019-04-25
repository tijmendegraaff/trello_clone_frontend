import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

const CardList = ({ name, tasks, listId }) => {
  console.log(listId);
  return (
    <div className="container">
      <h3 className="title">{name}</h3>
      <Droppable droppableId={listId}>
        {provided => (
          <div className="cardList" {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Card task={task} key={task._id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default CardList;
