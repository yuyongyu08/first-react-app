import Summary from "../../../components/summary";
import Profile from "./Profile";
export default function Gallery() {
  return (
    <div>
      <h1>Amazing scientists: </h1>
      <Profile />
      <Profile />
      <Profile />
      <Summary>
        <ul>
          <li>react组件是一个JS函数</li>
          <li>组件名必须大写</li>
          <li>组件必须返回一个JSX元素</li>
        </ul>
      </Summary>
    </div>
  );
}
