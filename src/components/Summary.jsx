export default function Summary({ children }) {
  return (
    <div style={{marginTop: '100px'}}>
      <h1>要点总结</h1>
      <div>
        {children}
      </div>
    </div>
  );
}
