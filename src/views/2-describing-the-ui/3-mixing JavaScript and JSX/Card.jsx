import Summary from "../../../components/summary";
const person = {
  name: "Gregorio Y. Zara",
  avatar: "https://i.imgur.com/7vQD0fPs.jpg",
  desciption: "Filipino engineer and physicist who invented the first two-way video telephone.",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function Card() {
  return (
    <>
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt={person.desciption} />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
      <Summary>
        <ul>
          <li>大括号：和JavaScript交互的窗口</li>
          <li>常用于：</li>
          <ol>
            <li>标签内的文本</li>
            <li>
              标签的属性，如果传递是一个对象，要用大括号包裹一层，比如style
            </li>
          </ol>
        </ul>
      </Summary>
    </>
  );
}
