import React, { useEffect, useState } from "react";
import { createConnection } from "./chat";

export default function ChatRoom({ roomId }) {
  const [serverURL, setServerURL] = useState("ws://localhost:8080");

  useEffect(() => {
    const connection = createConnection(serverURL, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverURL]);

  return (
    <div>
      <h1>ChatRoom</h1>
      <input value={serverURL} onChange={(e) => setServerURL(e.target.value)} />
    </div>
  );
}
