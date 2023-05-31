export default function TodoList(){
    return (
        <>
            <h1>Todo List</h1>
            <ul>
                <li>Buy Milk</li>
                <li>Buy Eggs</li>
                <li>Buy Bread</li>
            </ul>
        </>
    );
}

/**
 * 1、必须有一个父元素，原因：react会将JSX转换成js对象，如果没有父元素，那么就无法转换
 * 2、JSX的标签必须闭合
 * 3、属性名（必须）使用驼峰命名法
 */