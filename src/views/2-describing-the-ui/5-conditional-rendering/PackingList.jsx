import Item from "./Item";
import Summary from "../../../components/summary";

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <Item isPacked={true} deleted={true} name="Space suit" />
      <Item isPacked={true} deleted={false} name="Helmet with a golden leaf" />
      <Item isPacked={false} deleted={true} name="Photo of Tam" />
      <Summary>
        <p>条件渲染3种方式：</p>
        <ol>
          <li>通过if/else，声明变量，赋值后插入JSX，建议分支比较多或计算逻辑比较复杂时用</li>
          <li>通过&&运算符，一般做简单判断时直接在JSX中使用，主要利用了真值和假值</li>
          <li>通过三元运算符(a === b? b: c)，一般用于在有两种情况下的简单判断</li>
        </ol>
      </Summary>
    </section>
  );
}
