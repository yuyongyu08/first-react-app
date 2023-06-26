import { useState } from "react";
import Counter from "./Counter";

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  const [isPlayerB, setIsPlayerB] = useState(true);
  const [isPlayerC, setIsPlayerC] = useState(true);
  return (
    <div>
      <section>
        <h1>问题: 切换组件，state没有重置 </h1>
        {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
        <button
          onClick={() => {
            setIsPlayerA(!isPlayerA);
          }}
        >
          Next player!
        </button>
      </section>
      <hr />
      <section>
        <h1>解决方法1: 给组件加key （推荐）</h1>
        {isPlayerB ? <Counter key="Taylor" person="Taylor" /> : <Counter key="Sarah" person="Sarah" />}
        <button
          onClick={() => {
            setIsPlayerB(!isPlayerB);
          }}
        >
          Next player!
        </button>
      </section>
      <hr />
      <section>
        <h1>解决方法2: 通过两个&&控制组件显隐</h1>
        {isPlayerC && <Counter person="Taylor" />}
        {!isPlayerC && <Counter person="Sarah" />}
        <button
          onClick={() => {
            setIsPlayerC(!isPlayerC);
          }}
        >
          Next player!
        </button>
      </section>
    </div>
  );
}

/**
 * 1. 组件在UI树的位置不变，重新渲染时其state不会重置
 * 2. 在UI树上相同位置设置不同的key，可以让React认为是不同的组件，从而在重新渲染时重置state
 */