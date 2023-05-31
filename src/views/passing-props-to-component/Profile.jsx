import { useState } from "react";
import Avatar from "./Avatar";
import Card from "./Card";

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
    </>
  );
}

/**
 * 1、用函数的入参来接收props，一般直接结构出来，便于设置默认值，形如：function Avatar({ person, size = 100 })
 * 2、组件可以设置卡槽，用children来接收，形如：function Card({ color, children })
 * 3、React是单向数据流，父组件可以向子组件传递props，但是子组件不能修改props，只能由父组件修改
 */