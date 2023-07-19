import { useState } from "react";
import ChatRoom from "./ChatRoom";

export default function ChatApp() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <br />
      <label>
        <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        Use dark theme
      </label>
      <hr />
      <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
    </>
  );
}

/**
 * 场景：在useEffect中，有些逻辑是非响应式（ractive）的，可以将其抽离出来
 * 解决方式1：通过useEffectEvent（实验中，未发布）
 * 解决方式2：通过useCallback
 */