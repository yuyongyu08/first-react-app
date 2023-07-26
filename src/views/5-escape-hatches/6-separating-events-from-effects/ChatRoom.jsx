import { useEffect, useCallback } from "react";
import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { createConnection } from "./chat.js";
import { showNotification } from "./notifications.js";
const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId, theme }) {
  
  // 问题：切换主题时，会多次弹出Connected!提示
  // useEffect(() => {
  //   const connection = createConnection(serverUrl, roomId);
  //   connection.on("connected", () => {
  //     showNotification("Connected!", theme);
  //   });
  //   connection.connect();
  //   return () => connection.disconnect();
  // }, [roomId, theme]);


  // 解决方式1：通过useEffectEvent
  // const onConnected = useEffectEvent(() => {
  //   showNotification("Connected!", theme);
  // });

  // 解决方式2：通过useCallback
  const onConnected = useCallback(() => {
    showNotification("Connected!", theme);
  }, [theme]);

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on("connected", onConnected);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
