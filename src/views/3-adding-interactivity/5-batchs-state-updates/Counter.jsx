import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 1000);
        }}
      >
        异步读取state
      </button>
      <br />
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3 连续【替换】{'setNumber(number + 1)'}
      </button>
      <br />
      <button
        onClick={() => {
          setNumber( n =>n + 1);
          setNumber( n =>n + 1);
          setNumber( n =>n + 1);
        }}
      >
        +3 连续【更新】{'setNumber( n =>n + 1)'}
      </button>
      <br />
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}
      >
        state先更新，再替换
      </button>
      <br />
      <button
        onClick={() => {
          setNumber(n => n + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        state先替换，再更新
      </button>
      <br />
      <button
        onClick={() => {
          setNumber(0);
        }}
      >
        清零
      </button>
    </>
  );
}

/**
 * 1、同一个state多次更新，React会将多次更新合并成一次更新，只触发一次重新渲染
 * 2、state的更新有两种方式：替换和更新
 */