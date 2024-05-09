import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { routes } from "../router";
import Menu from "./Menu";

export default function App() {
  const lastChapter = routes[0];
  const demos = lastChapter.children;
  const [currentSection, setCurrentSection] = useState("/");

  return (
    <section className="main">
      <Menu demos={demos} currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <div style={{padding: '20px'}}>
        <Outlet />
      </div>
    </section>
  );
}
