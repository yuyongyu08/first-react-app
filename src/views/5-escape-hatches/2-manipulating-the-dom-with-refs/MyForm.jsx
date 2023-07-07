import React, { useRef } from "react";
import MyInput from "./MyInput";
export default function MyForm() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

/**
 * 1、使用ref表征DOM元素，ref.current有值是在diff后的commit阶段
 * 2、给子组件添加ref，自组件必须是forwardRef
 * 3、不要用ref对dom做破坏性操作，比如修改dom的样式，或者修改dom的值，容易和react的diff算法冲突
 * 4、对于for循环列表，借助flushSync
 */