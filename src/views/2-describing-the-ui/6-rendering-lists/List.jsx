import { useState } from "react";
import ListItem from "./ListItem";
import { todos } from "./data";
import Summary from "../../../components/summary";

export default function List() {
  const [todoList, setTodoList] = useState(todos);
  const todoListItems = todoList.map((item, index) => (
    <ListItem item={item} key={index} onChange={onChange} onAdd={onAdd} onDelete={onDelete}/>
  ));

  function onAdd() {
    setTodoList([...todoList, { id: todoList.length, checked: true, content: `todo${todoList.length}` }]);
  }

  function onDelete(id) {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  }


  function onChange(e) {
    const id = e.target.id;
    const checked = e.target.checked;
    const newTodoList = todoList.map((item) => {
      if (item.id == id) {
        return { ...item, checked: checked };
      }
      return item;
    });
    setTodoList(newTodoList);
  }

  return (
    <>
      <section>
        <h1>TODO List</h1>
        {todoListItems}
        <p>
          复现步骤：先选中todo2，然后删除todo1，todo2的选中状态会变成false
        </p>
      </section>
      <Summary>
        <p>列表渲染：</p>
        <ol>
          <li>通过filter函数，过滤数组</li>
          <li>通过map函数，将数组转换成JSX数组</li>
          <li>渲染列表时，需要给每个元素设置key，key必须是唯一的，避免使用index作为key，因为index不是唯一的，当数组中的元素发生变化时，index可能会发生变化，导致key不唯一</li>
        </ol>
      </Summary>
    </>
  );
}

