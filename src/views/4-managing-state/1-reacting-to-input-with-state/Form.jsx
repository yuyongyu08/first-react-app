import {useState} from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting', or 'success'

  function handleTextChange (event){
    const {value} = event.target;
    setAnswer(value);
    setError(false);
    setStatus("typing");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("submitting");
    if (answer === "Cape Town") {
      setStatus("success");
    } else {
      setError(true);
      setStatus("typing");
    }
  };

  if (status === "success") {
    return <h1>That's right!</h1>;
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form>
        <textarea value={answer} disabled={status === "sumbting"} onChange={handleTextChange}/>
        <br />
        <button disabled={status === "empty" || status === "submitting"} onClick={handleSubmit}>Submit</button>
        {error && <p className="Error">Good guess but a wrong answer. Try again!</p>}
      </form>
    </>
  );
}

/**
 * 
 */