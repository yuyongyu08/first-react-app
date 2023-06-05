export default function listItem({ onChange, onAdd, onDelete, item }) {
  return (
    <div style={{marginTop: '10px'}}>
      <input type="checkbox" onChange={onChange} id={item.id} value={item.value} />{item.content} <button onClick={onAdd}>add</button> <button onClick={() => onDelete(item.id)}>delete</button>
    </div>
  );
}
