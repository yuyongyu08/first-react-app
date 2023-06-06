import Game from "./views/game";
import FilterableProductTable from "./views/filterable-product-table";
import Gallery from "./components/Gallery";
import TodoList from "./components/TodoList";
import Card from "./components/Card";
import Profile from "./views/passing-props-to-component/Profile";
import PackingList from "./views/conditional-rendering/PackingList";
import List from "./views/rendering-lists/List";
import TeaSet from "./views/keeping-components-pure/TeaSet";

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