import Cup from "./Cup";

export default function TeaSet() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return (
    <>
      <h1>Tea Set</h1>
      {cups}
    </>
  );
}

/**
 * 1. <React.StrictMode> 用于在开发模式下通过调用两次函数来检查不安全的生命周期
 * 2. 纯函数组件：只关心自身逻辑，不应该改变任何props；同样的输入，同样的输出
 */
