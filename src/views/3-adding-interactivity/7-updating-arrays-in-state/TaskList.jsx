import Task from "./Task";
export default function TaskList({ todos, onEdit, onDelete }) {
  return (
    <div>
      <ul style={{padding: 0}}>
        {todos.map((todo) => (
          <li key={todo.id} style={{padding: '10px 0'}}>
            <Task todo={todo} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
