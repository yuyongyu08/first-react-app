import Game from "./views/game";
import FilterableProductTable from "./views/filterable-product-table";
import Gallery from "./components/Gallery";
import TeaSet from "./components/TeaSet";
import TodoList from "./components/TodoList";
import Card from "./components/Card";
import Profile from "./views/passing-props-to-component/Profile";
import PackingList from "./views/conditional-rendering/PackingList";

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
      title: "keep component pure ",
      compoment: <TeaSet />,
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
  ];

  export default demos;