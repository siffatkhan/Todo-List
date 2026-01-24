import React, { useState } from "react";
import TakeInput from "./TakeInput";
import ToDoItem from "./ToDoItem";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() !== "") {
      setData((prev) => [...prev, { text: input, done: false }]);
      setInput(""); // clear input after submit
    }
  }

  // Handle input typing
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="container">
      <TakeInput
        onSubmit={handleSubmit}
        onChange={handleChange}
        input={input}
      />
      <ToDoItem submit={data} setSubmit={setData} />
    </div>
  );
}

export default App;
