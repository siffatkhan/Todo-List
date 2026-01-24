import React from "react";

export default function TakeInput(props) {
  return (
    <>
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={props.onSubmit}>
        <div className="form">
          <input
            type="text"
            onChange={props.onChange}
            value={props.input}
            placeholder="Add new item"
            required
          />
          <button type="submit">
            <span>Add</span>
          </button>
        </div>
      </form>
    </>
  );
}
