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
 * Effects run at the end of a commit after the screen updates
 * Effect 在组件更新后的 commit 结束时运行
 * 
 * React will call your cleanup function each time before the Effect runs again, and one final time when the component unmounts (gets removed).
 * Effect 的 cleanup函数会在每次 Effect 运行之前运行，以及在组件卸载（被移除）时运行一次。
 */