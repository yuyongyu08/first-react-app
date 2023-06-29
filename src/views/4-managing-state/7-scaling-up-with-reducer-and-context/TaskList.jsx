import { useTasks } from './TasksContext.js';
import Task from './Task';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul style={{padding: '0'}}>
      {tasks.map((task) => (
        <li key={task.id} style={{padding: '5px 0'}} >
          <Task task={task}/>
        </li>
      ))}
    </ul>
  );
}