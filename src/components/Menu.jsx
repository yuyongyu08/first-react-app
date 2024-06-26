import { NavLink } from "react-router-dom";
export default function Menu({ demos, currentSection, setCurrentSection }) {
  const handleClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <aside className="menu">
      <ul>
        {demos.map((item) => (
          <li key={item.chapter}>
            {item.chapter}
            <ol>
              {item.children.map((children) => (
                <li
                  key={children.title}
                  className={currentSection.title === children.title ? "active" : ""}
                  onClick={() => handleClick(children)}
                >
                  <NavLink to={`${item.path}/${children.path}`}>{children.title}</NavLink>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </aside>
  );
}
