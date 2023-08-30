import { useState } from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import Summary from "../../../components/summary";

export default function Profile() {
  const [color, setColor] = useState("lightcoral");

  return (
    <>
      <p>
        Pick a color:{" "}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Card color={color}>
        <Avatar
          person={{
            name: "Katsuko Saruhashi",
            imageURL: "https://upload.wikimedia.org/wikipedia/en/0/08/Katsuko_Saruhashi.jpg",
          }}
        />
      </Card>
      <Summary>
        <ol>
          <li>
            用函数的入参来接收props，一般直接解构出来，便于设置默认值
            ，默认值只有在props中没有传递时或为undefined才会生效，null不会生效
          </li>
          <li>组件可以设置卡槽，用children属性来接收</li>
          <li>React是纯粹的单向数据流，父组件可以向子组件传递props，但是子组件不能直接修改props，只能由通过父组件的函数来进行修改</li>
        </ol>
      </Summary>
    </>
  );
}
