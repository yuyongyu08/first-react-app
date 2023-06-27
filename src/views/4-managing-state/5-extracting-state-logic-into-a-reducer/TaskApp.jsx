import { useImmerReducer } from 'use-immer';
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import tasksReducer from "./tasksReducer.js";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: "add",
      id: nextId++,
      text,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "change",
      task: task,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: "delete",
      id: id,
    });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}
