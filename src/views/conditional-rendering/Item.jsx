export default function Item({ name, isPacked, deleted }) {
  const text = `${name}${isPacked && "✔"}`;
  return <li className="item">{deleted ? <del>{text}</del> : text}</li>;
}
