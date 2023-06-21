import { useState } from "react";
import Letter from "./Letter.jsx";
const letters = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
  },
];

export default function ChoosingTheStateStructure() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const selectedCount = selectedIds.size;

  function handleToggle(toggledId) {
    // Create a copy (to avoid mutation).
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
  }

  return (
    <>
      <h1>Demo</h1>
      <ol>
        {letters.map((letter) => (
          <Letter key={letter.id} letter={letter} isSelected={selectedIds.has(letter.id)} onToggle={handleToggle} />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ol>

      <br/>
      <h1>Choosing the state structure</h1>
      <ol>
        <li>如果两个state总是同时更新，合并成一个state，比如坐标的X、Y轴</li>
        <li>避免声明矛盾的state，比如同时声明sending和sent</li>
        <li>避免重复声明state（通过props或state计算可以获得），比如同时声明error和errorText</li>
        <li>避免state的数据结构深度嵌套，可以将数据拍平便于更新，比如树形结构只做一维存储</li>
        <li>对于数组对象，如果要记录某个元素，尽量记录此元素对象的ID，而不是整个对象</li>
      </ol>
      <strong>将props作为state的初始值，props再次变化不会引发子组件state的更新，这种state只在第一次渲染时初始化</strong>
    </>
  );
}
