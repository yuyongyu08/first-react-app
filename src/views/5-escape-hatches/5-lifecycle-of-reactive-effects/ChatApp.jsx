import React, {useState} from "react";
import ChatRoom from "./ChatRoom";

export default function ChatApp() {
    const [showRoom, setShowRoom] = useState(true);
    const [roomId, setRoomId] = useState("general");

  return (
    <div>
      <h1>ChatApp</h1>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShowRoom(!showRoom)}>{showRoom ? 'close' : 'open'} ChatRoom</button>
      <hr />
      {
        showRoom ? <ChatRoom roomId={roomId} /> : null
      }
    </div>
  );
}

/**
 * 1、组件的生命周期：挂载、更新、卸载
 * 2、每一个Effect都是独立的一个生命周期：启动、停止
 * 3、声明在组件内部的值都是响应式的（reactive），如果Effect中用到了这些值，则需要将这些值作为依赖传入
 */