import Section from "./Section";
import Heading from "./Heading";
import Post from "./Post";
import AllPosts from "./AllPosts";

export default function SectionBoard() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  );
}

/**
 * 1. context主要解决的是跨层级传递数据的问题
 * 2. context的使用分为3步：
 * 第1步：创建context，export const MyContext = createContext(defaultValue)
 * 第2步：在父组件中使用context包裹子元素，<MyContext.Provider value={value}>...</MyContext.Provider>
 * 第3步：在后代组件中使用context，const value = useContext(MyContext)
 */