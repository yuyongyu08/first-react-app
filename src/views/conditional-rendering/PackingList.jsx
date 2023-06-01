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
 * 1、声明变量，通过if/else赋值后插入JSX
 * 2、通过&&运算符，只有条件为真时才渲染元素
 * 3、通过三元运算符，根据条件渲染不同的元素
*/