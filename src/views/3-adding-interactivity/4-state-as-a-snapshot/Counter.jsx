import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
         setNumber(number + 5);
         setTimeout(() => {
           alert(number);
         }, 1000);
      }}>+5</button>
    </>
  )
}
/**
 * 1、state的更新是异步的，所以在set方法后，拿到的state并没有更新
 * 2、state的更新产生一个UI“快照”，快照中异步事件的回调函数中的state也不是更新后的state
 */