import { useSelector } from "react-redux";
import { Flex } from "../../../components/flex/Flex";
import { TodoItem } from "../TodoItem/TodoItem";
import { selectFilteredTodoIds } from "../todos.slice";

import "./TodoList.css";

export const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds);

  if (todoIds.length === 0)
    return (
      <Flex alignItems="center" justifyContent="center">
        <p style={{ fontSize: "1.778rem", fontWeight: "600" }}>
          No todos found!
        </p>
      </Flex>
    );

  return (
    <div className="todo-list">
      {todoIds.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  );
};
