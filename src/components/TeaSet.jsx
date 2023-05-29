let guest = 0;

function Cup() {
  console.log("rendering a cup before ", guest);
  // Bad: changing a preexisting variable!
  guest = guest + 1;

  console.log("rendering a cup after ", guest);
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
