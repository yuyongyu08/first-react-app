import Game from "./views/game";
import FilterableProductTable from "./views/filterable-product-table";
import Gallery from "./components/Gallery";
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
      title: "my first component",
      compoment: <Gallery />,
    },

    {
      title: "keep component pure ",
      compoment: <TeaSet />,
    },
  ];

  export default demos;