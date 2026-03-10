import React, { useState, useEffect } from "react";
import TakeInput from "./TakeInput";
import ToDoItem from "./ToDoItem";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isUserSet, setIsUserSet] = useState(false);

  // Load user and their todo list from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("todoApp_currentUser");
    if (savedUser) {
      setCurrentUser(savedUser);
      setIsUserSet(true);
      loadUserTodos(savedUser);
    }
  }, []);

  // Save todos to localStorage whenever data changes
  useEffect(() => {
    if (currentUser && isUserSet) {
      const storageKey = `todoList_${currentUser}`;
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
  }, [data, currentUser, isUserSet]);

  // Load todos for a specific user
  function loadUserTodos(username) {
    const storageKey = `todoList_${username}`;
    const savedTodos = localStorage.getItem(storageKey);
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        setData(parsedTodos);
      } catch (error) {
        console.error("Error parsing saved todos:", error);
        setData([]);
      }
    } else {
      setData([]);
    }
  }

  // Handle user login/selection
  function handleUserSubmit(event) {
    event.preventDefault();
    if (currentUser.trim() !== "") {
      setIsUserSet(true);
      localStorage.setItem("todoApp_currentUser", currentUser);
      loadUserTodos(currentUser);
    }
  }

  // Handle user logout
  function handleLogout() {
    setIsUserSet(false);
    setCurrentUser("");
    setData([]);
    setInput("");
    localStorage.removeItem("todoApp_currentUser");
  }

  // Handle user input change
  function handleUserChange(event) {
    setCurrentUser(event.target.value);
  }

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
      {!isUserSet ? (
        // User login form
        <div className="user-login">
          <div className="heading">
            <h1>To-Do List</h1>
            <p>Enter your name to access your personal todo list:</p>
          </div>
          <form onSubmit={handleUserSubmit}>
            <div className="form">
              <input
                type="text"
                onChange={handleUserChange}
                value={currentUser}
                placeholder="Enter your name"
                required
              />
              <button type="submit">
                <span>Continue</span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Main todo list interface
        <>
          <div className="user-header">
            <h2>Welcome, {currentUser}!</h2>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
          <TakeInput
            onSubmit={handleSubmit}
            onChange={handleChange}
            input={input}
          />
          <ToDoItem submit={data} setSubmit={setData} />
        </>
      )}
    </div>
  );
}

export default App;
