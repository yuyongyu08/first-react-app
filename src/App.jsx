import React, { useState } from "react";
import demos from "./demos";

export default function App() {
  const [currentCompoment, setCurrentCompoment] = useState(demos[demos.length - 1].compoment);
  const handleClick = (compoment) => {
    setCurrentCompoment(compoment);
  };

  return (
    <section className="main">
      <aside className="menu">
        <ul>
          {demos.map((item) => (
            <li style={{ cursor: "pointer" }} key={item.title} onClick={() => handleClick(item.compoment)}>
              {item.title}
            </li>
          ))}
        </ul>
      </aside>
      <main>{currentCompoment}</main>
    </section>
  );
}
