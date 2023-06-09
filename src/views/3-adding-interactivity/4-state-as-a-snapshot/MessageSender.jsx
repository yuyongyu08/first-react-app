import { useState } from "react";

export default function MessageSender() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <>
      <h2>点击按钮，紧接着切换下拉，观察弹窗输出</h2>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          To:{" "}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

/**
 * 1、state的更新是异步的，所以在set方法后，拿到的state并没有更新
 * 2、state的更新产生一个UI“快照”，快照中异步事件的回调函数中的state也不是更新后的state
 */