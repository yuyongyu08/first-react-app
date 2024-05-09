import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";

import Game from "../views/1-quick-start/game/index.jsx";
import FilterableProductTable from "../views/1-quick-start/filterable-product-table/index.jsx";
import Gallery from "../views/2-describing-the-ui/1-first-component/Gallery.jsx";
import TodoList from "../views/2-describing-the-ui/2-writing-markup-with-jsx/TodoList.jsx";
import Card from "../views/2-describing-the-ui/3-mixing JavaScript and JSX/Card.jsx";
import Profile from "../views/2-describing-the-ui/4-passing-props-to-component/Profile.jsx";
import PackingList from "../views/2-describing-the-ui/5-conditional-rendering/PackingList.jsx";
import List from "../views/2-describing-the-ui/6-rendering-lists/List.jsx";
import TeaSet from "../views/2-describing-the-ui/7-keeping-components-pure/TeaSet.jsx";

import Toolbar from "../views/3-adding-interactivity/1-responding-to-events/Toolbar.jsx";
import * as StateFulGallery from "../views/3-adding-interactivity/2-state/Gallery.jsx";
import ClockWall from "../views/3-adding-interactivity/3-render-and-commit/ClockWall.jsx";
import MessageSender from "../views/3-adding-interactivity/4-state-as-a-snapshot/MessageSender.jsx";
import Counter from "../views/3-adding-interactivity/5-batchs-state-updates/Counter.jsx";
import MixinForm from "../views/3-adding-interactivity/6-updating-objects-in-state/MixinForm.jsx";
import TaskApp from "../views/3-adding-interactivity/7-updating-arrays-in-state/TaskApp.jsx";

import ChoosingTheStateStructure from "../views/4-managing-state/2-choosing-the-state-structure/index.jsx";
import Form from "../views/4-managing-state/1-reacting-to-input-with-state/Form.jsx";
import Accordion from "../views/4-managing-state/3-sharing-state-between-components/Accordion.jsx";
import Scoreboard from "../views/4-managing-state/4-preserving-and-presetting-state/Scoreboard.jsx";
import TaskAppWithReducer from "../views/4-managing-state/5-extracting-state-logic-into-a-reducer/TaskApp.jsx";
import SectionBoard from "../views/4-managing-state/6-passing-data-deeply-with-context/SectionBoard.jsx";
import TaskAppWithReducerAndContext from "../views/4-managing-state/7-scaling-up-with-reducer-and-context/TaskApp.jsx";

import Stopwatch from "../views/5-escape-hatches/1-referencing-values-with-refs/Stopwatch.jsx";
import MyForm from "../views/5-escape-hatches/2-manipulating-the-dom-with-refs/MyForm.jsx";
import MyApp from "../views/5-escape-hatches/3-synchronizing-with-effects/MyApp.jsx";
import ChatApp from "../views/5-escape-hatches/5-lifecycle-of-reactive-effects/ChatApp.jsx";
import ChatAppWithHooks from "../views/5-escape-hatches/6-separating-events-from-effects/ChatApp.jsx";
import CustomHookApp from "../views/5-escape-hatches/8-reusing-logix-with-custom-hooks/App.jsx";

import Parent from "../views/6-other/1-invalid-rerender/Parent.jsx";

export const routes = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        chapter: "1. quick start",
        path: "quick-start",
        children: [
          {
            title: "tic tac toe",
            path: "tic-tac-toe",
            element: <Game />,
          },
          {
            title: "FilterableProductTable",
            path: "filterable-product-table",
            element: <FilterableProductTable />,
          },
        ],
      },
      {
        chapter: "2. describing the ui",
        path: "describing-the-ui",
        children: [
          {
            title: "my first component",
            path: "my-first-component",
            element: <Gallery />,
          },
          {
            title: "JSX ",
            path: "jsx",
            element: <TodoList />,
          },
          {
            title: "mixing JavaScript and JSX ",
            path: "mixing-javascript-and-jsx",
            element: <Card />,
          },
          {
            title: "passing props to component ",
            path: "passing-props-to-component",
            element: <Profile />,
          },
          {
            title: "conditional rendering ",
            path: "conditional-rendering",
            element: <PackingList />,
          },
          {
            title: "rendering lists",
            path: "rendering-lists",
            element: <List />,
          },
          {
            title: "keeping components pure",
            path: "keeping-components-pure",
            element: <TeaSet />,
          },
        ],
      },
      {
        chapter: "3. handling events",
        path: "handling-events",
        children: [
          {
            title: "responding to events",
            path: "responding-to-events",
            element: <Toolbar />,
          },
          {
            title: "state",
            path: "state",
            element: <StateFulGallery.default />,
          },
          {
            title: "render and commit",
            path: "render-and-commit",
            element: <ClockWall />,
          },
          {
            title: "state as a snapshot",
            path: "state-as-a-snapshot",
            element: <MessageSender />,
          },
          {
            title: "batchs state updates",
            path: "batchs-state-updates",
            element: <Counter />,
          },
          {
            title: "updateing objects in state",
            path: "updateing-objects-in-state",
            element: <MixinForm />,
          },
          {
            title: "updateing arrays in state",
            path: "updateing-arrays-in-state",
            element: <TaskApp />,
          },
        ],
      },
      {
        chapter: "4. structuring applications",
        path: "structuring-applications",
        children: [
          {
            title: "reacting to input with state",
            path: "reacting-to-input-with-state",
            element: <Form />,
          },
          {
            title: "choosing the state structure",
            path: "choosing-the-state-structure",
            element: <ChoosingTheStateStructure />,
          },
          {
            title: "sharing state between components",
            path: "sharing-state-between-components",
            element: <Accordion />,
          },
          {
            title: "preserving and presetting state",
            path: "preserving-and-presetting-state",
            element: <Scoreboard />,
          },
          {
            title: "extracting state logic into a reducer",
            path: "extracting-state-logic-into-a-reducer",
            element: <TaskAppWithReducer />,
          },
          {
            title: "passing data deeply with context",
            path: "passing-data-deeply-with-context",
            element: <SectionBoard />,
          },
          {
            title: "scaling up with reducer and context",
            path: "scaling-up-with-reducer-and-context",
            element: <TaskAppWithReducerAndContext />,
          },
        ],
      },
      {
        chapter: "5. escape hatches",
        path: "escape-hatches",
        children: [
          {
            title: "referencing values with refs",
            path: "referencing-values-with-refs",
            element: <Stopwatch />,
          },
          {
            title: "manipulating the dom with refs",
            path: "manipulating-the-dom-with-refs",
            element: <MyForm />,
          },
          {
            title: "synchronizing with effects",
            path: "synchronizing-with-effects",
            element: <MyApp />,
          },
          {
            title: "lifecycle of reactive effects",
            path: "lifecycle-of-reactive-effects",
            element: <ChatApp />,
          },
          {
            title: "separating events from effects",
            path: "separating-events-from-effects",
            element: <ChatAppWithHooks />,
          },
          {
            title: "reusing logix with custom hooks",
            path: "reusing-logix-with-custom-hooks",
            element: <CustomHookApp />,
          },
        ],
      },
      {
        chapter: "6. other",
        path: "other",
        children: [
          {
            title: "invalid-rerender",
            path: "invalid-rerender",
            element: <Parent />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
