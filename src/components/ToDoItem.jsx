import React from "react";

export default function ToDoItem(props) {
  // Delete an item
  function deleteItem(indexToDelete) {
    props.setSubmit((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  }

  // Toggle line-through per item
  function toggleDone(index) {
    props.setSubmit((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <div>
      <ul>
        {props.submit.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleDone(index)}
            style={{
              cursor: "pointer",
              textDecoration: item.done ? "line-through" : "none",
            }}
          >
            {item.text}
            <button
              onClick={(e) => {
                e.stopPropagation(); // stop line toggle when deleting
                deleteItem(index);
              }}
              style={{ marginLeft: "10px" }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
