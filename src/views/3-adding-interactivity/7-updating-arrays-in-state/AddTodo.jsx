import { useState } from "react";
export default function TodoList({ onAdd }) {
  const [title, setTitle] = useState("");
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} />
      <button onClick={() => {onAdd(title); setTitle('')}}>Add</button>
    </div>
  );
}
