import { memo } from "react";

const Children = function ({ items }) {
  console.log("rendering children");

  return (
    <div>
      <h3>List:</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const MemoChildren = memo(function ({ items }) {
  console.log("rendering memo children");

  return (
    <div>
      <h3>Memo List:</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export { Children, MemoChildren };
