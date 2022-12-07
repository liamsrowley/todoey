import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todos.slice";
import styles from "./TodoCreator.module.css";

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
    <div className={styles["todo-creator"]}>
      <input
        autoFocus
        type="text"
        placeholder="Create a new todo..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
