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
    if (e.key === "Enter")
      dispatch(
        addTodo({
          id: getNextIdFromArray(todoIds),
          text: input,
          completed: false,
          dateCreated: Date.now(),
        })
      );
  };

  return (
    <div className="todo-creator">
      <input
        type="text"
        className="todo-creator__input"
        placeholder="Create a new todo..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
