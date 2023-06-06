import Game from "./views/game";
import FilterableProductTable from "./views/filterable-product-table";
import Gallery from "./view/1-first-component/Gallery";
import TodoList from "./views/2-writing-markup-with-jsx/TodoList";
import Card from "./views/3-mixing JavaScript and JSX/Card";
import Profile from "./views/4-passing-props-to-component/Profile";
import PackingList from "./views/5-conditional-rendering/PackingList";
import List from "./views/6-rendering-lists/List";
import TeaSet from "./views/7-keeping-components-pure/TeaSet";

const demos = [
    {
      title: "tic-tac-toe",
      compoment: <Game />,
    },
    {
      title: "FilterableProductTable",
      compoment: <FilterableProductTable />,
    },
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
  ];

  export default demos;