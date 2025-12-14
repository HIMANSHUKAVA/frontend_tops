// components/TodoApp.jsx
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../component/todoAtom";

export default function TodoApp() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [text, setText] = useState("");

  // Add todo
  const addTodo = () => {
    if (text.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
    setText("");
  };

  // Toggle complete
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Remove todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>Recoil Todo App</h2>

      <input
        type="text"
        value={text}
        placeholder="Enter task"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => removeTodo(todo.id)}>wrong</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
