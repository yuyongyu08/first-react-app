import { useState } from "react";
import { useTasksDispatch, initialTasks } from "./TasksContext.jsx";

let nextId = initialTasks.length;

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  const onAddTask = () => {
    if (text) {
      setText("");
      dispatch({
        type: "add",
        id: nextId++,
        text,
      });
    }
  };

  return (
    <>
      <input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onAddTask}>Add</button>
    </>
  );
}
