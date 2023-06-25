export default function Panel({ title, isActive, children, onActiveChange }) {
  return (
    <section style={{marginTop: '20px', padding: '10px', border: '1px solid #eee'}}>
      <h3>{title}</h3>
      {isActive ? <div>{children}</div> : <button onClick={onActiveChange}>Show</button>}
    </section>
  );
}
