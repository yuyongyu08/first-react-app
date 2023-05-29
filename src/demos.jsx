import Game from "./views/game";
import FilterableProductTable from "./views/filterable-product-table";
import TeaSet from "./components/TeaSet";

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
      title: "keep component pure ",
      compoment: <TeaSet />,
    },
  ];

  export default demos;