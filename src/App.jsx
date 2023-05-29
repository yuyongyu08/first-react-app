import React, { useState } from "react";

import Game from "./views/game";
import FilterableProductTable from "./views/filterable-product-table";
import TeaSet from "./components/TeaSet";

const DemoList = [
  {
    title: "tic-tac-toe",
    compoment: <Game />,
  },
  {
    title: "FilterableProductTable",
    compoment: <FilterableProductTable />,
  },
  {
    title: "pure component",
    compoment: <TeaSet />,
  },
];
export default function App() {
  const [currentCompoment, setCurrentCompoment] = useState(DemoList[0].compoment);
  const handleClick = (compoment) => {
    setCurrentCompoment(compoment);
  };

  return (
    <section className="main">
      <aside className="menu">
        <ul>
          {DemoList.map((item) => (
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
