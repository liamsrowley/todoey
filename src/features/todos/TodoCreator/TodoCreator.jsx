import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todos.slice";
import "./TodoCreator.css";

export const TodoCreator = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();
    if (e.key === "Enter" && trimmedText) {
      dispatch(addTodo(trimmedText));
      setInput("");
    }
  };

  return (
    <div className="todo-creator">
      <input
        autoFocus
        type="text"
        className="todo-creator__input"
        placeholder="Create a new todo..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
