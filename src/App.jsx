import React, { useState } from "react";
import demos from "./demos";

export default function App() {
  const lastChapter = demos[demos.length - 1];
  const lastChildren = lastChapter.children[lastChapter.children.length - 1];
  const [currentSection, setCurrentSection] = useState(lastChildren);
  const handleClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <section className="main">
      <aside className="menu">
        <ul>
          {demos.map((item) => (
            <li key={item.chapter}>
              {item.chapter}
              <ol style={{ listStyle: "auto", marginLeft: "50px" }}>
                {item.children.map((children) => (
                  <li
                    key={children.title}
                    className={currentSection.title === children.title ? "active" : ""}
                    onClick={() => handleClick(children)}
                  >
                    {children.title}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </aside>
      <main>{currentSection.compoment}</main>
    </section>
  );
}
