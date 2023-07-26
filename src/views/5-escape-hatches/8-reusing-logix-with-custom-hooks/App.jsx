import SaveButton from "./Savebutton";
import StatusBar from "./StatusBar";

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}

/**
 * 1、自定义hooks是组件的一部分，仅仅为了复用和便于阅读做了封装
 * 2、自定义hooks共享的是状态化的逻辑，而不是状态本身
 */