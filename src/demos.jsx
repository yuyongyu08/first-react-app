import Game from "./views/1-quick-start/game";
import FilterableProductTable from "./views/1-quick-start/filterable-product-table";
import Gallery from "./views/2-describing-the-ui/1-first-component/Gallery";
import TodoList from "./views/2-describing-the-ui/2-writing-markup-with-jsx/TodoList";
import Card from "./views/2-describing-the-ui/3-mixing JavaScript and JSX/Card";
import Profile from "./views/2-describing-the-ui/4-passing-props-to-component/Profile";
import PackingList from "./views/2-describing-the-ui/5-conditional-rendering/PackingList";
import List from "./views/2-describing-the-ui/6-rendering-lists/List";
import TeaSet from "./views/2-describing-the-ui/7-keeping-components-pure/TeaSet";

import Toolbar from "./views/3-adding-interactivity/1-responding-to-events/Toolbar";
import * as StateFulGallery from "./views/3-adding-interactivity/2-state/Gallery";

const demos = [
  {
    chapter: "1-quick-start",
    children: [
      {
        title: "tic-tac-toe",
        compoment: <Game />,
      },
      {
        title: "FilterableProductTable",
        compoment: <FilterableProductTable />,
      },
    ],
  },
  {
    chapter: "2-describing-the-ui",
    children: [
      {
        title: "my first component",
        compoment: <Gallery />,
      },
      {
        title: "JSX ",
        compoment: <TodoList />,
      },
      {
        title: "mixing JavaScript and JSX ",
        compoment: <Card />,
      },
      {
        title: "passing props to component ",
        compoment: <Profile />,
      },
      {
        title: "conditional rendering ",
        compoment: <PackingList />,
      },
      {
        title: "rendering lists",
        compoment: <List />,
      },
      {
        title: "keeping-components-pure",
        compoment: <TeaSet />,
      },
    ],
  },
  {
    chapter: "3-handling-events",
    children: [
      { 
        title: "responding-to-events",
        compoment: <Toolbar/>,  
      },  
      { 
        title: "state",
        compoment: <StateFulGallery.default/>,  
      },  
    ],
  }
];

export default demos;
