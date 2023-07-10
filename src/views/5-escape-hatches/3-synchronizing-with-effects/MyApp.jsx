import { useState } from 'react';
import MyMedia from './MyMedia';
import ChatRoom from './ChatRoom';

export default function MyApp(){
    const [currentComponent, setCurrentComponent] = useState(null);

    const handleClick = (e) => {
        const value = e.target.value;
        switch(value){
            case 'MyMedia':
                setCurrentComponent(<MyMedia/>);
                break;
            case 'ChatRoom':
                setCurrentComponent(<ChatRoom/>);
                break;
            default:
                setCurrentComponent(null);
        }
    }

    return (
        <div>
            <label><input type="radio" name='tab' value="MyMedia" onClick={handleClick}/> My Media</label>
            <label><input type="radio" name='tab' value="ChatRoom" onClick={handleClick}/> ChatRoom</label>
            <br/>
            {currentComponent}
        </div>  
    );
}

/**
 * 
 * 1、Effect 在组件更新后的 commit 结束时运行
 * （Effects run at the end of a commit after the screen updates）
 * 
 * 2、Effect 的 cleanup函数会在每次 Effect 运行之前运行，以及在组件卸载（被移除）时运行一次。
 * （React will call your cleanup function each time before the Effect runs again, and one final time when the component unmounts (gets removed).）
 * 
 * 3、Effect 依赖项数组（Dependency Array）的作用
 * （1）无依赖：每次组件更新时都会运行 Effect 
 * useEffect(() => {
 *   // This runs after every render
 *  });
 * 
 * （2）依赖为空数组：只在组件挂载时运行 Effect
 * useEffect(() => {
 *  // This runs only on mount (when the component appears)
 * }, []);
 * 
 * （3）有依赖：挂载和只有当依赖项发生变化时才会运行 Effect
 * useEffect(() => {
 * // This runs on mount *and also* if either a or b have changed since the last render
 * }, [a, b]);
 * 
 */