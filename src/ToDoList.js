import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} />
      ))}
    </ul>
  );
}

export default ToDoList;
