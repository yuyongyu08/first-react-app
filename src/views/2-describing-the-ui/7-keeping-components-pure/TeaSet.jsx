import Cup from "./Cup";
import Summary from "../../../components/summary";

export default function TeaSet() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return (
    <>
      <h1>组件一定必须是纯函数</h1>
      <Cup index={1} />
      <Cup index={1} />
      <Cup index={1} />

      <Summary>
        <p>列表渲染：</p>
        <ol>
          <li> React.StrictMode 用于在开发模式下通过调用两次函数来检查不安全的生命周期</li>
          <li>纯函数组件：只关心自身逻辑，不应该改变任何props；同样的输入，同样的输出</li>
        </ol>
      </Summary>
    </>
  );
}
