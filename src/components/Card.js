import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ task, index }) => (
  <Draggable draggableId={task._id} index={index}>
    {provided => (
      <div
        className="card-container"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {task.name}
      </div>
    )}
  </Draggable>
);

export default Card;
