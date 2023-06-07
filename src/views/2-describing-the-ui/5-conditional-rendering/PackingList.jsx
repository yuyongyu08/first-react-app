import Item from "./Item";

export default function PackingList() {
    return (
        <section>
      <h1>Sally Ride's Packing List</h1>
      <Item 
          isPacked={true} 
          deleted={true}
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          deleted={false}
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          deleted={true}
          name="Photo of Tam" 
        />
        </section>
    )
};

/** 
 * 条件渲染3种方式：
 * 1、通过if/else，声明变量，赋值后插入JSX
 * 2、通过&&运算符，一般做简单判断时直接在JSX中使用，主要利用了真值和假值
 * 3、通过三元运算符，一般用于在有两种情况下的简单判断
*/