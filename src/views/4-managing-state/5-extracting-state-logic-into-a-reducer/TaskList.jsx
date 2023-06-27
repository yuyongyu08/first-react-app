import { useState } from 'react';
import Task from './Task';

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
  return (
    <ul style={{padding: '0'}}>
      {tasks.map((task) => (
        <li key={task.id} style={{padding: '5px 0'}} >
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}