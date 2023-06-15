import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleTodoAdd(title) {
    const newTodo = {
      id: nextId,
      title: title,
      done: false,
    };
    nextId++;
    setTodos([...todos, newTodo]);
  }

  function handleTodoEdit(nextTodo) {
    setTodos(todos.map((todo) => {
        if (todo.id === nextTodo.id) {
            return nextTodo;
        }
        return todo;
        }
    ));
  }

  function handleTodoDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div style={{marginTop: '20px'}}>
      <AddTodo onAdd={handleTodoAdd} />
      <TodoList todos={todos} onEdit={handleTodoEdit} onDelete={handleTodoDelete} />
    </div>
  );
}
/**
 * 数组的修改
 * 1、增：用展开运算符+新元素构造新数组
 * 2、删：用filter过滤掉要删除的元素
 * 3、改（转换元素、替换元素、修改元素）：用map遍历，修改指定元素
 * 4、排序：先复制一份，再排序
 * 5、元素是对象：先复制一份元素，再修改
 *
 * 终极大招：use-immer，可以使用数组原生方法直接修改
 */
