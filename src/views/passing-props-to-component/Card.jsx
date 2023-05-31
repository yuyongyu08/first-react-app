import "./Card.css";

export default function Card({ color, children }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}
