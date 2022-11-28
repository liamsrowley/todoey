import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem/TodoItem";
import { selectTodoIds } from "../todosSlice";

import "./TodoList.css";

export const TodoList = () => {
  const todoIds = useSelector(selectTodoIds);

  return (
    <div className="todo-list">
      {todoIds.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  );
};
