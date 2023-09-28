import React, { useState, useMemo, useEffect } from "react";
import {Children, MemoChildren} from "./Children";

export default function Parent() {
  let [checked, setChecked] = useState(false);
  
  
  // const items = useMemo(() => {
  //   console.log("rendering items");
  //   return ["one", "two", "three"].map((item) => item.toUpperCase());
  // }, []);
  
  const items = ["one", "two", "three"].map((item) => item.toUpperCase());

  function handleCheck() {
    setChecked(!checked);
  }

  useEffect(() => {
    console.log("useEffect setup: ", checked);
    let timer = setTimeout(() => {
      console.log("useEffect timer: ", checked);
    }
    , 1000);
    return () => {
      console.log("useEffect cleanup ", checked);
      clearTimeout(timer);
    }
  }, [checked]);

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleCheck} /> 大小写敏感
      {/* <Children items={items} /> */}
      {/* <MemoChildren items={items} /> */}
    </div>
  );
}
