import { useDispatch, useSelector } from "react-redux";
import { selectTodoById, toggleTodo } from "../todosSlice";
import "./TodoItem.css";

export const TodoItem = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => selectTodoById(state, id));

  const onCheckboxChange = (e) => {
    dispatch(toggleTodo(id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.code === "Space") onCheckboxChange();
  };

  return (
    <div className="todo">
      <div
        tabIndex="0"
        className={
          todo.completed
            ? "todo__checkbox todo__checkbox--checked"
            : "todo__checkbox"
        }
        checked={todo.completed}
        onClick={onCheckboxChange}
        onKeyDown={handleKeyDown}
      >
        {todo.completed && <span />}
      </div>
      {todo.text}
    </div>
  );
};
