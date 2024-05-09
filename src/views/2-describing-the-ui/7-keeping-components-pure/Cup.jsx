let guest = 0;

export default function Cup({ index }) {
  guest = index + 1;
  return <h3>Tea cup for guest #{guest}</h3>;
}
