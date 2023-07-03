import React, { useState, useRef } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef();

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

     clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

/**
 * react中有两种方式存储局部变量：
 * 1、使用state：当state变化时，组件会重新渲染
 * 2、使用ref：当ref变化时，组件不会重新渲染
 * 
 * ref可以视为没有提供setter的state，使用ref.current来获取和修改当前值
 * 
 * ref的常用场景：
 * 1、存储定时器id
 * 2、存储DOM元素
 * 3、其他不需要计算jsx的对象
 */