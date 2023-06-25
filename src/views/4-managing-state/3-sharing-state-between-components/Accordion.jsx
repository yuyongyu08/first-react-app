import { useState } from "react";
import Panel  from "./Panel";

export default function Accordion(){
    const [activePanel, setActivePanel] = useState(0);

    const handleActiveChange = () => {
        setActivePanel(!activePanel);
    }

    return (
        <>
            <h1>Sharing state between components</h1>
            <Panel title="First Panel" isActive={activePanel === 0} onActiveChange={() => setActivePanel(0)}>
                <p>First Panel content</p>
            </Panel>
            <Panel title="Second Panel" isActive={activePanel === 1} onActiveChange={() => setActivePanel(1)}>
                <p>Second Panel content</p>
            </Panel>
        </>
    )
}

/**
 * 1. 如果要控制两个元素，就将公共state提升到它们的最近公共祖先元素中
 * 2. 通过传递事件处理函数，让子组件能够更新父组件的state
 */