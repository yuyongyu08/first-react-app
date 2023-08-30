import Summary from "../../../components/summary";
export default function TodoList() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        <li>Buy Milk</li>
        <li>Buy Eggs</li>
        <li>Buy Bread</li>
      </ul>
      <Summary>
        <ul>
          <li>
            组件返回的JSX只能有一个根元素，原因：
            <ol>
              <li>模板都将被编译为render函数，而函数的返回值只能是一个，所以如果不用单独的根节点包住，就会并列返回多个返回值，这在js中是不允许的。</li>
              <li>将把模板的内容转换为对应的元素，最后建立起虚拟dom树，而树状结构只能有唯一的根节点，这样在后续的虚拟dom数据有变化时，可以检查到具体更改额位置。如果有多个根节点，则不能明确到底要在哪个树上查找更新。</li>
            </ol>
          </li>
          <li>JSX的标签必须闭合</li>
          <li>组件的属性名（必须）使用驼峰命名法（例如className、style里的属性名）</li>
        </ul>
      </Summary>
    </>
  );
}
