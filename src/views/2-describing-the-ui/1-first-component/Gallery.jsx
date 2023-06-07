import Profile from "./Profile";
// 组件名必须大写！！！
export default function Gallery() {
    return (
        <div>
            <h1>Amazing scientists: </h1>
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}

/**
 * react组件是一个JS函数：
 * 1.组件名必须大写
 * 2.组件必须返回一个JSX元素
 */