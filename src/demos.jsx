import Game from "./views/1-quick-start/game";
import FilterableProductTable from "./views/1-quick-start/filterable-product-table";
import Gallery from "./views/2-describing-the-ui/1-first-component/Gallery";
import TodoList from "./views/2-describing-the-ui/2-writing-markup-with-jsx/TodoList";
import Card from "./views/2-describing-the-ui/3-mixing JavaScript and JSX/Card";
import Profile from "./views/2-describing-the-ui/4-passing-props-to-component/Profile";
import PackingList from "./views/2-describing-the-ui/5-conditional-rendering/PackingList";
import List from "./views/2-describing-the-ui/6-rendering-lists/List";
import TeaSet from "./views/2-describing-the-ui/7-keeping-components-pure/TeaSet";

import Toolbar from "./views/3-adding-interactivity/1-responding-to-events/Toolbar";
import * as StateFulGallery from "./views/3-adding-interactivity/2-state/Gallery";
import ClockWall from "./views/3-adding-interactivity/3-render-and-commit/ClockWall";
import MessageSender from "./views/3-adding-interactivity/4-state-as-a-snapshot/MessageSender";
import Counter from "./views/3-adding-interactivity/5-batchs-state-updates/Counter";
import MixinForm from "./views/3-adding-interactivity/6-updating-objects-in-state/MixinForm";
import TaskApp from "./views/3-adding-interactivity/7-updating-arrays-in-state/TaskApp";

import ChoosingTheStateStructure from "./views/4-managing-state/2-choosing-the-state-structure";  
import Form from "./views/4-managing-state/1-reacting-to-input-with-state/Form";
import Accordion from "./views/4-managing-state/3-sharing-state-between-components/Accordion";
import Scoreboard from "./views/4-managing-state/4-preserving-and-presetting-state/Scoreboard";
import TaskAppWithReducer from "./views/4-managing-state/5-extracting-state-logic-into-a-reducer/TaskApp";
import SectionBoard from "./views/4-managing-state/6-passing-data-deeply-with-context/SectionBoard";
import TaskAppWithReducerAndContext from "./views/4-managing-state/7-scaling-up-with-reducer-and-context/TaskApp.jsx";

import Stopwatch from "./views/5-escape-hatches/1-referencing-values-with-refs/Stopwatch";
import MyForm from "./views/5-escape-hatches/2-manipulating-the-dom-with-refs/MyForm";
import MyApp from "./views/5-escape-hatches/3-synchronizing-with-effects/MyApp";
import ChatApp from "./views/5-escape-hatches/5-lifecycle-of-reactive-effects/ChatApp";
import ChatAppWithHooks from "./views/5-escape-hatches/6-separating-events-from-effects/ChatApp";
import CustomHookApp from "./views/5-escape-hatches/8-reusing-logix-with-custom-hooks/App"

const demos = [
  {
    chapter: "1. quick start",
    children: [
      {
        title: "tic tac toe",
        compoment: <Game />,
      },
      {
        title: "FilterableProductTable",
        compoment: <FilterableProductTable />,
      },
    ],
  },
  {
    chapter: "2. describing the ui",
    children: [
      {
        title: "my first component",
        compoment: <Gallery />,
      },
      {
        title: "JSX ",
        compoment: <TodoList />,
      },
      {
        title: "mixing JavaScript and JSX ",
        compoment: <Card />,
      },
      {
        title: "passing props to component ",
        compoment: <Profile />,
      },
      {
        title: "conditional rendering ",
        compoment: <PackingList />,
      },
      {
        title: "rendering lists",
        compoment: <List />,
      },
      {
        title: "keeping components pure",
        compoment: <TeaSet />,
      },
    ],
  },
  {
    chapter: "3. handling events",
    children: [
      { 
        title: "responding to events",
        compoment: <Toolbar/>,  
      },  
      { 
        title: "state",
        compoment: <StateFulGallery.default/>,  
      },  
      { 
        title: "render and commit",
        compoment: <ClockWall/>,  
      },
      { 
        title: "state as a snapshot",
        compoment: <MessageSender/>,  
      },
      {
        title: "batchs state updates",
        compoment: <Counter/>,
      },
      {
        title: "updateing objects in state",
        compoment: <MixinForm/>,
      },
      {
        title: "updateing arrays in state",
        compoment: <TaskApp/>,
      }
    ],
  },
  {
    chapter: "4. structuring applications",
    children: [
      {
        title: "reacting to input with state",
        compoment: <Form/>,
      },
      {
        title: "choosing the state structure",
        compoment: <ChoosingTheStateStructure/>,
      },
      {
        title: "sharing state between components",
        compoment: <Accordion/>,
      },
      {
        title: "preserving and presetting state",
        compoment: <Scoreboard/>,
      },
      {
        title: "extracting state logic into a reducer",
        compoment: <TaskAppWithReducer/>,
      },
      {
        title: "passing data deeply with context",
        compoment: <SectionBoard/>,
      },
      {
        title: "scaling up with reducer and context",
        compoment: <TaskAppWithReducerAndContext/>,
      }
    ],
  },
  {
    chapter: "5. escape hatches",
    children: [
      {
        title: "referencing values with refs",
        compoment: <Stopwatch/>,
      },
      {
        title: "manipulating the dom with refs",
        compoment: <MyForm/>,
      },
      {
        title: "synchronizing with effects",
        compoment: <MyApp/>,
      },
      {
        title: "lifecycle of reactive effects",
        compoment: <ChatApp/>,
      },
      {
        title: "separating events from effects",
        compoment: <ChatAppWithHooks/>,
      },
      {
        title: "reusing logix with custom hooks",
        compoment: <CustomHookApp/>,
      }
    ]
  }
];

export default demos;
