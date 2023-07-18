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
