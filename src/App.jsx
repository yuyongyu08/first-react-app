import React, { useState } from "react";
import demos from "./demos";
import Menu from "./components/Menu";

export default function App() {
  const lastChapter = demos[0];
  const lastChildren = lastChapter.children[0];
  const [currentSection, setCurrentSection] = useState(lastChildren);
  

  return (
    <section className="main">
      <Menu demos={demos} currentSection={currentSection} setCurrentSection={setCurrentSection}/>
      <main className="container">{currentSection.compoment}</main>
    </section>
  );
}
