import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { TasksProvider } from './TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}


/**
 * 适用场景：特定业务组件嵌套，且层级较深，且需要共享状态
 * 优点：共享状态，减少props传递
 * 方法：
 * 1. 创建context
 * 2. 创建provider，包裹需要共享状态的组件
 * 3. 使用useContext获取共享状态
 * 4. 使用useReducer管理共享状态
 */