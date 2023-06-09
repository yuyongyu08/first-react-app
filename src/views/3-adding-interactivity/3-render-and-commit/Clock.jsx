import React, { useState, useEffect } from "react";

function getTimeInTimeZone(timeZone) {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return formatter.format(now);
}

export default function Clock({ timeZone }) {
  const [time, setTime] = useState(getTimeInTimeZone(timeZone));
  console.log(timeZone, time);
  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeInTimeZone(timeZone)), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Hello, {timeZone}!</h1>
      <h2>{time}</h2>
    </div>
  );
}

/**
 * 1、重新渲染就是重新执行函数组件，所以要确保组件函数是纯函数（同样的输入，同样的输出）
 * 2、组件函数重新渲染时，useState会返回最新的state，useEffect会重新执行
 */