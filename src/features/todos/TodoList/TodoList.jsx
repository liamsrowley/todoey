import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem/TodoItem";
import { selectFilteredTodoIds } from "../todos.slice";

import "./TodoList.css";

export const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds);

  return (
    <div className="todo-list">
      {todoIds.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  );
};
