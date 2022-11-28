import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextIdFromArray } from "../../../utils/getNextIdFromArray";
import { addTodo, selectTodoIds } from "../todosSlice";
import "./TodoCreator.css";

export const TodoCreator = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const todoIds = useSelector(selectTodoIds);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();
    if (e.key === "Enter" && trimmedText) {
      dispatch(
        addTodo({
          id: getNextIdFromArray(todoIds),
          text: trimmedText,
          completed: false,
          dateCreated: Date.now(),
        })
      );
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
